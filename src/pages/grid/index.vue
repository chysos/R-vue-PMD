<template>
  <view>
    <r-grid :option="option"></r-grid>
    <text class="title">option:{{ option }}</text>
    <u-toast ref="R_grid" />
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
              this.$refs.R_grid.show({title: this.option.list[0].label+'被单击'})
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
              this.$refs.R_grid.show({title: this.option.list[1].label+'被单击'})
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
              this.$refs.R_grid.show({title: this.option.list[2].label+'被单击'})
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
             this.$refs.R_grid.show({title: this.option.list[3].label+'被单击'})
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
              this.$refs.R_grid.show({title: this.option.list[4].label+'被单击'})
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
