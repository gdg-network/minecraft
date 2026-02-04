/* global Ultraviolet */
self.__uv$config = {
  prefix: '/service/',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,

  handler: '/static/uv.handler.js',
  client: '/static/uv.client.js',
  bundle: '/static/uv.bundle.js',
  config: '/static/uv.config.js',
  sw: '/uv-sw.js',
};
