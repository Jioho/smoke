import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [
  {
    pageId: "/pages/_error",
    isErrorPage: true,
    routeFilesystem: void 0,
    loadConfigValuesAll: () => import("./entries/pages_error.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedBy": "/pages/index/" },
    loadConfigValuesAll: () => import("./entries/pages_index.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  }
];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {}
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "_chunk-!~{004}~.js": {
    "file": "assets/static/onRenderClient.C2Z84J1b.css",
    "src": "_chunk-!~{004}~.js"
  },
  "_chunk-CaCi-H_S.js": {
    "file": "assets/chunks/chunk-CaCi-H_S.js",
    "name": "_onRenderClient",
    "css": [
      "assets/static/onRenderClient.C2Z84J1b.css"
    ]
  },
  "node_modules/.pnpm/vike@0.4.177_vite@5.3.1/node_modules/vike/dist/esm/client/server-routing-runtime/entry.js": {
    "file": "assets/entries/entry-server-routing.CC-gXcsh.js",
    "name": "entries/entry-server-routing",
    "src": "node_modules/.pnpm/vike@0.4.177_vite@5.3.1/node_modules/vike/dist/esm/client/server-routing-runtime/entry.js",
    "isEntry": true,
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/pages/_error",
      "virtual:vike:pageConfigValuesAll:client:/pages/index"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/_error": {
    "file": "assets/entries/pages_error.D9hHuskJ.js",
    "name": "entries/pages/_error",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/_error",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-CaCi-H_S.js"
    ],
    "css": [
      "assets/static/error.B3JP9_5u.css"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/index": {
    "file": "assets/entries/pages_index.BTFRZJix.js",
    "name": "entries/pages/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-CaCi-H_S.js"
    ],
    "css": [
      "assets/static/index.Dfkhe-TT.css"
    ]
  }
};
  const pluginManifest = {
    "version": "0.4.177",
    "usesClientRouter": false,
    "baseServer": "/web/",
    "baseAssets": "/web/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setImportBuildGetters({
    pageFiles: () => pageFiles,
    getAssetsManifest: () => assetsManifest,
    pluginManifest: () => pluginManifest
  });
}
