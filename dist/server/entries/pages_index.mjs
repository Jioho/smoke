import { i as import1 } from "../chunks/chunk-HHhj972H.js";
import { mergeProps, useSSRContext, ref, onMounted, onBeforeUnmount, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr } from "vue/server-renderer";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import "@vue/server-renderer";
import "vike/server";
const _sfc_main$1 = {
  __name: "voice",
  __ssrInlineRender: true,
  props: ["open"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.open) {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          t: "1721197591650",
          class: "icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "5143"
        }, _attrs))}><path d="M842.666667 319.146667m5.333333 0l64 0q5.333333 0 5.333333 5.333333l0 374.986667q0 5.333333-5.333333 5.333333l-64 0q-5.333333 0-5.333333-5.333333l0-374.986667q0-5.333333 5.333333-5.333333Z" p-id="5144" fill="currentColor"></path><path d="M705.493333 371.573333m5.333334 0l64 0q5.333333 0 5.333333 5.333334l0 270.186666q0 5.333333-5.333333 5.333334l-64 0q-5.333333 0-5.333334-5.333334l0-270.186666q0-5.333333 5.333334-5.333334Z" p-id="5145" fill="currentColor"></path><path d="M575.306667 148.426667l-298.666667 194.08a5.333333 5.333333 0 0 1-2.933333 0.853333H112a5.333333 5.333333 0 0 0-5.333333 5.333333v326.613334a5.333333 5.333333 0 0 0 5.333333 5.333333h161.813333a5.333333 5.333333 0 0 1 2.933334 0.853333l298.666666 194.08a41.6 41.6 0 0 0 64-34.88V183.306667a41.6 41.6 0 0 0-64.106666-34.88z m-10.666667 609.546666a11.786667 11.786667 0 0 1-17.973333 10.026667l-230.56-149.866667-17.44-11.306666a5.333333 5.333333 0 0 0-2.933334-0.853334H186.666667a5.333333 5.333333 0 0 1-5.333334-5.333333V423.36a5.333333 5.333333 0 0 1 5.333334-5.333333h109.28a5.333333 5.333333 0 0 0 2.933333-0.853334l17.226667-11.2L546.666667 256a11.786667 11.786667 0 0 1 18.24 9.92z" p-id="5146" fill="currentColor"></path></svg>`);
      } else {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          t: "1721197853319",
          class: "icon",
          viewBox: "0 0 1024 1024",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "5295"
        }, _attrs))}><path d="M842.666667 319.146667m5.333333 0l64 0q5.333333 0 5.333333 5.333333l0 374.986667q0 5.333333-5.333333 5.333333l-64 0q-5.333333 0-5.333333-5.333333l0-374.986667q0-5.333333 5.333333-5.333333Z" p-id="5296" fill="currentColor"></path><path d="M705.493333 371.573333m5.333334 0l64 0q5.333333 0 5.333333 5.333334l0 270.186666q0 5.333333-5.333333 5.333334l-64 0q-5.333333 0-5.333334-5.333334l0-270.186666q0-5.333333 5.333334-5.333334Z" p-id="5297" fill="currentColor"></path><path d="M738.773333 174.506667a5.333333 5.333333 0 0 0-7.52 0.853333L234.24 802.24a5.333333 5.333333 0 0 0 0.853333 7.466667l50.133334 39.786666a5.333333 5.333333 0 0 0 7.52-0.853333l497.013333-626.88a5.333333 5.333333 0 0 0-0.853333-7.466667zM276.746667 681.493333L286.4 688a5.333333 5.333333 0 0 0 7.093333-1.173333l39.946667-50.346667a5.333333 5.333333 0 0 0-1.28-7.786667l-16-10.666666-17.493333-11.2a5.333333 5.333333 0 0 0-2.88-0.853334H186.666667a5.333333 5.333333 0 0 1-5.333334-5.333333V423.36a5.333333 5.333333 0 0 1 5.333334-5.333333h109.28a5.333333 5.333333 0 0 0 2.933333-0.853334l17.226667-11.2L546.666667 256a11.786667 11.786667 0 0 1 18.24 9.92v63.093333a5.333333 5.333333 0 0 0 9.546666 3.306667l64-80.693333a5.333333 5.333333 0 0 0 1.12-3.306667V183.306667a41.6 41.6 0 0 0-64-34.88l-298.666666 194.08a5.333333 5.333333 0 0 1-2.933334 0.853333H112a5.333333 5.333333 0 0 0-5.333333 5.333333v326.613334a5.333333 5.333333 0 0 0 5.333333 5.333333h161.813333a5.333333 5.333333 0 0 1 2.933334 0.853333zM630.08 464l-64 80.746667a5.333333 5.333333 0 0 0-1.173333 3.306666v209.92a11.786667 11.786667 0 0 1-18.24 10.026667l-99.893334-65.066667a5.333333 5.333333 0 0 0-7.093333 1.173334L400 754.506667a5.333333 5.333333 0 0 0 1.28 7.786666l174.293333 113.28a41.6 41.6 0 0 0 64-34.88v-373.333333a5.333333 5.333333 0 0 0-9.493333-3.36z" p-id="5298" fill="currentColor"></path></svg>`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/voice.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "+Page",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = [Autoplay, Pagination];
    const list = ref([]);
    const socket = ref(null);
    const videoSrc = ref("");
    const canPlayVoice = ref(false);
    const curVideoVoice = ref(false);
    ref(null);
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
          if (canPlayVoice.value) {
            curVideoVoice.value = true;
          } else {
            curVideoVoice.value = false;
          }
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
      document.addEventListener("click", () => {
        canPlayVoice.value = true;
      });
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
        loop: list.value.length > 1,
        centeredSlides: true,
        pagination: { clickable: true },
        autoplay: list.value.length > 1 ? { delay: 8e3, disableOnInteraction: false } : false,
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
                      _push3(`<div class="${ssrRenderClass([
                        "item",
                        { "row-2": list.value.length === 1 && group.length <= 6 }
                      ])}"${_scopeId2}><div class="item-wrap"${_scopeId2}><div class="cover-wrap"${_scopeId2}><div class="cover" style="${ssrRenderStyle({
                        backgroundImage: "url(" + item.attachfile + ")"
                      })}"${_scopeId2}></div></div><div class="info"${_scopeId2}><div class="info-row"${_scopeId2}><span class="label"${_scopeId2}>品名</span><span class="text name border-bottom-norem"${_scopeId2}>${ssrInterpolate(item.goods_name)}</span></div><div class="price-info"${_scopeId2}><div class="flex-1"${_scopeId2}><div class="info-row"${_scopeId2}><span class="label"${_scopeId2}>单位</span><span class="text origin border-bottom-norem"${_scopeId2}>盒</span></div><div class="info-row"${_scopeId2}><span class="label"${_scopeId2}>产地</span><span class="text origin border-bottom-norem"${_scopeId2}>${ssrInterpolate(item.goods_producer)}</span></div></div><div class="flex-1 price"${_scopeId2}>${ssrInterpolate(item.goods_price)}</div></div></div></div></div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "list" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(group, (item) => {
                          return openBlock(), createBlock("div", {
                            class: [
                              "item",
                              { "row-2": list.value.length === 1 && group.length <= 6 }
                            ],
                            key: item.id
                          }, [
                            createVNode("div", { class: "item-wrap" }, [
                              createVNode("div", { class: "cover-wrap" }, [
                                createVNode("div", {
                                  class: "cover",
                                  style: {
                                    backgroundImage: "url(" + item.attachfile + ")"
                                  }
                                }, null, 4)
                              ]),
                              createVNode("div", { class: "info" }, [
                                createVNode("div", { class: "info-row" }, [
                                  createVNode("span", { class: "label" }, "品名"),
                                  createVNode("span", { class: "text name border-bottom-norem" }, toDisplayString(item.goods_name), 1)
                                ]),
                                createVNode("div", { class: "price-info" }, [
                                  createVNode("div", { class: "flex-1" }, [
                                    createVNode("div", { class: "info-row" }, [
                                      createVNode("span", { class: "label" }, "单位"),
                                      createVNode("span", { class: "text origin border-bottom-norem" }, "盒")
                                    ]),
                                    createVNode("div", { class: "info-row" }, [
                                      createVNode("span", { class: "label" }, "产地"),
                                      createVNode("span", { class: "text origin border-bottom-norem" }, toDisplayString(item.goods_producer), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex-1 price" }, toDisplayString(item.goods_price), 1)
                                ])
                              ])
                            ])
                          ], 2);
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
                          class: [
                            "item",
                            { "row-2": list.value.length === 1 && group.length <= 6 }
                          ],
                          key: item.id
                        }, [
                          createVNode("div", { class: "item-wrap" }, [
                            createVNode("div", { class: "cover-wrap" }, [
                              createVNode("div", {
                                class: "cover",
                                style: {
                                  backgroundImage: "url(" + item.attachfile + ")"
                                }
                              }, null, 4)
                            ]),
                            createVNode("div", { class: "info" }, [
                              createVNode("div", { class: "info-row" }, [
                                createVNode("span", { class: "label" }, "品名"),
                                createVNode("span", { class: "text name border-bottom-norem" }, toDisplayString(item.goods_name), 1)
                              ]),
                              createVNode("div", { class: "price-info" }, [
                                createVNode("div", { class: "flex-1" }, [
                                  createVNode("div", { class: "info-row" }, [
                                    createVNode("span", { class: "label" }, "单位"),
                                    createVNode("span", { class: "text origin border-bottom-norem" }, "盒")
                                  ]),
                                  createVNode("div", { class: "info-row" }, [
                                    createVNode("span", { class: "label" }, "产地"),
                                    createVNode("span", { class: "text origin border-bottom-norem" }, toDisplayString(item.goods_producer), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "flex-1 price" }, toDisplayString(item.goods_price), 1)
                              ])
                            ])
                          ])
                        ], 2);
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
        _push(`<div class="preview-video"><a href="javascript:;" class="toggle-voice">`);
        _push(ssrRenderComponent(_sfc_main$1, { open: curVideoVoice.value }, null, _parent));
        _push(`</a><video${ssrIncludeBooleanAttr(!curVideoVoice.value) ? " muted" : ""} autoplay><source${ssrRenderAttr("src", videoSrc.value)} type="video/mp4"></video></div>`);
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
