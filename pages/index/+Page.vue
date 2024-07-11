<template>
  <div class="page-wrap">
    <div class="page-title">常规卷烟品牌展示区</div>

    <div class="page-content">
      <div class="list">
        <div class="item" v-for="item in list" :key="item.id">
          <div class="item-wrap">
            <div
              class="cover"
              :style="{
                backgroundImage: 'url(' + item.cover + ')',
              }"
            ></div>
            <div class="info">
              <div class="info-row">
                <span class="label">香烟名称：</span>
                <span class="text name border-bottom-norem">{{
                  item.name
                }}</span>
              </div>
              <div class="info-row">
                <span class="label">产地：</span>
                <span class="text origin border-bottom-norem">
                  {{ item.origin }}
                </span>
                <span class="label">零售价：</span>
                <span class="text price price-norem">
                  {{ item.price }}
                </span>
                <span class="label">元/条</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="preview-video" v-if="videoSrc">
    <video muted controls>
      <source :src="videoSrc" type="video/mp4" />
    </video>
  </div>
</template>

<script setup>
import { ref } from "vue";
import testImage from "./assets/test.jpg";

const list = ref([]);
const socket = ref(null);
const videoSrc = ref("");
// 心跳相关
let heartbeatInterval = null;

list.value = new Array(5 * 4).fill({}).map((item, index) => {
  return {
    id: index + 1,
    name: "中华",
    origin: "中国",
    price: 200,
    cover: testImage,
  };
});

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

// 组件生命周期钩子
onMounted(() => {
  initWebSocket();
});

onBeforeUnmount(() => {
  if (socket.value) {
    socket.value.close();
    stopHeartbeat();
  }
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
    background-size: cover;
    background-position: center;
  }

  .info {
    padding: 4px;
    .info-row {
      display: flex;
      align-items: flex-end;
      & + .info-row {
        margin-top: 4px;
      }
    }

    .label {
      font-size: 3px;
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
    }

    .origin {
      flex: 1;
      text-align: center;
      font-size: 3px;
    }

    .border-bottom-norem {
      border-bottom: 1px solid rgba(0, 0, 0, 0.85);
    }

    .price {
      flex: 1;
      background-color: yellow;
      text-align: center;
      font-weight: bold;
      line-height: 1.5;
      font-size: 4px;
    }
    .price-norem {
      padding: 0px 2px;
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

  video {
    width: 100%;
    height: 100%;
    background-color: #000;
    object-fit: contain; /* 控制视频内容完全显示并保持宽高比 */
  }
}
</style>
