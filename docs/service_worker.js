'use strict';

const CACHE_NAME = 'cache-simla-v2.0.0';
const urlsToCache = [
    'sim_local_anesthetics.html',
    './dist/sim_local_anesthetics.js'
];

self.addEventListener('install', (event) => {
    self.skipWaiting()
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];

    self.clients.claim();
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) =>  {
    event.respondWith(
        caches
        .match(event.request)
        .then((response) => {
            if (response) { return response; }

            const fetchRequest = event.request.clone();
            return fetch(fetchRequest)
                .then((response) => {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                    return response;
                });
        })
    );
});
