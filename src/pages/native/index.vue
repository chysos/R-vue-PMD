
<template>
  <view class="content">
    <view class="u-line-5">指纹验证数据{{ rs }}</view>
    <r-fingerprint
      :option="option"
      :resultJson.sync="buttonResultJson"
      ref="fingerprint_ref"
    >
    </r-fingerprint>
    <u-button @click="btn_click">开启验证</u-button>
  </view>
</template>

<script>
export default {
  computed: {
    rs() {
      return JSON.stringify(this.buttonResultJson);
    },
  },
  data() {
    return {
      buttonResultJson: {},
      option: {
        challenge: "adfadsfasdfasdf",
        un_select_img: require("@/static/icons/14.png"),
        select_img: require("@/static/icons/15.png"),
        faild_img:require("@/static/icons/16.png"),
        content: "指纹验证",
        success_content: "验证成功",
        error_content: "验证失败，请重试",
      },
    };
  },
  methods: {
    btn_click() {
      this.option.challenge = this.$u.guid()
      this.$refs["fingerprint_ref"].showModal();
    },
    openMap() {
      uni.chooseLocation({
        success: function (res) {
          console.log("位置名称：" + res.name);
          console.log("详细地址：" + res.address);
          console.log("纬度：" + res.latitude);
          console.log("经度：" + res.longitude);
        },
      });
    },
  },
};
</script>

<style>
button {
  width: 200px;
  margin: 20px auto;
}
</style>
