/* Shortmeshi / Toon Studio 3D — performance governor.
 *
 * Two real causes of "hang" on a phone:
 *   1. Every extra Chrome tab keeps its own WebGL render loop alive. Opening the
 *      app repeatedly (as happens during development) leaves many loops running.
 *   2. Even a single tab renders far more frames than a phone needs.
 *
 * This module:
 *   - elects exactly ONE active tab via a localStorage heartbeat. Newest tab
 *     wins; older tabs pause their rAF loop and show a small "take over" bar.
 *   - caps the render loop at ~30 fps on low-end/coarse-pointer devices.
 *   - caps devicePixelRatio to 1 and turns off heavy overlays there.
 *
 * Loaded after studio-pro-bundle.js (before/after the other overrides is fine).
 */
(function () {
  'use strict';

  var lowEnd = false;
  try {
    lowEnd = (navigator.hardwareConcurrency || 8) <= 4 ||
             (navigator.deviceMemory || 8) <= 4 ||
             !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
  } catch (e) { lowEnd = true; }
  var lite = lowEnd || /[?&]turbo=1/.test(location.search || '');

  var KEY = 'shortmeshi_leader_v1';
  var myId = String(Date.now()) + '-' + Math.random().toString(36).slice(2, 8);
  var leader = false, paused = false, lastFrame = 0;
  var minFrame = lite ? 33 : 0;
  var realRAF = window.requestAnimationFrame.bind(window);
  var realCAF = window.cancelAnimationFrame.bind(window);

  function readLeader() {
    try { return JSON.parse(localStorage.getItem(KEY) || 'null'); }
    catch (e) { return null; }
  }
  function writeLeader(gen) {
    var v = { id: myId, ts: Date.now(), gen: gen || 1 };
    try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {}
    return v;
  }
  function claim(force) {
    var cur = readLeader();
    if (force || !cur || Date.now() - cur.ts > 2500 || cur.id === myId) {
      writeLeader((cur && cur.gen || 0) + (force && cur && cur.id !== myId ? 1 : 0));
      leader = true;
    } else {
      leader = false;
    }
    return leader;
  }
  function wakeBundle() {
    // The bundle wakes its render loop on a resize / pointer event.
    try { window.dispatchEvent(new window.Event('resize')); } catch (e) {}
  }
  function resume() {
    if (!paused) return;
    paused = false;
    wakeBundle();
    removeBanner();
  }
  function pause() {
    if (paused) return;
    paused = true;
    showBanner();
  }
  function showBanner() {
    if (document.getElementById('px-perf-banner')) return;
    var b = document.createElement('div');
    b.id = 'px-perf-banner';
    b.setAttribute('data-testid', 'perf-duplicate-tab');
    b.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:900;display:flex;align-items:center;gap:8px;padding:10px 12px;background:#151a21;color:#dfe6ef;font:13px system-ui;border-top:1px solid #33404d;';
    var t = document.createElement('span');
    t.textContent = 'Doosra tab active hai — ye tab pause hai (speed ke liye).';
    var btn = document.createElement('button');
    btn.textContent = 'Take over';
    btn.style.cssText = 'margin-left:auto;height:32px;padding:0 12px;border:0;border-radius:8px;background:#3dd9a8;color:#08110e;font-weight:800;';
    btn.addEventListener('click', function () {
      claim(true);
      if (leader) resume();
    });
    b.appendChild(t); b.appendChild(btn);
    document.body.appendChild(b);
  }
  function removeBanner() {
    var b = document.getElementById('px-perf-banner');
    if (b) b.remove();
  }

  /* Throttled rAF: one active tab only, ~30fps on low-end. */
  window.requestAnimationFrame = function (cb) {
    if (paused) return 0;
    return realRAF(function (ts) {
      if (paused) return;                   // loop stops; resume() re-wakes it
      if (minFrame && ts - lastFrame < minFrame) {
        window.requestAnimationFrame(cb);   // try the next vsync
        return;
      }
      lastFrame = ts;
      cb(ts);
    });
  };
  window.cancelAnimationFrame = function (id) { return realCAF(id); };

  function isVisible() {
    return document.visibilityState !== 'hidden' && !document.hidden;
  }
  function syncVisibility() {
    // The tab the user is actually looking at ALWAYS runs. A background tab
    // may sleep, but a visible tab must never be paused (that caused blank UI).
    if (isVisible()) {
      if (!leader) claim(true);
      resume();
    } else {
      pause();
    }
  }

  claim(isVisible());
  syncVisibility();
  document.addEventListener('visibilitychange', syncVisibility);
  // Any real tap on a paused tab immediately wakes it.
  document.addEventListener('pointerdown', function () {
    if (paused) { claim(true); resume(); }
  }, true);

  // Heartbeat: visible tab keeps leadership; hidden tab can take over if the
  // previous leader died, but only after it becomes visible again.
  setInterval(function () {
    if (!isVisible()) { pause(); return; }
    var cur = readLeader();
    if (!leader || !cur || cur.id !== myId) {
      claim(true);
      resume();
    } else {
      writeLeader(cur.gen || 1);
    }
  }, 700);

  /* Low-end specifics: 1x DPR + no overlay clutter. */
  if (lite) {
    try {
      Object.defineProperty(window, 'devicePixelRatio', { value: 1, configurable: true });
    } catch (e) {}
    setTimeout(function () {
      try { window.dispatchEvent(new window.Event('resize')); } catch (e) {}
      try {
        var t = window.__toon;
        if (!t || !t.viewportStore) return;
        var vp = t.viewportStore;
        var state;
        var un = vp.subscribe(function (v) { state = v; });
        un();
        if (state && state.shadingMode !== 'solid' && vp.setShadingMode) vp.setShadingMode('solid');
        if (state && state.overlays) {
          ['grid', 'axes', 'bounds', 'normals'].forEach(function (k) {
            if (state.overlays[k] && vp.toggleOverlay) vp.toggleOverlay(k);
          });
        }
      } catch (e) {}
    }, 200);
  }

  window.__perf = {
    pause: pause, resume: resume, takeover: function () { claim(true); resume(); },
    state: function () {
      return { leader: leader, paused: paused, lowEnd: lowEnd, lite: lite,
               minFrame: minFrame, leaderInfo: readLeader() };
    },
    version: 'perf-2'
  };
  console.log('[perf] ready —', lite ? 'lite mode, 30fps cap' : 'full mode',
              leader ? 'leader' : 'follower (paused)');
})();
