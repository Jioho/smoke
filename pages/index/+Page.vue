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
                <span class="text name">{{ item.name }}</span>
              </div>
              <div class="info-row">
                <span class="label">产地：</span>
                <span class="text origin">
                  {{ item.origin }}
                </span>
                <span class="label">零售价：</span>
                <span class="text price">
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
</template>

<script setup>
import { ref } from "vue";
import testImage from "./assets/test.jpg";

const list = ref([]);
list.value = new Array(5 * 4).fill({}).map((item, index) => {
  return {
    id: index + 1,
    name: "中华",
    origin: "中国",
    price: 200,
    cover: testImage,
  };
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
  font-size: 20px;
  color: red;
  padding: 12px 0;
  font-weight: bold;
  width: 100%;
}

.page-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 40px;
}
.list {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding: 0 10px;
  .item {
    // width: 8.333%;
    // min-width: 8.333%;
    // max-width: 8.333%;
    height: 25%;
    width: 20%;
    min-width: 20%;
    max-width: 20%;
    height: 25%;
    padding: 10px 10px;
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
    padding: 8px;
    .info-row {
      display: flex;
      align-items: flex-end;
      & + .info-row {
        margin-top: 8px;
      }
    }

    .label {
      font-size: 6px;
    }
    .text {
      font-size: 8px;
      & + .label {
        margin-left: 4px;
      }
    }

    .name {
      flex: 1;
      font-size: 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.85);
      text-align: center;
    }

    .origin {
      flex: 1;
      border-bottom: 1px solid rgba(0, 0, 0, 0.85);
      text-align: center;
      font-size: 8px;
    }

    .price {
      flex: 1;
      background-color: yellow;
      padding: 0px 2px;
      text-align: center;
      font-weight: bold;
      line-height: 1.5;
      font-size: 8px;
    }
  }
}
</style>
