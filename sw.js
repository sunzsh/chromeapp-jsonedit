// sw.js
var cacheName = 'jsonedit.sunzsh';
var cacheFiles = [
    './',
    './?clipboard',
    './?none',
    './index.html',
    './index.html?clipborad',
    './index.html?none',
    './resources/img/jsoneditor-icons.svg',
    './resources/cache.js',
    './resources/jsoneditor.css',
    './resources/jsoneditor.js',
    './resources/localforage.min.js',
    './resources/main.css',
    './resources/main.js',
    './resources/toast.min.css',
    './resources/toast.min.js',
];


self.addEventListener('install', function (e) {
    var cacheOpenPromise = caches.open(cacheName).then(function (cache) {
        return cache.addAll(cacheFiles);
    });
    e.waitUntil(cacheOpenPromise);
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
      caches.match(e.request).then(function (cache) {
          return cache || fetch(e.request);
      }).catch(function (err) {
          console.log(err);
          return fetch(e.request);
      })
  );
});

self.addEventListener('activate', function (e) {
  var cachePromise = caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
          if (key !== cacheName) {
              return caches.delete(key);
          }
      }));
  })
  e.waitUntil(cachePromise);
  return self.clients.claim();
});