importScripts("/static/uv/uv.bundle.js");
importScripts("/static/uv/uv.sw.js");

self.__uv$config = {
  prefix: "/service/",
  bare: "https://bare.boomproxy.xyz",
};

const sw = new self.UVServiceWorker(self.__uv$config);

self.addEventListener("fetch", event => {
  event.respondWith(sw.fetch(event));
});
