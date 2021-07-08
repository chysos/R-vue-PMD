<template>
<view>
  <button @click="scan()">扫描</button>
</view>
</template>

<script>
export default {
  name:'RQrcode',
  methods: {
    scan() {
      uni.scanCode({
        success: function (res) {
          console.log("条码类型：" + res.scanType);
          console.log("条码内容：" + res.result);
        },
      });
    },
  },
};
</script>

<style>
</style>