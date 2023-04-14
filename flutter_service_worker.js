'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a4f685b17bc5210dbf941de5ed53bab9",
"assets/assets/fonts/Brandon_bld.otf": "fa11c3ca7b2301d6b8da51b04985fb05",
"assets/assets/fonts/Brandon_med.otf": "a989c5b7849027ec20bcf8e716f2387f",
"assets/assets/fonts/Brandon_reg.otf": "1f55925e52b9e71fd57108874184060d",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/icons/apple.svg": "ca16b1b37bafc23fdebcf56ad903cec8",
"assets/assets/icons/bell.svg": "e0a287ca079b4d0e9e15a65d518bd433",
"assets/assets/icons/cart.svg": "7a5b169335f5c5ae7bc5fdd449567826",
"assets/assets/icons/category.svg": "822af6c163ba5dd36d0f0c9e9b9c153b",
"assets/assets/icons/cod.svg": "daffe66749dddb8340ad84a65956aa5c",
"assets/assets/icons/delivery.svg": "9fdfc3bd8eb9b98375dc91ba69c363a1",
"assets/assets/icons/email.svg": "0b80cb816f21d2b8ef9253ae0ce8a62f",
"assets/assets/icons/google.svg": "15fc84ad0f0458828daf04b556627499",
"assets/assets/icons/heart.svg": "be5f4112614d601004b354006e201d3a",
"assets/assets/icons/heart2.svg": "0829f93c2031e7a4b4ce500f6b0a6664",
"assets/assets/icons/heart_filled.svg": "4444f8abaa4efd61beac5adfaeaee82a",
"assets/assets/icons/help_center.svg": "629b401d7f16e22f15a6f8f0f7a25512",
"assets/assets/icons/like.svg": "7f75d0262f98101f64c11ec7ac8f699d",
"assets/assets/icons/menu.svg": "352977cbb34c8ddf28e33a024bf23a4d",
"assets/assets/icons/open_book.svg": "481b794ecb51a5124d1296668b2e3fc7",
"assets/assets/icons/options_icon.svg": "ca122926eab49cc3fa1c16f79c6aebe1",
"assets/assets/icons/order.svg": "8814d02d8f1cc14352f101dab2420da0",
"assets/assets/icons/package.svg": "cc02bf5f33bf282d39c626207f75953c",
"assets/assets/icons/pay_with_razorpay.svg": "f8204c476aa44f1ba0a995297bae3cdf",
"assets/assets/icons/product_return.svg": "45029f4309d95f8b6c4e5332df336a91",
"assets/assets/icons/promo-code.svg": "85598512253215a89c5b0afbd24e837b",
"assets/assets/icons/shopping_cart.svg": "aa57a43fc82abf8e1511c0a285ec66ca",
"assets/assets/images/1.jpg": "5f1acd389ec5bce5168f6ac952990560",
"assets/assets/images/2.jpg": "474318a9168616b6f69f8fb9b037d673",
"assets/assets/images/3.jpg": "a58f7e1f65381828f26f9889766e5c0c",
"assets/assets/images/4.jpg": "2aa5c5b36409fd26febe6c854d360ef2",
"assets/assets/images/5.jpg": "82138fc626a226de16f6769a5c2d9a55",
"assets/assets/images/6.jpg": "2c0d4357fac42c0f8b80c844c54e0f92",
"assets/assets/images/accessories.jpg": "406149b50a47a58c6685f408c5f8b0ed",
"assets/assets/images/accessory_featured.jpg": "e0c1a97113c56c248d8fc0da4c914300",
"assets/assets/images/account.svg": "fed39a3d13d77b23c713f25cecf8ec65",
"assets/assets/images/at_logo.png": "6ddc8a1a963a539eb82d251da176c2aa",
"assets/assets/images/books.jpg": "4e4ea90e596bc3394a03b45218eae0c2",
"assets/assets/images/book_featured.jpg": "dd1f18321132ab099524f2bd799dc745",
"assets/assets/images/computer.svg": "697ef3acbe7f575b36a7b7a06c98a9ed",
"assets/assets/images/disc.svg": "9374bb79f3311cb4872aa8bf328c71ea",
"assets/assets/images/discount.svg": "43d70a654fd9ed8f1c58b76f8c03cd26",
"assets/assets/images/events.svg": "57339cd6168a1bc0d11725c2bbfe7f88",
"assets/assets/images/fast-delivery.svg": "e35e158c19f701c226d3451f814e6f85",
"assets/assets/images/home_banner1.jpg": "498efae72f8ef087458739fbc8edb0d0",
"assets/assets/images/home_banner2.jpg": "f86771bce5e7414cb07527bc7fdccce2",
"assets/assets/images/home_banner3.jpg": "ab0e7a8558d6cd372ec5e4f775e13c2e",
"assets/assets/images/login_background.jpg": "435353238f39773bb71eb2674d0e331e",
"assets/assets/images/mug.jpg": "4a30034cb6013ed4b3a787d904956266",
"assets/assets/images/music.jpg": "eb1f08c57eb96d83ee6745c959ddc9e6",
"assets/assets/images/notebook.png": "edd42d24432ba45eaa5b8f1e1acfa76b",
"assets/assets/images/open-book.svg": "0f8621cb6cec646dc16aecf3a1fa1ee9",
"assets/assets/images/painting.jpg": "6229d95ac6d22f71a936f023695f9fd7",
"assets/assets/images/podcast.jpg": "86fe1cc6f7d0c023c63c90138814a273",
"assets/assets/images/podcast_featured.jpg": "a3e0cdb709507c579e09876fdb4488b2",
"assets/assets/images/poster.jpg": "a061327afc726e044dafd7f5fee1d652",
"assets/assets/images/sample_image.png": "fa997d4272afc3614e01ced10268aa0c",
"assets/assets/images/shopping-bag.svg": "1b391e602e8bda2f934cc1c62018014e",
"assets/assets/images/shop_banner1.jpg": "3d98d6a7fc255a7feddbbb1f9706ca66",
"assets/assets/images/shop_banner2.jpg": "f95b0efb4fb3107bde150e7e616dbc06",
"assets/assets/images/shop_banner3.jpg": "5d37cb6288a952945620e6eebeff2477",
"assets/assets/images/sign_in_bg.png": "4b9bcbc24ac815afffc7ac47b579c984",
"assets/assets/images/tshirt.jpg": "e775d37d02703f8b7f0ee5a522fa6d0c",
"assets/assets/images/tshirt_featured.jpg": "ce72f4378d682407226bd0210334fbdb",
"assets/FontManifest.json": "3fccd8fb5ce6b6886465ba375fab074d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "447bed114489e91e9ce660aec01502d2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b206aa075cd881f33566c889e58f1d80",
"/": "b206aa075cd881f33566c889e58f1d80",
"main.dart.js": "18a34a492c3f5f223080bc42a24bcad1",
"manifest.json": "38c65f4985e638656b9582fb7fd87706",
"version.json": "4123c5ab4441b8a6829e95d893f87332"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
