/* Toon Studio — PiP controls (collapse / expand + zoom)
 *
 * Loaded as an external file so the page CSP (script-src 'self') allows it.
 * Design notes:
 *  - The controls are hit-tested on `pointerdown` at the document capture
 *    phase. That keeps them working even when another layer (canvas, agent
 *    sheet, ...) swallows the normal click, and even if the nodes are
 *    re-rendered.
 *  - No pointerup/click double binding: one physical tap must toggle once.
 *  - Zoom buttons are always visible while the preview is expanded, so the
 *    controls are discoverable (no hidden "tap the preview first" step).
 */
(function () {
  "use strict";

  var lastAction = 0;
  var lastPointer = 0;

  function store() {
    return (window.__toon && window.__toon.viewportStore) || null;
  }

  /* Some WebViews deliver pointerdown and touchstart for the same physical
     tap (and click after both). A short guard keeps each tap single-shot. */
  function recentlyHandled(ms) {
    return Date.now() - lastPointer < (ms || 600);
  }

  function readZoom() {
    var s = store();
    if (!s || typeof s.subscribe !== "function") return 1.8;
    var v = 1.8;
    try {
      var un = s.subscribe(function (st) {
        if (st && typeof st.pipZoom === "number" && isFinite(st.pipZoom)) v = st.pipZoom;
      });
      if (typeof un === "function") un();
    } catch (e) {
      /* ignore broken stores */
    }
    return v || 1.8;
  }

  function setZoom(z) {
    var s = store();
    z = Math.min(3, Math.max(0.2, Math.round(z * 100) / 100));
    if (s) {
      try {
        if (typeof s.setPIPZoom === "function") s.setPIPZoom(z);
        else if (typeof s.setPipZoom === "function") s.setPipZoom(z);
      } catch (e) {
        /* ignore */
      }
    }
    syncZoom();
  }

  function syncZoom() {
    var pct = document.getElementById("pip-pct");
    if (!pct) return;
    var p = Math.max(5, Math.round((readZoom() / 1.8) * 100));
    pct.textContent = p + "%";
  }

  function pipEl() {
    return document.getElementById("pip");
  }

  function isCollapsed() {
    var pip = pipEl();
    return !!(pip && pip.classList.contains("collapsed"));
  }

  function setCollapsed(collapsed) {
    var pip = pipEl();
    if (!pip) return;
    pip.classList.toggle("collapsed", collapsed);
    var arrow = document.getElementById("pip-arrow");
    if (arrow) arrow.setAttribute("aria-expanded", String(!collapsed));
    // The stylesheet owns the collapsed geometry (28x28 card). Only keep an
    // inline fallback for the preview body, in case the CSS is stale.
    var frame = pip.querySelector(".pip-frame");
    if (frame) {
      try {
        frame.style.setProperty("display", collapsed ? "none" : "", "important");
      } catch (e) {
        frame.style.display = collapsed ? "none" : "";
      }
    }
  }

  function toggle() {
    var now = Date.now();
    if (now - lastAction < 120) return;
    lastAction = now;
    setCollapsed(!isCollapsed());
  }

  function rectOf(el) {
    if (!el || typeof el.getBoundingClientRect !== "function") return null;
    return el.getBoundingClientRect();
  }

  function inRect(r, x, y, pad) {
    if (!r || (r.width === 0 && r.height === 0)) return false;
    pad = pad || 0;
    return x >= r.left - pad && x <= r.right + pad && y >= r.top - pad && y <= r.bottom + pad;
  }

  /* Returns "toggle" | "in" | "out" | null for a viewport point. */
  function hitAt(x, y) {
    var a = rectOf(document.getElementById("pip-arrow"));
    // The handle's own box wins, so a tap on it never zooms by accident.
    if (a && inRect(a, x, y, 0)) return "toggle";
    // Zoom buttons live in the PiP header bar, just left of the collapse
    // handle (padding kept small so they never steal the handle's taps).
    if (!isCollapsed()) {
      if (inRect(rectOf(document.getElementById("pip-plus")), x, y, 4)) return "in";
      if (inRect(rectOf(document.getElementById("pip-minus")), x, y, 4)) return "out";
    }
    if (a) {
      // Then a slightly padded handle area (outwards only) for easy taps.
      var pad = {
        left: a.left,
        top: a.top - 8,
        right: a.right + 8,
        bottom: a.bottom + 8,
        width: a.width,
        height: a.height
      };
      if (inRect(pad, x, y, 0)) return "toggle";
    }
    return null;
  }

  function act(hit) {
    if (hit === "toggle") toggle();
    else if (hit === "in") setZoom(readZoom() + 0.2);
    else if (hit === "out") setZoom(readZoom() - 0.2);
  }

  /* Capture-phase pointerdown: works even when a layer covers the buttons. */
  function onPointerDown(ev) {
    if (ev.isPrimary === false) return;
    if (typeof ev.button === "number" && ev.button !== 0) return;
    var x = ev.clientX;
    var y = ev.clientY;
    if (typeof x !== "number" || typeof y !== "number") return;
    var hit = hitAt(x, y);
    if (!hit) return;
    lastPointer = Date.now();
    ev.preventDefault();
    ev.stopPropagation();
    act(hit);
  }

  /* Fallback for environments without Pointer Events (skipped when a
     pointerdown for the same tap was already handled). */
  function onTouchStart(ev) {
    if (recentlyHandled(600)) return;
    var t = ev.touches && ev.touches[0];
    if (!t) return;
    var hit = hitAt(t.clientX, t.clientY);
    if (!hit) return;
    lastPointer = Date.now();
    ev.preventDefault();
    ev.stopPropagation();
    act(hit);
  }

  /* Fallback click binding (also makes the buttons work with keyboards). */
  function onClick(ev) {
    if (recentlyHandled(600)) return; // already handled by pointerdown/touchstart
    var t = ev.target;
    var el = t && t.nodeType === 3 ? t.parentElement : t;
    if (!el || !el.closest) return;
    var btn = el.closest("#pip-arrow, #pip-plus, #pip-minus");
    if (!btn) return;
    ev.preventDefault();
    ev.stopPropagation();
    if (btn.id === "pip-arrow") toggle();
    else if (btn.id === "pip-plus") setZoom(readZoom() + 0.2);
    else if (btn.id === "pip-minus") setZoom(readZoom() - 0.2);
  }

  function init() {
    var pip = pipEl();
    if (!pip) return; // markup is not the PiP build; nothing to wire up

    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("touchstart", onTouchStart, { capture: true, passive: false });
    document.addEventListener("click", onClick, true);

    // Keep the readout in sync with the viewport store.
    var s = store();
    if (s && typeof s.subscribe === "function") {
      try {
        s.subscribe(function () {
          syncZoom();
        });
      } catch (e) {
        /* ignore */
      }
    }

    syncZoom();
    var arrow = document.getElementById("pip-arrow");
    if (arrow) arrow.setAttribute("aria-expanded", String(!isCollapsed()));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
