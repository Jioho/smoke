import { i as import1 } from "../chunks/chunk-CAW2rRnj.js";
import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import "@vue/server-renderer";
import "vike/server";
const testImage = "/smoke/client/assets/static/test.chU2CEVk.jpg";
const _sfc_main = {
  __name: "+Page",
  __ssrInlineRender: true,
  setup(__props) {
    const list = ref([]);
    list.value = new Array(5 * 4).fill({}).map((item, index) => {
      return {
        id: index + 1,
        name: "中华",
        origin: "中国",
        price: 200,
        cover: testImage
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrap" }, _attrs))}><div class="page-title">常规卷烟品牌展示区</div><div class="page-content"><div class="list"><!--[-->`);
      ssrRenderList(list.value, (item) => {
        _push(`<div class="item"><div class="item-wrap"><div class="cover" style="${ssrRenderStyle({
          backgroundImage: "url(" + item.cover + ")"
        })}"></div><div class="info"><div class="info-row"><span class="label">香烟名称：</span><span class="text name">${ssrInterpolate(item.name)}</span></div><div class="info-row"><span class="label">产地：</span><span class="text origin">${ssrInterpolate(item.origin)}</span><span class="label">零售价：</span><span class="text price">${ssrInterpolate(item.price)}</span><span class="label">元/条</span></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/+Page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const import2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const configValuesSerialized = {
  ["passToClient"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "/renderer/+config.js", "fileExportPathToShowToUser": ["default", "passToClient"] }],
    valueSerialized: [{
      type: "js-serialized",
      value: ["pageProps", "urlPathname"]
    }]
  },
  ["onRenderHtml"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/renderer/+onRenderHtml.js", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import1
    }
  },
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/index/+Page.vue", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  }
};
export {
  configValuesSerialized
};
