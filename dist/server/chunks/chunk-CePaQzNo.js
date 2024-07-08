var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
import { renderToString as renderToString$1 } from "@vue/server-renderer";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import { useSSRContext, createSSRApp, h } from "vue";
import { ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = {
  __name: "PageShell",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("renderer/PageShell.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const key = Symbol();
function setPageContext(app, pageContext) {
  app.provide(key, pageContext);
}
function createApp(Page, pageProps, pageContext) {
  const PageWithLayout = {
    render() {
      return h(
        _sfc_main,
        {},
        {
          default() {
            return h(Page, pageProps || {});
          }
        }
      );
    }
  };
  const app = createSSRApp(PageWithLayout);
  setPageContext(app, pageContext);
  return app;
}
async function onRenderHtml(pageContext) {
  const { Page, pageProps, config } = pageContext;
  if (!Page) throw new Error("My render() hook expects pageContext.Page to be defined");
  const app = createApp(Page, pageProps, pageContext);
  const appHtml = await renderToString(app);
  const documentProps = config.documentProps || {};
  const title = documentProps.title || "";
  const desc = documentProps.description || "";
  const icon = documentProps.icon || "";
  const baseUrl = "/";
  const ssr = typeof config.ssr == "boolean" ? config.ssr : true;
  const documentHtml = escapeInject(_a || (_a = __template(['<!DOCTYPE html><html lang="en">\n      <head>\n        <meta charset="UTF-8" />\n        <title>', '</title>\n        <link rel="icon" href="', '">\n        <meta name="description" content="', '" />\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <meta http-equiv="Cache-Control" content="no-cache,no-store,must-revalidate">\n        <meta http-equiv="Pragma" content="no-cache">\n        <meta http-equiv="Expires" content="0">\n        <script src="', 'amfe-flexible.min.js"><\/script>\n      </head>\n      <body><div id="app">', "</div></body></html>"])), title, icon, desc, baseUrl, ssr ? dangerouslySkipEscape(appHtml) : "");
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  };
}
async function renderToString(app) {
  let err;
  app.config.errorHandler = (err_) => {
    err = err_;
  };
  const appHtml = await renderToString$1(app);
  if (err) throw err;
  return appHtml;
}
const import1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onRenderHtml
}, Symbol.toStringTag, { value: "Module" }));
export {
  import1 as i
};
