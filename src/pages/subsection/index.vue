<template>
  <view>
    <view>{{ option }}</view>
    <r-subsection :option="option"></r-subsection>
  </view>
</template>

<script>
export default {
  data() {
    return {
      option2: {
        current: 1,
        current_value: "待付款",
        list: [
          {
            name: "待发货",
          },
          {
            name: "待付款",
          },
          {
            name: "待评价",
          },
        ],
      },
      option: {
        activeColor: "#303133", //	激活时的颜色	String	#303133	-
        inactiveColor: "#606266", //	未激活时的颜色	String	#606266	-
        mode: "subsection", //	模式选择，见上方"模式选择"说明	String	button	subsection
        fontSize: 28, //字体大小，单位rpx	String | Number	28	-
        height: 70, //	组件高度，单位rpx	String | Number	70	-
        animation: true, //0是否开启动画效果，见上方说明	Boolean	true	false
        bold: true, //激活选项的字体是否加粗	Boolean	true	false
        bgColor: "#eeeeef", //组件背景颜色，mode为button时有效	String	#eeeeef	-
        buttonColor: "#ffffff", //	按钮背景颜色，mode为button时有效	String	#ffffff	-//
        current: 1,
        current_value: "待付款",
        list: [
          {
            name: "待发货",
          },
          {
            name: "待付款",
          },
          {
            name: "待评价",
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>