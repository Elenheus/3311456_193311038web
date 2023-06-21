'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b9d779299b9b8df580850f5e82397e44",
".git/config": "516ec1aba4ed1b39867df874e1dec1cd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "41153d61cf25a0a2c4e3a5194edb7f06",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "604f06695ff8759a6dc0c1812a8a928a",
".git/logs/refs/heads/main": "08823c7e1c314f68580876a957607caf",
".git/logs/refs/remotes/origin/main": "c74e6e2ad9e5c79187e31742a8cbed1d",
".git/objects/00/4597f3064a83b6be87306e9de8fbfabdff0c7f": "42edaf138b70bd90a1ccd6a6d2467e7f",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/08/a18584e6f017c32b3d64b2647157ea127aadb3": "d3b84ecc2ec015a7726e0798449e44b4",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/d9a7afc7f46502082ad86b694bb1e381b8a451": "5a396a82578fa29bd67e6e20f2c70b59",
".git/objects/0d/8690a544252820ff11fef104e56a56332e4b9b": "dbccb4641fb4e9dc1a235049bfb6389b",
".git/objects/0f/10d5c15d7662248cf42c32dd33c7bc7c42c8a7": "f041912de793345a0be65e9252f90d0c",
".git/objects/0f/484351855b6be3c15f7e78f5fc3c44da4b297f": "c6d5c83b85f57e9fb926cbd33461bdbd",
".git/objects/12/aafa1f7a43ec7893ade394ef2605b02351e8d4": "750dd1433a6b317bd4214e52534c7078",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/21/a7667fa03816b06c4198cc49f9523cc4a4e974": "95c2d626f22e8175e7250576fd964322",
".git/objects/2a/cbfb09430275985449296aec5b2e08dc06958c": "f79019e0a0a8c4004e7351679f8b5433",
".git/objects/2c/6df2f3e26e5bd53a4f790c821a7310c99538dc": "2f0594c4f96f649d1999008a65236bc4",
".git/objects/31/784cc35fff23e073fd16f56c3126e75ea68da9": "523a2ef99a93fc37630635c90bbf188f",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/46/aba720fccecc4320b05c263f37677852034263": "bfdce433450f5d2d5331a7f8efc33cf1",
".git/objects/4d/29bc7c5c7c2465711067c682c74752874dff9c": "4c25f210528ef97ac3b68daecbf26dea",
".git/objects/4e/cf9a6525050a8c7305639958185846310acd11": "0ab591765b803c26191c57d015f4ccb9",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/6b2280237adc0170b81705b03b28422b40167f": "e71f821b81c27c51ec38abdeba8877bb",
".git/objects/55/6d7fb8ff72bf4475129cfa0c16f3bdae49a810": "b2bf840f7e3cc7912d09fbb3e67a818f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6e/ccac296239ea6218794e16467d0d68deb5ab4e": "b3b21fc577dfd7f92aef0c268b75f481",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/79/b46224028bbd3282c7499cffbf21eb7579ccc2": "cc8f4ceb316212d01048a6a977f32d37",
".git/objects/7e/6ce7d7369b168cca75c2d7bcd52d62e0f1c309": "f877d11d7876de740fcc1e01e25850cc",
".git/objects/7f/3469b4a7a741880619b59f050e1713f01aa73a": "7ee331bd3e6ba2547718c1f1314f431f",
".git/objects/83/dd6e3982608cc8f36ee9a4f6540f1c4d75005c": "1c6894906fbe96e45e0d0b342b43e04c",
".git/objects/88/83336887925dcc184f56b831c8a4cc5e9b1cb7": "c49ffdd5cf55dc62c94baa6d084b5fd1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/94/d7793ce8f3398e8748d3aed047a37618a9e3d5": "7effe2b55c99dc78a72c821b5e9e0598",
".git/objects/a6/ec39e59d20a0ce2fedad2dd0585ac8fc107ee8": "1581b15bbeade71472cf5df63f70a841",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/ec22ad9d05aa15f7244fa26914b928854ad440": "2b85a9bc44da8bae343fe695587dd222",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/4060a2500f3c19bde75514e74b5305d50f2009": "baaee801420bc0c5c90ba13439b05822",
".git/objects/c7/f8e183004b18ea4cff8657d80129be447515a0": "25e0a363465d741c7cbe1142e4b8db0c",
".git/objects/d2/eb3aeddafd214b1b0c3c5e706b60c45af411ea": "5bb667198406d9bf77a26a4aa3a81f7f",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/79d24a55436586470fa98b2177dd23eb2dea96": "25516adfe4b91aed6527ae776895efc4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/6d271d3c542554720a3fd1ead372fbf6076eea": "21fba939982d9ad905d262fd0f333cf1",
".git/objects/dd/6adfe6371fe37a8432ca7c123c95d305c684ee": "b54057889ee24f03e9545f156f324648",
".git/objects/e0/a676a3384e253e781f434c86286fca9fdb930f": "3f1c74ff7cc4e4da73466a94128a8f3d",
".git/objects/e0/d3d67080cba129c35030ebbf399c69fdbb912a": "56d04bbc158e73fe2923b48b08d71a3c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/main": "de37d3a38cffd6ce0bc873ce9c8cc181",
".git/refs/remotes/origin/main": "de37d3a38cffd6ce0bc873ce9c8cc181",
"assets/AssetManifest.bin": "2127e150e99380051493c48deeb2a080",
"assets/AssetManifest.json": "035fb3414000c5417874eebe7dcd5e49",
"assets/assets/abstract_art.jpg": "5cca85d64eafdadb3f1a66530993e6f9",
"assets/assets/anime.jpg": "830438f502ef318ebd304273768a1af9",
"assets/assets/anything.jpg": "eceedb3d4329a00b5ef79a028bb51857",
"assets/assets/app_logo.jpg": "f7141e8cca09786a5098b7dac81e547b",
"assets/assets/app_logo_no_background.png": "3b656b148c14d3e61b194d5cd442d0db",
"assets/assets/architecture.jpg": "4088826fe2b217014d07318eddb17f27",
"assets/assets/futuristic.jpg": "6d58497f549dbb39d6caf3e90a63520a",
"assets/assets/landscape.jpg": "175ecd4744597c04cbaf610441c44dc8",
"assets/assets/oil_painting.jpg": "f093d7463710f6586a6225f4ebaf78a3",
"assets/assets/portrait.jpg": "b61f927a1325d3f84f0cbbacf9a9d22a",
"assets/assets/stranger_things.jpg": "c0ca371ce81fa2a5748f22d24c48ec28",
"assets/assets/wallpaper.jpg": "b6b93223b417844eebd08ad4846a1da4",
"assets/FontManifest.json": "e024588c84b5d20cb7869d6f908130e8",
"assets/fonts/MaterialIcons-Regular.otf": "5d9d9b7c58ed6b75929bbc34f1f6832d",
"assets/NOTICES": "3c1bdd263898e3b6b322468b889a1430",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ee3619c25948c6f58d50aff9728d34fd",
"/": "ee3619c25948c6f58d50aff9728d34fd",
"main.dart.js": "ee62bf529211195ef07ca76bdcb8fccb",
"manifest.json": "c9c6e178b1a37f4ddb356807fa7235ed",
"version.json": "a3322b2f035e5345663b567001345585"};
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
