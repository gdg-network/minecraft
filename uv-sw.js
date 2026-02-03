importScripts("/static/uv/uv.bundle.js");
importScripts("/static/uv/uv.sw.js");

self.__uv$config = {
  prefix: "/service/",
  bare: "https://focus-bare-iota.vercel.app/",
};

const sw = new UVServiceWorker(self.__uv$config);

self.addEventListener("fetch", event => {
  event.respondWith(sw.fetch(event));
});
