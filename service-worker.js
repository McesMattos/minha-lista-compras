const CACHE_NAME = "minha-lista-cache-v12";

const APP_SHELL = [
    "./",
    "./index.html",
    "./static/css/style.css?v=6",
    "./static/js/script.js?v=10",
    "./manifest.json?v=10",
    "./static/imagens/icon-192.svg",
    "./static/imagens/icon-512.svg"
];

// ==========================================
// INSTALAÇÃO
// ==========================================

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(APP_SHELL);
        })
    );

    self.skipWaiting();
});

// ==========================================
// ATIVAÇÃO
// ==========================================

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        })
    );

    self.clients.claim();
});

// ==========================================
// REQUISIÇÕES
// ==========================================

self.addEventListener("fetch", event => {

    if (event.request.method !== "GET") {
        return;
    }

    const request = event.request;

    // ======================================
    // NAVEGAÇÃO / HTML
    // Busca primeiro na internet
    // ======================================

    if (request.mode === "navigate") {

        event.respondWith(
            fetch(request)
                .then(response => {

                    const responseCopy = response.clone();

                    caches.open(CACHE_NAME).then(cache => {
                        cache.put("./index.html", responseCopy);
                    });

                    return response;
                })
                .catch(() => {
                    return caches.match("./index.html");
                })
        );

        return;
    }

    // ======================================
    // CSS / JS / MANIFEST
    // NETWORK FIRST
    // ======================================

    const url = new URL(request.url);

    const isImportantFile =
        url.pathname.endsWith(".css") ||
        url.pathname.endsWith(".js") ||
        url.pathname.endsWith("manifest.json");

    if (isImportantFile) {

        event.respondWith(
            fetch(request)
                .then(response => {

                    if (!response || !response.ok) {
                        return response;
                    }

                    const responseCopy = response.clone();

                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(request, responseCopy);
                    });

                    return response;
                })
                .catch(() => {
                    return caches.match(request);
                })
        );

        return;
    }

    // ======================================
    // IMAGENS E OUTROS ARQUIVOS
    // CACHE FIRST
    // ======================================

    event.respondWith(
        caches.match(request).then(cachedResponse => {

            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(request)
                .then(response => {

                    if (!response || !response.ok) {
                        return response;
                    }

                    const responseCopy = response.clone();

                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(request, responseCopy);
                    });

                    return response;
                })
                .catch(() => {

                    return new Response(
                        "Conteúdo indisponível offline.",
                        {
                            status: 503,
                            statusText: "Offline"
                        }
                    );
                });
        })
    );
});