/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/newhopecal/precache-manifest.c7004ed1d0bccad6a8677f985053fdac.js"
);

workbox.core.setCacheNameDetails({prefix: "new-hope"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute("https://date.nager.at/api/v2/publicholidays/2021/SE", new workbox.strategies.NetworkFirst({ "networkTimeoutSeconds":5, plugins: [] }), 'GET');
workbox.routing.registerRoute("https://type.fit/api/quotes", new workbox.strategies.NetworkFirst({ "networkTimeoutSeconds":5, plugins: [] }), 'GET');
