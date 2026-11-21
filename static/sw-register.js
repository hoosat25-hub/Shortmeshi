/* Registers the service worker so the app becomes installable (PWA).
 * External file because the page CSP only allows same-origin scripts.
 */
(function () {
  "use strict";
  if (!("serviceWorker" in navigator)) return;

  function register() {
    try {
      navigator.serviceWorker.register("./sw.js", { scope: "./" }).catch(function () {
        /* install just won't be offered; the app still works */
      });
    } catch (e) {
      /* ignore */
    }
  }

  if (document.readyState === "complete") register();
  else window.addEventListener("load", register);
})();
