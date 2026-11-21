/* Shortmeshi / Toon Studio 3D — deep Add-tab sub-feature engineering.
 *
 * Complements studio-primitives.js. It fixes/restores everything INSIDE the
 * Add feature that the shipped bundle leaves broken:
 *
 *   1. always-visible 6-pill crossover bar (bundle removes it outside Add)
 *   2. real import: image -> image plane, OBJ / STL (ASCII+binary) / glTF / GLB
 *      -> actual mesh object, project JSON -> applyProject (no text fallback)
 *   3. "View Camera" routes the real main camera view, not just the PiP ID
 *   4. "Text Layer" asks for the text inline instead of hardcoding "Text Layer"
 *   5. "3-Bone Chain" uses detailed bone meshes
 *   6. detailed geometry is also applied to objects created elsewhere
 *      (agent commands, project load, imports) via a store subscription
 *
 * Loaded after studio-primitives.js. No bundle edits.
 */
(function () {
  'use strict';

  var P = null, T = null, ss = null, vs = null, tl = null;
  var readyTimer = null;

  function start() {
    P = window.__primitives;
    T = window.__toon;
    if (!P || !T || !T.sceneStore) { readyTimer = setTimeout(start, 60); return; }
    ss = T.sceneStore; vs = T.viewportStore; tl = T.timelineStore;
    init();
  }

  function get(store) {
    var value;
    var un = store.subscribe(function (v) { value = v; });
    un();
    return value;
  }
  function toast(msg) {
    var m = document.getElementById('msg');
    if (!m) return;
    m.textContent = msg;
    m.style.display = 'block';
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { m.style.display = 'none'; }, 2200);
  }
  function docEl(tag, attrs, style) {
    var el = document.createElement(tag);
    for (var k in attrs || {}) if (Object.prototype.hasOwnProperty.call(attrs, k)) {
      if (k === 'text') el.textContent = attrs[k];
      else el.setAttribute(k, attrs[k]);
    }
    if (style) el.style.cssText = style;
    return el;
  }

  /* ---------------------------------------------- 1. crossover bar (always) */
  var CATS = [
    ['Add', 'Primitives'], ['Edit', 'Edit Tools'], ['Rig', 'Rig Bones'],
    ['Sculpt', 'Sculpt'], ['Look', 'Materials'], ['Combined', 'All-in-One']
  ];
  var ACTIVE = 'Add';

  function ensureBar() {
    var panel = document.getElementById('action-panel');
    if (!panel) return null;
    var bar = document.getElementById('px-cross-bar');
    if (bar) return bar;
    bar = docEl('div', { id: 'px-cross-bar', class: 'ap-crossover-bar',
      'data-testid': 'px-crossover-bar' },
      'display:flex;flex-wrap:wrap;gap:4px;padding:4px 6px;border-bottom:1px solid #232836;background:#0d0f14;');
    CATS.forEach(function (c) {
      var b = docEl('button', { type: 'button', class: 'ap-cross-pill' +
        (c[0] === ACTIVE ? ' on' : ''), 'data-px-cross': c[0], title: c[1] });
      b.appendChild(docEl('span', { text: c[1] }));
      b.addEventListener('click', function () { switchTo(c[0]); });
      bar.appendChild(b);
    });
    var drawer = document.getElementById('px-prim-drawer');
    if (drawer) panel.insertBefore(bar, drawer);
    else panel.insertBefore(bar, panel.firstChild);
    return bar;
  }
  function switchTo(cat) {
    ACTIVE = cat;
    ensureBar();
    document.querySelectorAll('[data-px-cross]').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-px-cross') === cat);
    });
    if (cat === 'Combined') {
      // Make the Add tab active first, then let the bundle's own pill set
      // its internal "Combined" state and render all 42 tools.
      var addChip = document.querySelector('[data-main-tab="Add"]');
      if (addChip) addChip.click();
      setTimeout(function () {
        var combo = document.querySelector('[data-cross-cat="Combined"]');
        if (combo) combo.click();
        ensureBar();
      }, 0);
      return;
    }
    var chip = document.querySelector('[data-main-tab="' + cat + '"]');
    if (chip) chip.click();
    setTimeout(ensureBar, 0);
  }

  /* ------------------------------------------- 2. real file import pipeline */
  function hiddenInput(id, accept, multiple) {
    var el = document.getElementById(id);
    if (!el) {
      el = docEl('input', { id: id, type: 'file', accept: accept,
        style: 'display:none;' });
      if (multiple) el.setAttribute('multiple', '');
      document.body.appendChild(el);
    }
    return el;
  }
  var imgInput = null, modelInput = null;

  function readDataUrl(file) {
    return new Promise(function (resolve) {
      var r = new FileReader();
      r.onload = function () { resolve(r.result); };
      r.onerror = function () { resolve(null); };
      r.readAsDataURL(file);
    });
  }
  function readBuffer(file) {
    return new Promise(function (resolve) {
      var r = new FileReader();
      r.onload = function () { resolve(r.result); };
      r.onerror = function () { resolve(null); };
      r.readAsArrayBuffer(file);
    });
  }
  function readText(file) {
    return new Promise(function (resolve) {
      var r = new FileReader();
      r.onload = function () { resolve(r.result); };
      r.onerror = function () { resolve(null); };
      r.readAsText(file);
    });
  }
  function importImage(file) {
    return readDataUrl(file).then(function (url) {
      if (!url || String(url).indexOf('data:image/') !== 0) return false;
      return new Promise(function (resolve) {
        var img = new window.Image();
        img.onload = function () {
          ss.addImageLayer(url, img.naturalWidth || 512, img.naturalHeight || 512, file.name);
          var id = get(ss).selectedId;
          if (id) tl.setClip(id, 0, Math.min(15, get(tl).duration || 10));
          toast('Image layer imported: ' + file.name);
          resolve(true);
        };
        img.onerror = function () { resolve(false); };
        img.src = url;
      });
    });
  }
  function parseOBJ(text) {
    var v = [], f = [], lines = String(text).split(/\r?\n/), i, p;
    for (i = 0; i < lines.length; i++) {
      p = lines[i].trim().split(/\s+/);
      if (p[0] === 'v' && p.length >= 4) {
        v.push([Number(p[1]) || 0, Number(p[2]) || 0, Number(p[3]) || 0]);
      } else if (p[0] === 'f' && p.length >= 4) {
        var ids = p.slice(1).map(function (s) {
          var n = parseInt(s.split('/')[0], 10);
          return isFinite(n) ? (n < 0 ? v.length + n : n - 1) : -1;
        }).filter(function (n) { return n >= 0 && n < v.length; });
        if (ids.length >= 3) f.push(ids);
      }
    }
    return f.length ? P.geometry.makeMesh(v, f, true) : null;
  }
  function parseSTLObj(text) {
    var v = [], f = [], cur = [], lines = String(text).split(/\r?\n/), i, p;
    for (i = 0; i < lines.length; i++) {
      p = lines[i].trim().split(/\s+/);
      if (p[0] === 'vertex' && p.length >= 4) {
        cur.push([Number(p[1]) || 0, Number(p[2]) || 0, Number(p[3]) || 0]);
        if (cur.length === 3) {
          var base = v.length;
          v.push(cur[0], cur[1], cur[2]);
          f.push([base, base + 1, base + 2]);
          cur = [];
        }
      }
    }
    return f.length ? P.geometry.makeMesh(v, f, false) : null;
  }
  function parseSTLBinary(buf) {
    if (!buf || buf.byteLength < 94) return null;
    var dv = new DataView(buf), n = dv.getUint32(80, true), off = 84, v = [], f = [], i, j;
    if (off + n * 50 > buf.byteLength) n = Math.floor((buf.byteLength - off) / 50);
    for (i = 0; i < n; i++) {
      var base = off + i * 50, tri = [];
      for (j = 0; j < 3; j++) {
        var o = base + 12 + j * 12;
        v.push([dv.getFloat32(o, true), dv.getFloat32(o + 4, true), dv.getFloat32(o + 8, true)]);
        tri.push(v.length - 1);
      }
      f.push(tri);
    }
    return f.length ? P.geometry.makeMesh(v, f, false) : null;
  }
  function glbParts(buf) {
    var dv = new DataView(buf);
    if (dv.getUint32(0, true) !== 0x46546C67) return null;
    var off = 12, json = null, bin = null;
    while (off + 8 <= dv.byteLength) {
      var len = dv.getUint32(off, true), type = dv.getUint32(off + 4, true);
      var start = off + 8;
      if (type === 0x4E4F534A) {
        json = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, start, len)));
      } else if (type === 0x004E4942) {
        bin = new Uint8Array(buf, start, len);
      }
      off = start + len;
      if (off >= dv.byteLength) break;
    }
    return json ? { json: json, bin: bin } : null;
  }
  function decodeBase64(uri) {
    var s = uri.slice(uri.indexOf(',') + 1);
    var raw = window.atob(s), out = new Uint8Array(raw.length), i;
    for (i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
    return out;
  }
  function readAccessor(gltf, bin, index) {
    var a = gltf.accessors[index];
    if (!a) return null;
    var bv = gltf.bufferViews[a.bufferView];
    if (!bv || !bin) return null;
    var comp = a.componentType === 5126 ? Float32Array :
               a.componentType === 5125 ? Uint32Array :
               a.componentType === 5123 ? Uint16Array : Uint8Array;
    var nComp = a.type === 'VEC3' ? 3 : a.type === 'VEC2' ? 2 : a.type === 'VEC4' ? 4 : 1;
    var stride = bv.byteStride || comp.BYTES_PER_ELEMENT * nComp;
    var base = (bv.byteOffset || 0) + (a.byteOffset || 0);
    var out = [], i, k;
    for (i = 0; i < a.count; i++) {
      var o = base + i * stride;
      var arr = [];
      for (k = 0; k < nComp; k++) {
        arr.push(new comp(bin.buffer, bin.byteOffset + o, 1)[0] || 0);
        o += comp.BYTES_PER_ELEMENT;
      }
      out.push(nComp === 1 ? arr[0] : arr);
    }
    return out;
  }
  function parseGLTF(gltf, bin) {
    var parts = [];
    if (!bin && gltf.buffers && gltf.buffers[0] && gltf.buffers[0].uri) {
      bin = decodeBase64(gltf.buffers[0].uri);
    }
    (gltf.meshes || []).forEach(function (m) {
      (m.primitives || []).forEach(function (pr) {
        if (pr.attributes == null || pr.attributes.POSITION == null) return;
        var v = readAccessor(gltf, bin, pr.attributes.POSITION);
        if (!v || v.length < 3) return;
        var f = [];
        if (pr.indices != null) {
          var idx = readAccessor(gltf, bin, pr.indices);
          for (var i = 0; i + 2 < idx.length; i += 3) f.push([idx[i], idx[i + 1], idx[i + 2]]);
        } else {
          for (var j = 0; j + 2 < v.length; j += 3) f.push([j, j + 1, j + 2]);
        }
        if (f.length) parts.push(P.geometry.makeMesh(v, f, true));
      });
    });
    if (!parts.length) return null;
    return parts.length === 1 ? parts[0] : P.geometry.mergeMeshes(parts);
  }
  function importModel(file) {
    var name = file.name || 'Imported_Model';
    var lower = name.toLowerCase();
    if (/\.json$|\.tsf$/.test(lower)) {
      return readText(file).then(function (text) {
        try {
          var obj = JSON.parse(text);
          if (obj && (obj.objects || obj.version)) {
            if (typeof T.applyProject === 'function') T.applyProject(obj);
            toast('Project loaded: ' + name);
            return true;
          }
          var mesh = P.geometry.makeMesh(obj.vertices || [], obj.faces || [], true);
          if (!mesh.faces.length) return false;
          ss.importMeshObject(name, mesh);
          toast('Mesh imported: ' + name);
          return true;
        } catch (e) { return false; }
      });
    }
    if (/\.glb$/.test(lower)) {
      return readBuffer(file).then(function (buf) {
        var g = glbParts(buf);
        var mesh = g && parseGLTF(g.json, g.bin);
        if (!mesh) return false;
        ss.importMeshObject(name, mesh);
        toast('GLB imported: ' + name);
        return true;
      });
    }
    if (/\.gltf$/.test(lower)) {
      return readText(file).then(function (text) {
        var mesh = parseGLTF(JSON.parse(text));
        if (!mesh) return false;
        ss.importMeshObject(name, mesh);
        toast('glTF imported: ' + name);
        return true;
      });
    }
    if (/\.stl$/.test(lower)) {
      return readBuffer(file).then(function (buf) {
        var mesh = parseSTLBinary(buf);
        if (!mesh && buf) {
          var dec = new TextDecoder().decode(new Uint8Array(buf));
          mesh = parseSTLObj(dec);
        }
        if (!mesh) return false;
        ss.importMeshObject(name, mesh);
        toast('STL imported: ' + name);
        return true;
      });
    }
    if (/\.obj$/.test(lower)) {
      return readText(file).then(function (text) {
        var mesh = parseOBJ(text);
        if (!mesh) return false;
        ss.importMeshObject(name, mesh);
        toast('OBJ imported: ' + name);
        return true;
      });
    }
    return Promise.resolve(false);
  }
  function importFiles(list, kind) {
    if (!list || !list.length) return;
    var jobs = [], i;
    for (i = 0; i < list.length; i++) {
      jobs.push(kind === 'image' ? importImage(list[i]) : importModel(list[i]));
    }
    Promise.all(jobs).then(function (results) {
      if (!results.some(Boolean)) toast('Could not import that file');
    });
  }
  function openImport(kind) {
    var input = kind === 'image' ? imgInput : modelInput;
    if (input) { input.value = ''; input.click(); }
  }
  window.__addFeaturesImport = function (type) {
    openImport(type === 'import_photo' ? 'image' : 'model');
    toast('Choose a ' + (type === 'import_photo' ? 'picture' : '3D model / project') + ' file');
  };

  /* ----------------------------------------- 3. real View Camera behaviour */
  function viewCamera() {
    var state = get(ss);
    var sel = state.objects.find(function (o) { return o.id === state.selectedId; });
    var cam = sel && (sel.type === 'camera' || sel.type === 'camera_ortho') ? sel
      : state.objects.find(function (o) { return o.type === 'camera' || o.type === 'camera_ortho'; });
    if (!cam) { toast('No camera in scene. Add a camera first.'); return; }
    try { vs.setActiveCameraId && vs.setActiveCameraId(cam.id); } catch (e) {}
    try { vs.setViewThroughCamera && vs.setViewThroughCamera(true); } catch (e) {}
    try { vs.setPIPCamera(cam.id, 1); } catch (e) {}
    toast('Viewing through camera: ' + cam.name);
  }

  /* --------------------------------------------------- 4. inline text dialog */
  function textDialog() {
    if (document.getElementById('px-text-dialog')) return;
    var back = docEl('div', { id: 'px-text-dialog' },
      'position:fixed;inset:0;z-index:500;background:rgba(4,6,9,.72);display:grid;place-items:center;');
    var card = docEl('div', { class: 'px-text-card' },
      'width:min(90vw,340px);padding:16px;border-radius:14px;background:#12161d;border:1px solid #2c3138;color:#dfe6ef;font:14px system-ui;');
    card.appendChild(docEl('b', { text: 'Text layer', style: 'display:block;margin-bottom:10px;' }));
    var input = docEl('input', { type: 'text', value: 'Text Layer',
      'data-testid': 'px-text-input' },
      'width:100%;height:38px;padding:6px 10px;border-radius:8px;border:1px solid #33404d;background:#0c1016;color:#fff;font-size:14px;');
    card.appendChild(input);
    var row = docEl('div', {}, 'display:flex;gap:8px;margin-top:12px;');
    var cancel = docEl('button', { type: 'button', text: 'Cancel' },
      'flex:1;height:38px;border:1px solid #33404d;border-radius:8px;background:#1a2027;color:#cfd6e0;');
    var addBtn = docEl('button', { type: 'button', text: 'Add text' },
      'flex:1;height:38px;border:0;border-radius:8px;background:#3dd9a8;color:#08110e;font-weight:800;');
    function close() { back.remove(); }
    cancel.addEventListener('click', close);
    function submit() {
      var text = input.value.trim();
      if (!text) text = 'Text Layer';
      ss.addTextLayer(text);
      close();
      toast('Text layer added: ' + text.slice(0, 24));
    }
    addBtn.addEventListener('click', submit);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); submit(); }
      if (e.key === 'Escape') close();
    });
    row.appendChild(cancel); row.appendChild(addBtn);
    card.appendChild(row);
    back.appendChild(card);
    back.addEventListener('click', function (e) { if (e.target === back) close(); });
    document.body.appendChild(back);
    setTimeout(function () { input.focus(); input.select(); }, 0);
  }

  /* --------------------------------------- 5. detailed objects everywhere */
  var DETAILED = ['asset_suzanne', 'asset_tree', 'asset_car', 'asset_character',
    'asset_chair', 'speaker', 'coin', 'forcefield', 'curve_bezier', 'curve_circle',
    'curve_path', 'curve_nurbs', 'empty_axes', 'empty_arrows', 'empty_cube',
    'empty_sphere', 'empty_circle', 'bone'];
  // Track by id, not by object reference: studio-primitives.patchObject clones
  // objects on every write, so a flag stored on the object can be lost and
  // re-trigger the upgrade forever (a hot loop that made the app hang).
  var detailedIds = new Set();
  function upgradeDetail(o) {
    if (!o || o.__pxDetailed || detailedIds.has(o.id) || DETAILED.indexOf(o.type) < 0) return;
    detailedIds.add(o.id);              // mark BEFORE the store write
    try { P.upgradeGeometry(o.id, o.type); } catch (e) {}
  }
  function observeDetail() {
    ss.subscribe(function (state) {
      (state.objects || []).forEach(function (o) {
        if (!o.__pxDetailed && !detailedIds.has(o.id) && DETAILED.indexOf(o.type) >= 0) {
          setTimeout(function () { upgradeDetail(o); }, 0);
        }
      });
    });
  }

  /* ------------------------------------------------------- 6. click patch */
  function patchClicks() {
    document.addEventListener('click', function (e) {
      var t = e.target;
      if (!t || !t.closest) return;
      var id = t.closest('#act-upload-3d') ? '3d'
             : t.closest('#act-upload-photo') ? 'image'
             : t.closest('#act-cam-toggle-view') || t.closest('#cprm-cam-view-btn') ? 'camera'
             : t.closest('#act-add-text') ? 'text'
             : t.closest('#act-bone-chain') ? 'chain' : null;
      if (!id) return;
      e.stopPropagation();
      e.stopImmediatePropagation();
      e.preventDefault();
      if (id === '3d') openImport('model');
      else if (id === 'image') openImport('image');
      else if (id === 'camera') viewCamera();
      else if (id === 'text') textDialog();
      else if (id === 'chain') {
        var before = get(ss).objects.map(function (o) { return o.id; });
        ss.addBoneChain([0, .3, 0], 3, .7);
        get(ss).objects.forEach(function (o) {
          if (before.indexOf(o.id) < 0 && o.type === 'bone') upgradeDetail(o);
        });
        toast('Created detailed 3-Bone Chain');
      }
    }, true);

    imgInput = hiddenInput('px-image-input', 'image/*');
    modelInput = hiddenInput('px-model-input', '.obj,.stl,.json,.tsf,.gltf,.glb', true);
    imgInput.addEventListener('change', function (e) {
      importFiles(e.target.files, 'image'); e.target.value = '';
    });
    modelInput.addEventListener('change', function (e) {
      importFiles(e.target.files, 'model'); e.target.value = '';
    });
  }

  function init() {
    patchClicks();
    observeDetail();
    ensureBar();
    if (window.MutationObserver) {
      var panel = document.getElementById('action-panel');
      if (panel) new MutationObserver(function () { ensureBar(); })
        .observe(panel, { childList: true });
    }
    window.__addFeatures = {
      switchTo: switchTo, importFiles: importFiles, viewCamera: viewCamera,
      textDialog: textDialog, upgradeAll: function () {
        get(ss).objects.forEach(upgradeDetail);
      },
      version: 'add-features-2'
    };
    console.log('[add-features] ready — crossover, import, camera, text, bones');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
