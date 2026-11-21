/* Shortmeshi / Toon Studio 3D — real Add-primitives engineering layer.
 *
 * The shipped bundle creates primitives correctly at the store level, but its
 * UI never passes creation params into addPrimitive(), its creation sliders are
 * post-hoc modifiers only, several light/camera props are dropped, and a few
 * "primitives" are literal stubs (plain box / sphere). This module owns the
 * whole Add-tab creation path from the DOM down to the scene store:
 *
 *   - canonical 42-type catalog + defaults (mirrors src/stores/scene.ts)
 *   - real pending creation params, applied AT creation time
 *   - live param drawer for every type that actually has params
 *   - light distance/angle, plane size, camera optics and timeline clip wiring
 *   - real geometry for stub/alias types (text, metaball, lattice, arrows,
 *     empty sphere, NURBS curve) instead of a plain cube
 *   - undo-safe self test: window.__primitives.selfTest()
 *
 * Loaded AFTER studio-pro-bundle.js. No bundle edits required.
 */
(function () {
  'use strict';

  var T = null, ss = null, vs = null, tl = null;
  var pending = {};      // type -> creation params chosen in the drawer
  var last = { id: null, type: null };
  var toastTimer = null;

  /* ------------------------------------------------------------------ utils */
  function get(store) {
    var value;
    var un = store.subscribe(function (v) { value = v; });
    un();
    return value;
  }
  function num(v, d, min, max) {
    v = Number(v);
    if (!isFinite(v)) return d;
    return Math.min(max, Math.max(min, v));
  }
  function clamp01(v) { return Math.min(1, Math.max(0, v)); }
  function toast(msg) {
    var m = document.getElementById('msg');
    if (!m) return;
    m.textContent = msg;
    m.style.display = 'block';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { m.style.display = 'none'; }, 1900);
  }
  function spawnPosition() {
    var state = get(vs);
    return state.cursorVisible && state.cursorPosition
      ? [].concat(state.cursorPosition)
      : [0, 0.5, 0];
  }
  function isLight(type) { return type === 'light' || type.indexOf('light_') === 0; }
  function isCamera(type) { return type === 'camera' || type.indexOf('camera_') === 0; }
  function isImport(type) { return type === 'import_device' || type === 'import_photo'; }
  function isClippable(type) {
    return !isImport(type) && !isLight(type) && !isCamera(type) &&
           type !== 'bone' && type !== 'camera_ortho';
  }

  /* --------------------------------------------------------- 42-type catalog */
  // [label, category, defaults, param schema]
  // schema entries: [key, label, min, max, step, kind]
  // kind: 'num' (default) | 'int' | 'text' | 'color'
  function P(key, label, min, max, step, kind) {
    return { key: key, label: label, min: min, max: max, step: step, kind: kind || 'num' };
  }
  var CAT = {
    cube:       ['Cube', 'Mesh', { sizeX: 1, sizeY: 1, sizeZ: 1 }, [P('sizeX', 'X', .1, 3, .1), P('sizeY', 'Y', .1, 3, .1), P('sizeZ', 'Z', .1, 3, .1)]],
    sphere:     ['UV Sphere', 'Mesh', { segments: 32, rings: 16, radius: .5 }, [P('radius', 'Rad', .1, 2, .05), P('segments', 'Seg', 8, 64, 4, 'int'), P('rings', 'Ring', 4, 32, 2, 'int')]],
    icosphere:  ['Ico Sphere', 'Mesh', { subdivisions: 1, radius: .5 }, [P('radius', 'Rad', .1, 2, .05), P('subdivisions', 'Subdiv', 0, 3, 1, 'int')]],
    cylinder:   ['Cylinder', 'Mesh', { segments: 32, radius: .5, height: 1 }, [P('radius', 'Rad', .1, 2, .05), P('height', 'Hgt', .2, 3, .1), P('segments', 'Seg', 8, 64, 4, 'int')]],
    cone:       ['Cone', 'Mesh', { segments: 32, radius: .5, height: 1 }, [P('radius', 'Rad', .1, 2, .05), P('height', 'Hgt', .2, 3, .1), P('segments', 'Seg', 8, 64, 4, 'int')]],
    torus:      ['Torus', 'Mesh', { segments: 32, sides: 16, radius: .35, tube: .15 }, [P('radius', 'Maj R', .1, 1.5, .05), P('tube', 'Min R', .02, .5, .02), P('segments', 'Seg', 8, 64, 4, 'int'), P('sides', 'Sides', 6, 32, 2, 'int')]],
    plane:      ['Plane', 'Mesh', { sizeX: 2.4, sizeY: 2.4, subdivisions: 1 }, [P('sizeX', 'W', .5, 5, .5), P('sizeY', 'H', .5, 5, .5), P('subdivisions', 'Subdiv', 1, 16, 1, 'int')]],
    circle:     ['Circle', 'Mesh', { segments: 32, radius: .5 }, [P('radius', 'Rad', .1, 2, .05), P('segments', 'Seg', 6, 64, 2, 'int')]],
    grid:       ['Grid', 'Mesh', { subdivisions: 4, sizeX: 2, sizeY: 2 }, [P('sizeX', 'W', .5, 5, .5), P('sizeY', 'H', .5, 5, .5), P('subdivisions', 'Subdiv', 1, 16, 1, 'int')]],
    pyramid:    ['Pyramid', 'Mesh', { sides: 4, radius: .5, height: 1 }, [P('sides', 'Sides', 3, 12, 1, 'int'), P('radius', 'Rad', .1, 2, .05), P('height', 'Hgt', .2, 3, .1)]],
    tube:       ['Tube', 'Mesh', { segments: 24, innerRadius: .3, outerRadius: .5, height: 1 }, [P('outerRadius', 'Out R', .2, 2, .05), P('innerRadius', 'In R', .05, 1.8, .05), P('height', 'Hgt', .2, 3, .1), P('segments', 'Seg', 8, 48, 2, 'int')]],
    capsule:    ['Capsule', 'Mesh', { segments: 20, rings: 6, radius: .25, height: .6 }, [P('radius', 'Rad', .1, 1.5, .05), P('height', 'Hgt', .2, 3, .1), P('segments', 'Seg', 8, 32, 2, 'int'), P('rings', 'Rings', 3, 12, 1, 'int')]],
    curve_bezier: ['Bezier Curve', 'Curve', {}, []],
    curve_circle: ['Bezier Circle', 'Curve', {}, []],
    curve_path:   ['Path', 'Curve', {}, []],
    curve_nurbs:  ['NURBS Curve', 'Curve', { tension: .5, segments: 24 }, [P('tension', 'Tension', 0, 1, .05), P('segments', 'Seg', 8, 48, 2, 'int')]],
    light:      ['Point Light', 'Light', { intensity: 1, color: '#ffffff', radius: 5 }, [P('intensity', 'Power', .1, 5, .1), P('radius', 'Dist', 1, 20, 1), P('color', 'Color', null, null, null, 'color')]],
    light_sun:  ['Sun Light', 'Light', { intensity: 1.5, color: '#fff9e6', angle: 45 }, [P('intensity', 'Power', .1, 5, .1), P('angle', 'Angle', 1, 90, 1), P('color', 'Color', null, null, null, 'color')]],
    light_spot: ['Spot Light', 'Light', { intensity: 2, color: '#ffffff', spotAngle: 45, radius: 8 }, [P('intensity', 'Power', .1, 5, .1), P('spotAngle', 'Cone', 5, 120, 5), P('radius', 'Dist', 1, 20, 1), P('color', 'Color', null, null, null, 'color')]],
    light_area: ['Area Light', 'Light', { intensity: 1.2, color: '#ffffff', sizeX: 1, sizeY: 1 }, [P('intensity', 'Power', .1, 5, .1), P('sizeX', 'W', .2, 4, .2), P('sizeY', 'H', .2, 4, .2), P('color', 'Color', null, null, null, 'color')]],
    camera:     ['Perspective', 'Camera', { fov: 45, near: .1, far: 100 }, [P('fov', 'FOV', 20, 100, 2, 'int'), P('near', 'Near', .01, 2, .01), P('far', 'Far', 10, 500, 10, 'int')]],
    camera_ortho: ['Orthographic', 'Camera', { orthoScale: 4, near: .1, far: 100 }, [P('orthoScale', 'Scale', .5, 12, .5), P('near', 'Near', .01, 2, .01), P('far', 'Far', 10, 500, 10, 'int')]],
    empty_axes:  ['Plain Axes', 'Empty', {}, []],
    empty_arrows:['Arrows', 'Empty', {}, []],
    empty_cube:  ['Cube Empty', 'Empty', {}, []],
    empty_sphere:['Sphere Empty', 'Empty', {}, []],
    empty_circle:['Circle Empty', 'Empty', {}, []],
    empty_image: ['Image Empty', 'Empty', {}, []],
    text_3d:     ['3D Text', 'Text', { text: '3D Text', depth: .2 }, [P('text', 'Text', null, null, null, 'text'), P('depth', 'Depth', .05, .8, .05)]],
    import_device: ['Device Model', 'Import', {}, []],
    import_photo:  ['Reference Image', 'Import', {}, []],
    asset_suzanne: ['Suzanne Monkey', 'Import', {}, []],
    asset_tree:    ['Stylized Tree', 'Import', {}, []],
    asset_car:     ['Stylized Car', 'Import', {}, []],
    asset_character: ['Character', 'Import', {}, []],
    asset_chair:   ['Modern Chair', 'Import', {}, []],
    bone:        ['Armature Bone', 'More', { length: .45 }, [P('length', 'Len', .1, 1.5, .05)]],
    metaball:    ['Metaball', 'More', { radius: .4, blobs: 3 }, [P('radius', 'Rad', .1, 1, .05), P('blobs', 'Blobs', 2, 6, 1, 'int')]],
    lattice:     ['Lattice Cage', 'More', { subdivisions: 2, size: 1 }, [P('subdivisions', 'Div', 1, 5, 1, 'int'), P('size', 'Size', .5, 3, .1)]],
    forcefield:  ['Force Field', 'More', {}, []],
    speaker:     ['Audio Speaker', 'More', {}, []],
    coin:        ['Coin Plate', 'More', {}, []]
  };

  var TYPES = Object.keys(CAT);
  function defaults(type) {
    var out = {}, d = (CAT[type] || [null, null, {}])[2];
    for (var k in d) if (Object.prototype.hasOwnProperty.call(d, k)) out[k] = d[k];
    return out;
  }
  function paramsFor(type) {
    if (!pending[type]) pending[type] = defaults(type);
    return pending[type];
  }

  /* --------------------------------------------------------- mesh utilities */
  function slot() {
    return { name: 'Material', color: '#ffffff', emissive: '#000000',
             emissiveStrength: 1, metalness: .04, roughness: .36,
             opacity: 1, uvRepeat: 1 };
  }
  function makeMesh(vertices, faces, smooth) {
    var edges = [], seen = {}, radius = .5, i, j, f, a, b, key;
    for (i = 0; i < vertices.length; i++) {
      radius = Math.max(radius, Math.hypot(vertices[i][0], vertices[i][1], vertices[i][2]));
    }
    for (i = 0; i < faces.length; i++) {
      f = faces[i];
      for (j = 0; j < f.length; j++) {
        a = f[j]; b = f[(j + 1) % f.length];
        key = a < b ? a + ':' + b : b + ':' + a;
        if (!seen[key]) { seen[key] = 1; edges.push([a, b]); }
      }
    }
    return {
      vertices: vertices, faces: faces, edges: edges, radius: radius,
      smooth: !!smooth, slots: [slot()],
      faceSlot: faces.map(function () { return 0; }),
      groups: [{ start: 0, count: 0, materialIndex: 0 }]
    };
  }
  function mergeMeshes(list) {
    var vertices = [], faces = [], off = 0, i, j, m;
    for (i = 0; i < list.length; i++) {
      m = list[i];
      if (!m || !m.vertices || !m.faces) continue;
      for (j = 0; j < m.vertices.length; j++) vertices.push([].concat(m.vertices[j]));
      for (j = 0; j < m.faces.length; j++) faces.push(m.faces[j].map(function (v) { return v + off; }));
      off += m.vertices.length;
    }
    return makeMesh(vertices, faces, false);
  }
  function box(sx, sy, sz, cx, cy, cz) {
    var x = sx / 2, y = sy / 2, z = sz / 2;
    cx = cx || 0; cy = cy || 0; cz = cz || 0;
    var v = [[-x, -y, -z], [x, -y, -z], [x, y, -z], [-x, y, -z],
             [-x, -y, z], [x, -y, z], [x, y, z], [-x, y, z]].map(function (p) {
      return [p[0] + cx, p[1] + cy, p[2] + cz];
    });
    return makeMesh(v, [[0, 1, 2, 3], [4, 5, 6, 7], [0, 4, 7, 3],
                        [1, 5, 6, 2], [0, 1, 5, 4], [3, 2, 6, 7]], false);
  }
  function sphere(radius, segments, rings, cx, cy, cz) {
    segments = Math.max(8, segments || 24);
    rings = Math.max(3, rings || 12);
    cx = cx || 0; cy = cy || 0; cz = cz || 0;
    var v = [[cx, cy + radius, cz]], f = [], i, j, row;
    for (i = 1; i < rings; i++) {
      var phi = Math.PI * i / rings, y = Math.cos(phi) * radius, r = Math.sin(phi) * radius;
      for (j = 0; j < segments; j++) {
        var th = 2 * Math.PI * j / segments;
        v.push([cx + Math.cos(th) * r, cy + y, cz + Math.sin(th) * r]);
      }
    }
    v.push([cx, cy - radius, cz]);
    for (j = 0; j < segments; j++) f.push([0, 1 + (j + 1) % segments, 1 + j]);
    for (i = 0; i < rings - 2; i++) {
      for (j = 0; j < segments; j++) {
        var a = 1 + i * segments + j, b = 1 + i * segments + (j + 1) % segments;
        var c = 1 + (i + 1) * segments + (j + 1) % segments, d = 1 + (i + 1) * segments + j;
        f.push([a, b, c, d]);
      }
    }
    var last = v.length - 1;
    for (j = 0; j < segments; j++) {
      f.push([last, 1 + (rings - 2) * segments + j, 1 + (rings - 2) * segments + (j + 1) % segments]);
    }
    return makeMesh(v, f, true);
  }
  function cylinder(radius, height, segments, cx, cy, cz) {
    segments = Math.max(6, segments || 20);
    cx = cx || 0; cy = cy || 0; cz = cz || 0;
    var v = [], f = [], i, th;
    for (i = 0; i < segments; i++) {
      th = 2 * Math.PI * i / segments;
      v.push([cx + Math.cos(th) * radius, cy - height / 2, cz + Math.sin(th) * radius]);
    }
    for (i = 0; i < segments; i++) {
      th = 2 * Math.PI * i / segments;
      v.push([cx + Math.cos(th) * radius, cy + height / 2, cz + Math.sin(th) * radius]);
    }
    for (i = 0; i < segments; i++) {
      var n = (i + 1) % segments;
      f.push([i, n, segments + n, segments + i]);
    }
    f.push((function () { var a = []; for (i = 0; i < segments; i++) a.push(segments - 1 - i); return a; })());
    f.push((function () { var a = []; for (i = 0; i < segments; i++) a.push(segments + i); return a; })());
    return makeMesh(v, f, true);
  }
  function cone(radius, height, segments, cx, cy, cz) {
    segments = Math.max(6, segments || 16);
    cx = cx || 0; cy = cy || 0; cz = cz || 0;
    var v = [], f = [], i, th;
    for (i = 0; i < segments; i++) {
      th = 2 * Math.PI * i / segments;
      v.push([cx + Math.cos(th) * radius, cy - height / 2, cz + Math.sin(th) * radius]);
    }
    v.push([cx, cy + height / 2, cz]);
    for (i = 0; i < segments; i++) f.push([i, (i + 1) % segments, segments]);
    f.push((function () { var a = []; for (i = 0; i < segments; i++) a.push(segments - 1 - i); return a; })());
    return makeMesh(v, f, true);
  }
  function torus(R, r, segments, sides) {
    segments = Math.max(8, segments || 24); sides = Math.max(4, sides || 10);
    var v = [], f = [], i, j;
    for (i = 0; i < segments; i++) {
      var u = 2 * Math.PI * i / segments;
      for (j = 0; j < sides; j++) {
        var w = 2 * Math.PI * j / sides;
        v.push([(R + r * Math.cos(w)) * Math.cos(u),
                r * Math.sin(w),
                (R + r * Math.cos(w)) * Math.sin(u)]);
      }
    }
    for (i = 0; i < segments; i++) {
      for (j = 0; j < sides; j++) {
        var a = i * sides + j, b = i * sides + (j + 1) % sides;
        var c = ((i + 1) % segments) * sides + (j + 1) % sides, d = ((i + 1) % segments) * sides + j;
        f.push([a, b, c, d]);
      }
    }
    return makeMesh(v, f, true);
  }

  /* ------------------------------------------------ real stub/alias geometry */
  var FONT = {
    A: ['01110','10001','10001','11111','10001','10001','10001'],
    B: ['11110','10001','10001','11110','10001','10001','11110'],
    C: ['01111','10000','10000','10000','10000','10000','01111'],
    D: ['11110','10001','10001','10001','10001','10001','11110'],
    E: ['11111','10000','10000','11110','10000','10000','11111'],
    F: ['11111','10000','10000','11110','10000','10000','10000'],
    G: ['01111','10000','10000','10111','10001','10001','01111'],
    H: ['10001','10001','10001','11111','10001','10001','10001'],
    I: ['11111','00100','00100','00100','00100','00100','11111'],
    J: ['00111','00010','00010','00010','00010','10010','01100'],
    K: ['10001','10010','10100','11000','10100','10010','10001'],
    L: ['10000','10000','10000','10000','10000','10000','11111'],
    M: ['10001','11011','10101','10101','10001','10001','10001'],
    N: ['10001','11001','10101','10011','10001','10001','10001'],
    O: ['01110','10001','10001','10001','10001','10001','01110'],
    P: ['11110','10001','10001','11110','10000','10000','10000'],
    Q: ['01110','10001','10001','10001','10101','10010','01101'],
    R: ['11110','10001','10001','11110','10100','10010','10001'],
    S: ['01111','10000','10000','01110','00001','00001','11110'],
    T: ['11111','00100','00100','00100','00100','00100','00100'],
    U: ['10001','10001','10001','10001','10001','10001','01110'],
    V: ['10001','10001','10001','10001','10001','01010','00100'],
    W: ['10001','10001','10001','10101','10101','10101','01010'],
    X: ['10001','10001','01010','00100','01010','10001','10001'],
    Y: ['10001','10001','01010','00100','00100','00100','00100'],
    Z: ['11111','00001','00010','00100','01000','10000','11111'],
    0: ['01110','10011','10101','10101','10101','11001','01110'],
    1: ['00100','01100','00100','00100','00100','00100','01110'],
    2: ['01110','10001','00001','00010','00100','01000','11111'],
    3: ['11110','00001','00001','01110','00001','00001','11110'],
    4: ['00010','00110','01010','10010','11111','00010','00010'],
    5: ['11111','10000','10000','11110','00001','00001','11110'],
    6: ['01110','10000','10000','11110','10001','10001','01110'],
    7: ['11111','00001','00010','00100','01000','01000','01000'],
    8: ['01110','10001','10001','01110','10001','10001','01110'],
    9: ['01110','10001','10001','01111','00001','00001','01110'],
    ' ': ['00000','00000','00000','00000','00000','00000','00000'],
    '.': ['00000','00000','00000','00000','00000','01100','01100'],
    '-': ['00000','00000','00000','11111','00000','00000','00000']
  };
  function textMesh(text, depth) {
    text = String(text || 'TEXT').toUpperCase().slice(0, 18);
    depth = num(depth, .2, .05, .8);
    var px = .11, parts = [], col = 0;
    for (var c = 0; c < text.length; c++) {
      var glyph = FONT[text[c]] || FONT[' '];
      for (var row = 0; row < 7; row++) {
        for (var k = 0; k < 5; k++) {
          if (glyph[row][k] === '1') {
            parts.push(box(px, px, depth,
              (col * 6 + k - text.length * 3) * px,
              (3 - row) * px, 0));
          }
        }
      }
      col++;
    }
    return parts.length ? mergeMeshes(parts) : box(1, .5, depth);
  }
  function latticeMesh(div, size) {
    div = Math.round(num(div, 2, 1, 5));
    size = num(size, 1, .5, 3);
    var parts = [], i, j, k, step = size / div, thick = Math.max(.012, size * .018);
    for (i = 0; i <= div; i++) for (j = 0; j <= div; j++) {
      parts.push(box(thick, thick, size,
        -size / 2 + i * step, -size / 2 + j * step, 0));
      parts.push(box(thick, size, thick,
        -size / 2 + i * step, 0, -size / 2 + j * step));
      parts.push(box(size, thick, thick,
        0, -size / 2 + i * step, -size / 2 + j * step));
    }
    return mergeMeshes(parts);
  }
  function arrowsMesh() {
    var parts = [box(.12, .12, .12)];
    parts.push(box(.7, .04, .04, .35, 0, 0));
    parts.push(cone(.08, .2, 10, .7, 0, 0));
    parts.push(box(.04, .7, .04, 0, .35, 0));
    parts.push(cone(.08, .2, 10, 0, .7, 0));
    parts.push(box(.04, .04, .7, 0, 0, .35));
    parts.push(cone(.08, .2, 10, 0, 0, .7));
    return mergeMeshes(parts);
  }
  function metaballMesh(radius, blobs) {
    blobs = Math.round(num(blobs, 3, 2, 6));
    radius = num(radius, .4, .1, 1);
    var parts = [sphere(radius, 24, 12)];
    for (var i = 1; i < blobs; i++) {
      var a = i * 2.399963, r = radius * (.7 + .25 * i);
      parts.push(sphere(radius * (1 - i * .1), 18, 10,
        Math.cos(a) * r, Math.sin(a * 1.3) * radius * .7, Math.sin(a) * r));
    }
    return mergeMeshes(parts);
  }
  function nurbsMesh(tension, segments) {
    tension = num(tension, .5, 0, 1);
    segments = Math.round(num(segments, 24, 8, 48));
    var pts = [[-.9, 0, -.2], [-.35, .45, .25], [.3, -.35, -.25], [.9, .1, .2]];
    var v = [], f = [], i, j, n = segments, sides = 8;
    function catmull(t) {
      var s = t * (pts.length - 1), k = Math.min(pts.length - 2, Math.floor(s)), u = s - k;
      var a = pts[Math.max(0, k - 1)], b = pts[k], c = pts[k + 1], d = pts[Math.min(pts.length - 1, k + 2)];
      return [0, 1, 2].map(function (q) {
        return .5 * ((2 * b[q]) + (-a[q] + c[q]) * u +
          (2 * a[q] - 5 * b[q] + 4 * c[q] - d[q]) * u * u +
          (-a[q] + 3 * b[q] - 3 * c[q] + d[q]) * u * u * u * (0.5 + tension));
      });
    }
    for (i = 0; i <= n; i++) {
      var p = catmull(i / n);
      for (j = 0; j < sides; j++) {
        var ang = 2 * Math.PI * j / sides;
        v.push([p[0], p[1] + Math.cos(ang) * .05, p[2] + Math.sin(ang) * .05]);
      }
    }
    for (i = 0; i < n; i++) for (j = 0; j < sides; j++) {
      var a = i * sides + j, b = i * sides + (j + 1) % sides;
      f.push([a, b, (i + 1) * sides + (j + 1) % sides, (i + 1) * sides + j]);
    }
    return makeMesh(v, f, true);
  }
  function boneMesh(length) {
    length = num(length, .45, .1, 1.5);
    return makeMesh([[0, 0, 0], [.07, length, .07], [-.07, length, .07],
                     [-.07, length, -.07], [.07, length, -.07], [0, length * 1.5, 0]],
                    [[0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 1],
                     [5, 2, 1], [5, 3, 2], [5, 4, 3], [5, 1, 4]], false);
  }

  // Returns a custom mesh for types the bundle stubs out, else null.
  function customMesh(type, p) {
    switch (type) {
      case 'text_3d': return textMesh(p.text, p.depth);
      case 'lattice': return latticeMesh(p.subdivisions, p.size);
      case 'metaball': return metaballMesh(p.radius, p.blobs);
      case 'empty_arrows': return arrowsMesh();
      case 'empty_sphere': return sphere(.5, 24, 12);
      case 'curve_nurbs': return nurbsMesh(p.tension, p.segments);
      case 'bone': return boneMesh(p.length);
      case 'light_area': return box(p.sizeX || 1, .02, p.sizeY || 1);
      case 'camera_ortho': return mergeMeshes([box(.35, .25, .3), cone(.12, .3, 12, 0, 0, -.3)]);
      default: return null;
    }
  }

  /* ---------------------------------------------------------- scene helpers */
  function objById(id) {
    var s = get(ss);
    for (var i = 0; i < s.objects.length; i++) if (s.objects[i].id === id) return s.objects[i];
    return null;
  }
  function patchObject(id, fn) {
    var s = get(ss), objects = s.objects.slice(), i;
    for (i = 0; i < objects.length; i++) {
      if (objects[i].id === id) {
        var o = Object.assign({}, objects[i]);
        fn(o);
        objects[i] = o;
        ss.set(Object.assign({}, s, { objects: objects }));
        return;
      }
    }
  }
  function applyProps(id, type, p) {
    patchObject(id, function (o) {
      if (isLight(type)) {
        o.lightProps = o.lightProps || {};
        if (p.intensity != null) o.lightProps.intensity = p.intensity;
        if (p.color != null) o.lightProps.color = p.color;
        if (p.radius != null) o.lightProps.distance = p.radius;
        if (p.spotAngle != null) o.lightProps.angle = p.spotAngle * Math.PI / 180;
        if (p.angle != null) o.lightProps.angle = p.angle * Math.PI / 180;
      }
      if (isCamera(type)) {
        o.cameraProps = o.cameraProps || {};
        if (p.fov != null) o.cameraProps.fov = p.fov;
        if (p.near != null) o.cameraProps.near = p.near;
        if (p.far != null) o.cameraProps.far = p.far;
        if (p.orthoScale != null) o.cameraProps.orthoScale = p.orthoScale;
        o.cameraProps.ortho = type === 'camera_ortho';
      }
    });
  }
  function applyGeometry(id, type, p) {
    var mesh = customMesh(type, p);
    if (!mesh) return false;
    patchObject(id, function (o) {
      o.geometry = mesh;
      o.geometryVersion = (o.geometryVersion || 1) + 1;
    });
    return true;
  }
  function applyLive(id, type, p) {
    if (!id) return;
    // Bundle's own rebuild: geometry + light intensity/color + camera fov/scale.
    try { ss.updateCreationParams(p); } catch (e) {}
    // Our fixes on top (the bundle drops these).
    var merged = {};
    var d = defaults(type);
    for (var k in d) if (Object.prototype.hasOwnProperty.call(d, k)) merged[k] = d[k];
    for (var q in p) if (Object.prototype.hasOwnProperty.call(p, q)) merged[q] = p[q];
    applyProps(id, type, merged);
    applyGeometry(id, type, merged);
    if (isCamera(type)) {
      try { vs.setPIPCamera(id, 1); } catch (e) {}
    }
  }

  function toolMove() {
    try { vs.setGizmoMode('translate'); } catch (e) {}
    var a = document.activeElement;
    if (a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)) return;
    try {
      window.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'v', code: 'KeyV', bubbles: true }));
    } catch (e) {}
  }

  /* ------------------------------------------------------------------ add() */
  function add(type, pos, params) {
    if (!T) return null;
    if (!CAT[type]) { toast('Unknown primitive: ' + type); return null; }
    if (isImport(type)) {
      var input = document.getElementById('tl-universal-file') ||
                  document.getElementById('look-tex-file-input');
      if (input) input.click();
      toast('Choose a file from your device');
      return null;
    }
    var p = Object.assign(defaults(type), paramsFor(type), params || {});
    var before = get(ss).objects.length;
    ss.addPrimitive(type, pos || spawnPosition(), p);
    var state = get(ss);
    if (state.objects.length === before) return null;
    var id = state.selectedId, o = objById(id);
    if (!o) return null;

    // plane: default sizeZ was dead in the bundle — map it onto sizeY.
    if (type === 'plane' && p.sizeY == null && p.sizeZ != null) p.sizeY = p.sizeZ;
    applyProps(id, type, p);
    applyGeometry(id, type, p);
    if (type === 'cube' || type === 'sphere' || type === 'icosphere' || type === 'cylinder' ||
        type === 'cone' || type === 'torus' || type === 'plane' || type === 'grid' ||
        type === 'circle' || type === 'pyramid' || type === 'tube' || type === 'capsule') {
      try { ss.updateCreationParams(p); } catch (e) {}
      applyProps(id, type, p);
    }
    if (isClippable(type)) {
      var dur = get(tl).duration || 10;
      try { tl.setClip(id, 0, Math.min(15, dur)); } catch (e) {}
    }
    if (isCamera(type)) {
      try { vs.setPIPCamera(id, 1); } catch (e) {}
    }
    toolMove();
    last = { id: id, type: type };
    pending[type] = p;
    renderDrawer();
    toast('Added ' + ((CAT[type] || [])[0] || type) + ' — Move tool active');
    return o;
  }

  /* ---------------------------------------------------------- param drawer */
  function drawerEl() {
    var el = document.getElementById('px-prim-drawer');
    if (el) return el;
    el = document.createElement('div');
    el.id = 'px-prim-drawer';
    el.className = 'edit-param-drawer add-param-drawer';
    el.setAttribute('data-testid', 'primitives-param-drawer');
    el.style.cssText = 'display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:5px 7px;border-bottom:1px solid #232836;';
    var panel = document.getElementById('action-panel');
    if (panel) panel.insertBefore(el, panel.firstChild);
    return el;
  }
  function renderDrawer() {
    var type = last.type || 'cube';
    var meta = CAT[type] || CAT.cube;
    var p = paramsFor(type);
    var el = drawerEl();
    el.innerHTML = '';
    var title = document.createElement('span');
    title.className = 'param-title';
    title.textContent = 'NEW ' + meta[0].toUpperCase() + ' — ' + meta[1].toUpperCase();
    title.style.cssText = 'color:#8fd8c0;font-weight:800;font-size:10px;letter-spacing:.4px;';
    el.appendChild(title);
    meta[3].forEach(function (s) {
      if (s.kind === 'text') {
        var inp = document.createElement('input');
        inp.type = 'text'; inp.value = p[s.key] == null ? '' : p[s.key];
        inp.setAttribute('data-px-key', s.key);
        inp.style.cssText = 'width:90px;height:22px;background:#0d1117;color:#fff;border:1px solid #30363d;border-radius:4px;padding:2px 6px;';
        inp.addEventListener('input', function () { setParam(s.key, inp.value); });
        el.appendChild(inp);
        return;
      }
      if (s.kind === 'color') {
        var col = document.createElement('input');
        col.type = 'color'; col.value = p[s.key] || '#ffffff';
        col.setAttribute('data-px-key', s.key);
        col.style.cssText = 'width:34px;height:22px;padding:0;border:1px solid #30363d;border-radius:4px;background:#0d1117;';
        col.addEventListener('input', function () { setParam(s.key, col.value); });
        el.appendChild(col);
        return;
      }
      var label = document.createElement('label');
      label.className = 'arange';
      label.style.cssText = 'display:flex;align-items:center;gap:4px;font-size:10px;';
      var name = document.createElement('span');
      name.textContent = s.label;
      var range = document.createElement('input');
      range.type = 'range';
      range.min = s.min; range.max = s.max;
      range.step = s.kind === 'int' ? 1 : s.step;
      range.value = p[s.key] == null ? s.min : p[s.key];
      range.setAttribute('data-px-key', s.key);
      range.style.cssText = 'width:70px;accent-color:#3dd9a8;';
      var val = document.createElement('span');
      val.textContent = range.value;
      range.addEventListener('input', function () {
        val.textContent = range.value;
        setParam(s.key, s.kind === 'int' ? Math.round(Number(range.value)) : Number(range.value));
      });
      label.appendChild(name); label.appendChild(range); label.appendChild(val);
      el.appendChild(label);
    });
    var hint = document.createElement('span');
    hint.textContent = '↓ click any icon to create';
    hint.style.cssText = 'margin-left:auto;color:#7d8794;font-size:9px;';
    el.appendChild(hint);
  }
  function setParam(key, value) {
    var type = last.type;
    if (!type) return;
    var p = paramsFor(type);
    p[key] = value;
    applyLive(last.id, type, p);
  }

  /* ------------------------------------------------------------------ patch */
  function patchClicks() {
    document.addEventListener('click', function (e) {
      var btn = e.target && e.target.closest ? e.target.closest('[data-add-prim]') : null;
      if (!btn) return;
      var panel = document.getElementById('action-panel');
      if (panel && !panel.contains(btn)) return;
      var type = btn.getAttribute('data-add-prim');
      e.stopPropagation();
      e.stopImmediatePropagation();
      e.preventDefault();
      add(type);
    }, true);
  }
  function observePanel() {
    var panel = document.getElementById('action-panel');
    if (!panel || !window.MutationObserver) return;
    var mo = new MutationObserver(function () {
      if (last.type && !document.getElementById('px-prim-drawer')) renderDrawer();
    });
    mo.observe(panel, { childList: true });
  }

  /* -------------------------------------------------------------- self test */
  function snapshot(store) {
    var v = get(store);
    try { return JSON.parse(JSON.stringify(v)); }
    catch (e) { return v; }
  }
  function selfTest(verbose) {
    if (!T) return { ok: false, error: 'bundle not ready' };
    // Stores mutate their state in place, so a live reference is not a snapshot.
    var beforeScene = snapshot(ss), beforeTl = snapshot(tl), beforeVp = snapshot(vs);
    var results = [], ok = true, type, o;
    for (var i = 0; i < TYPES.length; i++) {
      type = TYPES[i];
      if (isImport(type)) continue;
      o = add(type, [50, 50, 50], defaults(type));
      var good = !!(o && o.geometry && o.geometry.vertices && o.geometry.vertices.length > 2 &&
                    o.geometry.faces && o.geometry.faces.length > 0);
      if (isLight(type)) good = good && !!(o && o.lightProps);
      if (isCamera(type)) good = good && !!(o && o.cameraProps);
      if (!good) ok = false;
      results.push({ type: type, ok: good,
        vertices: o && o.geometry ? o.geometry.vertices.length : 0,
        faces: o && o.geometry ? o.geometry.faces.length : 0 });
    }
    ss.set(beforeScene);
    try { tl.set(beforeTl); } catch (e) {}
    try { vs.set(beforeVp); } catch (e) {}
    last = { id: null, type: null };
    if (verbose !== false) {
      console.log('[primitives] selfTest:', ok ? 'ALL PASS' : 'FAILURES');
      results.forEach(function (r) {
        console.log((r.ok ? 'PASS ' : 'FAIL ') + r.type + ' (' + r.vertices + 'v/' + r.faces + 'f)');
      });
    }
    return { ok: ok, count: results.length, results: results };
  }

  /* ------------------------------------------------------------------ init */
  function init() {
    T = window.__toon;
    if (!T || !T.sceneStore) { setTimeout(init, 60); return; }
    ss = T.sceneStore; vs = T.viewportStore; tl = T.timelineStore;
    patchClicks();
    observePanel();
    renderDrawer();
    window.__primitives = {
      types: TYPES.slice(),
      catalog: CAT,
      defaults: defaults,
      params: paramsFor,
      setParam: setParam,
      add: add,
      remove: function (id) { ss.removeObject(id); },
      selfTest: selfTest,
      version: 'primitives-real-1'
    };
    console.log('[primitives] ready — ' + TYPES.length + ' types, window.__primitives available');
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
