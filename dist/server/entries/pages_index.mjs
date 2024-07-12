import { i as import1 } from "../chunks/chunk-AxUhDoQ_.js";
import { ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { ref, onMounted, onBeforeUnmount, useSSRContext } from "vue";
import "@vue/server-renderer";
import "vike/server";
const _sfc_main = {
  __name: "+Page",
  __ssrInlineRender: true,
  setup(__props) {
    const list = ref([]);
    const socket = ref(null);
    const videoSrc = ref("");
    let videoInterval = null;
    const initSmokeList = () => {
      fetch(
        "https://wxapp.xiaobaizhaozhaozhao.top/api/index/getGoodsList?page=1&size=20"
      ).then((res) => {
        return res.json();
      }).then((res) => {
        list.value = res.data.rows || [];
      });
    };
    const getVideoList = () => {
      let queryNextTime = true;
      clearInterval(videoInterval);
      fetch("https://wxapp.xiaobaizhaozhaozhao.top/api/index/getCode").then((res) => {
        return res.json();
      }).then((res) => {
        if (res.code == 1 && res.data && res.data.data && res.data.data.videofile) {
          queryNextTime = false;
          videoSrc.value = res.data.data.videofile;
        }
      }).finally(() => {
        if (queryNextTime) {
          videoInterval = setTimeout(() => getVideoList(), 2e3);
        }
      });
    };
    onMounted(() => {
      initSmokeList();
      getVideoList();
    });
    onBeforeUnmount(() => {
      if (socket.value) {
        socket.value.close();
      }
      clearInterval(videoInterval);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="page-wrap"><div class="page-title">常规卷烟品牌展示区</div><div class="page-content"><div class="list"><!--[-->`);
      ssrRenderList(list.value, (item) => {
        _push(`<div class="item"><div class="item-wrap"><div class="cover" style="${ssrRenderStyle({
          backgroundImage: "url(" + item.attachfile + ")"
        })}"></div><div class="info"><div class="info-row"><span class="label">香烟名称：</span><span class="text name border-bottom-norem">${ssrInterpolate(item.goods_name)}</span></div><div class="info-row"><span class="label">产地：</span><span class="text origin border-bottom-norem">${ssrInterpolate(item.goods_producer)}</span><span class="label">零售价：</span><span class="text price price-norem">${ssrInterpolate(item.goods_price)}</span><span class="label">元/条</span></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
      if (videoSrc.value) {
        _push(`<div class="preview-video"><video muted autoplay><source${ssrRenderAttr("src", videoSrc.value)} type="video/mp4"></video></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
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
