<template>
  <view>
    <r-grid :option="option"></r-grid>
    <text class="title">option:{{ option }}</text>
  </view>
</template>

<script>
import RGrid from "./R-grid.vue";
export default {
  components: { RGrid },
  data() {
    return {
      option: {
        col: 4,
        list: [
          {
            name: "photo",
            size: 46,
            label: "图片",
            badge: {
              visual: true,
              count: 22,
            },
            click: () => {
              console.log("单击事件");
            },
          },
          {
            name: "level",
            size: 46,
            label: "等级",
            badge: {
              visual: false,
              count: 22,
            },
            click: () => {
              console.log("单击事件");
            },
          },
          {
            name: "woman",
            size: 46,
            label: "女人",
            badge: {
              visual: false,
              count: 22,
            },
            click: () => {
              console.log("单击事件");
            },
          },
          {
            name: "man",
            size: 46,
            label: "男人",
            badge: {
              visual: false,
              count: 22,
            },
            click: () => {
              console.log(this);
            },
          },
          {
            name: "photo",
            size: 46,
            label: "图片",
            badge: {
              visual: true,
              count: 21,
            },
            click: () => {
              console.log(this);
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.title {
  font-size: 15rpx;
  color: #8f8f94;
}
</style>
