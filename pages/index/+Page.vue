<template>
  <div class="page-wrap">
    <div class="page-title">常规卷烟品牌展示区</div>

    <Swiper
      class="page-content"
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :centeredSlides="true"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 8000, disableOnInteraction: false }"
      :navigation="true"
      :modules="modules"
    >
      <swiper-slide v-for="(group, index) in list" :key="index">
        <div class="list">
          <div class="item" v-for="item in group" :key="item.id">
            <div class="item-wrap">
              <div
                class="cover"
                :style="{
                  backgroundImage: 'url(' + item.attachfile + ')',
                }"
              ></div>
              <div class="info">
                <div class="info-row">
                  <span class="label">品名</span>
                  <span class="text name border-bottom-norem">{{
                    item.goods_name
                  }}</span>
                </div>
                <div class="price-info">
                  <div class="flex-1">
                    <div class="info-row">
                      <span class="label">单位</span>
                      <span class="text origin border-bottom-norem">盒</span>
                    </div>
                    <div class="info-row">
                      <span class="label">产地</span>
                      <span class="text origin border-bottom-norem">
                        {{ item.goods_producer }}
                      </span>
                    </div>
                  </div>
                  <div class="flex-1 price">
                    {{ item.goods_price }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </Swiper>
  </div>

  <div class="preview-video" v-if="videoSrc">
    <a href="javascript:;" class="toggle-voice" @click="handleVoiceToggle">
      <voice :open="curVideoVoice"></voice>
    </a>
    <video
      :muted="!curVideoVoice"
      autoplay
      @ended="handleVideoEnded"
      @error="handleVideoError"
      ref="videoRef"
    >
      <source :src="videoSrc" type="video/mp4" />
    </video>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper"; // 分页器
import "swiper/css";
import "swiper/css/pagination";
import voice from "./voice.vue";

const modules = [Autoplay, Pagination];

const list = ref([]);
const socket = ref(null);
const videoSrc = ref("");
const canPlayVoice = ref(false);
const curVideoVoice = ref(false);
const videoRef = ref(null);
// 心跳相关
let heartbeatInterval = null;
let videoInterval = null;

// 初始化 WebSocket 连接
const initWebSocket = () => {
  socket.value = new WebSocket("ws://your-websocket-url");

  socket.value.onopen = () => {
    console.log("WebSocket connection opened");
    startHeartbeat();
    // socket.value.send("Hello Server!");
  };

  socket.value.onmessage = (event) => {
    console.log("Message from server ", event.data);
    // 收到消息时重置心跳定时器
    resetHeartbeat();
  };

  socket.value.onclose = () => {
    console.log("WebSocket connection closed");
    stopHeartbeat();
    reconnect();
  };

  socket.value.onerror = (error) => {
    console.error("WebSocket error: ", error);
    // 处理错误逻辑
    reconnect();
  };
};

// 发送消息
const sendMessage = (message) => {
  if (socket.value && socket.value.readyState === WebSocket.OPEN) {
    socket.value.send(message);
  } else {
    console.error("WebSocket is not open");
  }
};

// 断线重连
const reconnect = () => {
  setTimeout(() => {
    console.log("Attempting to reconnect...");
    initWebSocket();
  }, 3000); // 3秒后尝试重新连接
};

// 开始心跳
const startHeartbeat = () => {
  heartbeatInterval = setInterval(() => {
    sendMessage("ping");
  }, 5000); // 每5秒发送一次心跳包
};

// 停止心跳
const stopHeartbeat = () => {
  if (heartbeatInterval) {
    clearInterval(heartbeatInterval);
    heartbeatInterval = null;
  }
};

// 重置心跳
const resetHeartbeat = () => {
  stopHeartbeat();
  startHeartbeat();
};

// 播放结束自动关闭
const handleVideoEnded = () => {
  videoSrc.value = "";
  fetch("https://wxapp.xiaobaizhaozhaozhao.top/api/index/clearCode")
    .then((res) => {
      return res.json();
    })
    .finally(() => {
      getVideoList();
    });
};

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    result.push(chunk);
  }
  return result;
}

