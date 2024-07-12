import { i as import1 } from "../chunks/chunk-DD43slBE.js";
import { ref, onMounted, onBeforeUnmount, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import "@vue/server-renderer";
import "vike/server";
const _sfc_main = {
  __name: "+Page",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = [Autoplay, Pagination];
    const list = ref([]);
    const socket = ref(null);
    const videoSrc = ref("");
    let videoInterval = null;
    function chunkArray(array, size) {
      const result = [];
      for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size);
        result.push(chunk);
      }
      return result;
    }
    const initSmokeList = () => {
      fetch(
        "https://wxapp.xiaobaizhaozhaozhao.top/api/index/getGoodsList?page=1&size=20"
      ).then((res) => {
        return res.json();
      }).then((res) => {
        list.value = chunkArray(res.data.rows || [], 20);
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
      _push(`<!--[--><div class="page-wrap"><div class="page-title">常规卷烟品牌展示区</div>`);
      _push(ssrRenderComponent(unref(Swiper), {
        class: "page-content",
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        pagination: { clickable: true },
        autoplay: { delay: 8e3, disableOnInteraction: false },
        navigation: true,
        modules
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(list.value, (group, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="list"${_scopeId2}><!--[-->`);
                    ssrRenderList(group, (item) => {
                      _push3(`<div class="item"${_scopeId2}><div class="item-wrap"${_scopeId2}><div class="cover" style="${ssrRenderStyle({
                        backgroundImage: "url(" + item.attachfile + ")"
                      })}"${_scopeId2}></div><div class="info"${_scopeId2}><div class="info-row"${_scopeId2}><span class="label"${_scopeId2}>香烟名称：</span><span class="text name border-bottom-norem"${_scopeId2}>${ssrInterpolate(item.goods_name)}</span></div><div class="info-row"${_scopeId2}><span class="label"${_scopeId2}>产地：</span><span class="text origin border-bottom-norem"${_scopeId2}>${ssrInterpolate(item.goods_producer)}</span><span class="label"${_scopeId2}>零售价：</span><span class="text price price-norem"${_scopeId2}>${ssrInterpolate(item.goods_price)}</span><span class="label"${_scopeId2}>元/条</span></div></div></div></div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "list" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(group, (item) => {
                          return openBlock(), createBlock("div", {
                            class: "item",
                            key: item.id
                          }, [
                            createVNode("div", { class: "item-wrap" }, [
                              createVNode("div", {
                                class: "cover",
                                style: {
                                  backgroundImage: "url(" + item.attachfile + ")"
                                }
                              }, null, 4),
                              createVNode("div", { class: "info" }, [
                                createVNode("div", { class: "info-row" }, [
                                  createVNode("span", { class: "label" }, "香烟名称："),
                                  createVNode("span", { class: "text name border-bottom-norem" }, toDisplayString(item.goods_name), 1)
                                ]),
                                createVNode("div", { class: "info-row" }, [
                                  createVNode("span", { class: "label" }, "产地："),
                                  createVNode("span", { class: "text origin border-bottom-norem" }, toDisplayString(item.goods_producer), 1),
                                  createVNode("span", { class: "label" }, "零售价："),
                                  createVNode("span", { class: "text price price-norem" }, toDisplayString(item.goods_price), 1),
                                  createVNode("span", { class: "label" }, "元/条")
                                ])
                              ])
                            ])
                          ]);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(list.value, (group, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "list" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(group, (item) => {
                        return openBlock(), createBlock("div", {
                          class: "item",
                          key: item.id
                        }, [
                          createVNode("div", { class: "item-wrap" }, [
                            createVNode("div", {
                              class: "cover",
                              style: {
                                backgroundImage: "url(" + item.attachfile + ")"
                              }
                            }, null, 4),
                            createVNode("div", { class: "info" }, [
                              createVNode("div", { class: "info-row" }, [
                                createVNode("span", { class: "label" }, "香烟名称："),
                                createVNode("span", { class: "text name border-bottom-norem" }, toDisplayString(item.goods_name), 1)
                              ]),
                              createVNode("div", { class: "info-row" }, [
                                createVNode("span", { class: "label" }, "产地："),
                                createVNode("span", { class: "text origin border-bottom-norem" }, toDisplayString(item.goods_producer), 1),
                                createVNode("span", { class: "label" }, "零售价："),
                                createVNode("span", { class: "text price price-norem" }, toDisplayString(item.goods_price), 1),
                                createVNode("span", { class: "label" }, "元/条")
                              ])
                            ])
                          ])
                        ]);
                      }), 128))
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
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
