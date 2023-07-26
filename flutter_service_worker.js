'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "343c5691f97cabe7e1193c2c4d289c29",
"favicon.ico": "a9167d99a8e6c90945da059fe07f7c03",
"index.html": "d24af81e037ee44e92cdce7853161cf2",
"/": "d24af81e037ee44e92cdce7853161cf2",
"main.dart.js": "58cfeb8ac28020a681449e6dd8b0863a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/apple-touch-icon.png": "bc81d96d69920f9f9cd4a92b1bc82480",
"icons/Icon-192.png": "a2213dae0cbb0f7682fe77e7ed5c1535",
"icons/icon-192-maskable.png": "0e459f5d0ca3f3f3d0b575f02c9a6f09",
"icons/icon-512-maskable.png": "f7e30c74436c2a82bd8f471ad27f2f8f",
"icons/Icon-512.png": "c5d82237f6cfa472678e89e6c5dcc578",
"manifest.json": "2e374c9da9cc17a299182f15c608e2e0",
"dronahq.js": "de3758ecf413c206fb5d430e3b93560b",
"assets/AssetManifest.json": "3b97b900e31e1aa584ee9a2c76dcda45",
"assets/NOTICES": "904ece7637a32488cb5aedca07c62696",
"assets/FontManifest.json": "9931b4073c41d8a0dc587991ed84044e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "f703cfa9423d5e18da1d6c3fd14c5c3a",
"assets/fonts/MaterialIcons-Regular.otf": "fde17cc5d3e8acf746b7933502266527",
"assets/assets/images/presents.svg": "f68404c3fbecfe48addbf21dd9f58ce7",
"assets/assets/images/house.svg": "573e27aad109d2111d2b3dea3fbfd90f",
"assets/assets/images/case_study.svg": "684f8ac2803e6047c3246b587e225a6d",
"assets/assets/images/arrow.svg": "9d88588a6f970f11492b9da5c6104b32",
"assets/assets/images/onboarding.gif": "461c6f9eac3ab6b33fe2afb3b5155574",
"assets/assets/images/person.svg": "1d63f39aa02989d723289979be8bfe26",
"assets/assets/images/home.svg": "bc3dca57ac55df84bf7fb26e7619695c",
"assets/assets/images/bold_stories.svg": "e74e563ba8a8ecbf86bb7d2e4b117b13",
"assets/assets/images/lti_mindtree_presents.svg": "5824b37f2092dfd688ce814d0950f7ca",
"assets/assets/images/profile_photo.svg": "27499776266b0f80eedcda0bf691a9fe",
"assets/assets/images/outloook.svg": "d584cf61a04282ad1958d42773443c00",
"assets/assets/images/placeholder_image.png": "8057445ee61f0662c373e0503ec524d5",
"assets/assets/images/search-normal.svg": "7d0a8423b15ac92182f26c5906d5b508",
"assets/assets/images/search_shadow.png": "6e6c035946d2d8b4066a5b30b3f473bd",
"assets/assets/images/search.png": "fd6ca340c8a02c7f8c9f37c01bb5a088",
"assets/assets/images/app_title.svg": "4d0ec4e16586d58b6e337fba4be0be73",
"assets/assets/images/login_animation.gif": "a1cc9b7bc71717eeb3ac0b9827b15437",
"assets/assets/images/notification.svg": "0976d56546a503586e07cdea7cc56a3e",
"assets/assets/images/journal-text.svg": "0fb881cc0be10537823a658b9c8ed4a7",
"assets/assets/images/case_study_logo_2.png": "6d69a991804daa147e0133fbf0c524df",
"assets/assets/images/edit.svg": "0b4d321d167d4be88b872a7810ba8b16",
"assets/assets/images/profile_grad.svg": "e3628f8b678767c828b214237316354d",
"assets/assets/images/my_notes.svg": "b9c45b221cc711716da0cd36983c46db",
"assets/assets/images/profile.svg": "e0793bd30de38968f6e7fdd2e1a2236d",
"assets/assets/images/share.svg": "445570d877e525348b695eedc856f378",
"assets/assets/images/home_grad.svg": "271a7acb9ad9acdfbbe1235971e3096b",
"assets/assets/images/stories_grad.svg": "4faffe997e36d2798284edd2c66fa516",
"assets/assets/images/logo.svg": "3380f7e8c03a37f47300fd45e0bffaf9",
"assets/assets/images/bookmark.svg": "b6687dda6f3bf4a64399e113df8880b6",
"assets/assets/images/search_new.gif": "1be1767de06217475c25cce0fd86d5dc",
"assets/assets/images/history.svg": "4b6898894aebf993eac6258dccf8c558",
"assets/assets/images/light.svg": "28c146dd4e72a0f301b4266f708b317f",
"assets/assets/images/search.gif": "2dda84b57f67ca5ba6c07cd573295eba",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"app.js": "f1f883fcdef1facd19b2eaacd0c32d8f",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
