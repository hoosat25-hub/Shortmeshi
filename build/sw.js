/* Shortmeshi / Toon Studio service worker.
 *
 * Purpose: make the page installable as a PWA so Chrome offers
 * "Install app" / "Add to Home screen" (one tap opens it directly).
 *
 * Deliberately network-only: there is NO caching here, so a rebuild can never
 * be masked by an old cached bundle (that bug already bit us once).
 */
self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function () {
  /* No respondWith(): the browser handles every request over the network. */
});
