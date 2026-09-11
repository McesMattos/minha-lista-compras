const CACHE_NAME = "minha-lista-cache-v11";

const APP_SHELL = [
    "./",
    "./index.html",
    "./static/css/style.css?v=5",
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

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {

            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request)
                .then(response => {

                    if (!response || !response.ok) {
                        return response;
                    }

                    const responseCopy = response.clone();

                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseCopy);
                    });

                    return response;
                })
                .catch(() => {

                    // Se estiver offline e for navegação,
                    // abre a página principal.
                    if (event.request.mode === "navigate") {
                        return caches.match("./index.html");
                    }

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