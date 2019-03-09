const VERSION = "1"
const CACHE_NAME = "offline-photo-album-" + VERSION;

self.addEventListener("fetch", (e) => {
  const requestURL = e.request.url;
  if (requestURL === "https://wfc-2019.firebaseapp.com/images?limit=20") {
    e.respondWith((async () => {
      const cachedResponse = await caches.match(requestURL);
      if (cachedResponse) {
        return cachedResponse;
      }

      const cache = await caches.open(CACHE_NAME);
      const res = await fetch(requestURL);
      if (res.ok) {
        cache.put(requestURL, res);
      }

      return res;
    })());
  }
})

const CACHE_KEYS = [
  CACHE_NAME
]

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.filter(key => !CACHE_KEYS.includes(key)).map(key => caches.delete(key)));
    })
  )
})