/** 获取列表 */
const initSmokeList = () => {
  fetch(
    "https://wxapp.xiaobaizhaozhaozhao.top/api/index/getGoodsList?page=1&size=20"
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      // res.data.rows = [...res.data.rows, ...res.data.rows, ...res.data.rows];
      list.value = chunkArray(res.data.rows || [], 20);
    });
};

// 轮询视频
const getVideoList = () => {
  let queryNextTime = true;
  clearInterval(videoInterval);
  fetch("https://wxapp.xiaobaizhaozhaozhao.top/api/index/getCode")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      if (
        res.code == 1 &&
        res.data &&
        res.data.data &&
        res.data.data.videofile
      ) {
        queryNextTime = false;
        videoSrc.value = res.data.data.videofile;
        if (canPlayVoice.value) {
          curVideoVoice.value = true;
        } else {
          curVideoVoice.value = false;
        }
      }
    })
    .finally(() => {
      if (queryNextTime) {
        videoInterval = setTimeout(() => getVideoList(), 2000);
      }
    });
};

const handleVoiceToggle = () => {
  curVideoVoice.value = !curVideoVoice.value;
  videoRef.value.muted = !curVideoVoice.value;
};

// 组件生命周期钩子
onMounted(() => {
  // initWebSocket();
  initSmokeList();
  getVideoList();

  document.addEventListener("click", () => {
    canPlayVoice.value = true;
  });
});

onBeforeUnmount(() => {
  if (socket.value) {
    socket.value.close();
    stopHeartbeat();
  }

  clearInterval(videoInterval);
});
</script>

<style lang="less">
body {
  background-color: #b1c3b7;
  * {
    box-sizing: border-box;
  }
}
.page-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #b1c3b7;
}

.page-title {
  text-align: center;
  font-size: 8px;
  color: red;
  padding: 3px 0;
  font-weight: bold;
  width: 100%;
}

.page-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 14px;
  padding-bottom: 10px;
}
.swiper-pagination {
  bottom: 4px !important;
}
.list {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  padding: 0 4px;
  .item {
    // width: 8.333%;
    // min-width: 8.333%;
    // max-width: 8.333%;
    height: 25%;
    width: 20%;
    min-width: 20%;
    max-width: 20%;
    height: 25%;
    padding: 3px 3px;
  }

  .item-wrap {
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }

  .cover {
    width: 100%;
    flex: 1;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  .info {
    padding: 2px;
    background-color: #006856;
    .info-row {
      display: flex;
      align-items: center;
      background-color: #fff;
      padding: 1px;
      & + .info-row {
        margin-top: 1px;
      }
    }

    .flex-1 {
      flex: 1;
    }

    .label {
      font-size: 3px;
      margin-right: 3px;
    }
    .text {
      font-size: 4px;
      & + .label {
        margin-left: 2px;
      }
    }

    .name {
      flex: 1;
      font-size: 5px;
      text-align: center;
      color: #471d11;
      font-weight: bold;
    }

    .origin {
      flex: 1;
      text-align: center;
      font-size: 4px;
      color: #471d11;
      font-weight: bold;
    }

    // .border-bottom-norem {
    //   border-bottom: 1px solid rgba(0, 0, 0, 0.85);
    // }

    .price {
      background-color: #d58703;
      text-align: center;
      font-weight: bold;
      font-size: 4px;
      height: 100%;
      display: block;
      color: #471d11;
      margin-left: 4px;
    }
    .price-norem {
      padding: 0px 2px;
    }
  }

  .price-info {
    position: relative;
    padding-right: 50%;
    margin-top: 1px;

    .price {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 48.5%;
      font-size: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.preview-video {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #000;
  z-index: 100;

  .toggle-voice {
    position: absolute;
    display: block;
    top: 4px;
    right: 4px;
    width: 18px;
    height: 18px;
    color: #fff;
    z-index: 100;
    padding: 4px;
  }

  video {
    width: 100%;
    height: 100%;
    background-color: #000;
    object-fit: contain; /* 控制视频内容完全显示并保持宽高比 */
  }
}
</style>
