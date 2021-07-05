<template>
  <view class="content">
    <u-cell-group>
      <u-cell-item
        icon="setting-fill"
        title="R-vue 表单"
        value="查看"
        @click="viewForm"
      ></u-cell-item>
      <u-cell-item
        icon="integral-fill"
        title="R-vue宫格"
        value="查看"
        @click="viewGrid"
      ></u-cell-item>
	  <u-cell-item
        icon="integral-fill"
        title="R-vue-cell"
        value="查看"
        @click="viewCell"
      ></u-cell-item>
    </u-cell-group>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    viewForm() {
      this.$u.route({
        url: "pages/form/index"
      });
    },
    viewGrid() {
      this.$u.route({
        url: "pages/grid/index"
      });
    },
	viewCell() {
      this.$u.route({
        url: "pages/cell/index"
      });
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 15rpx;
  color: #8f8f94;
}
</style>
