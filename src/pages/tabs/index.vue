<template>
  <view>
    <p>{{ optiondata }}</p>
    <r-tabs :option="option"> </r-tabs>
  </view>
</template>

<script>
export default {
  computed: {
    optiondata() {
      return JSON.stringify(this.option);
    },
  },
  data() {
    return {
      option: {
        isScroll: false, //tabs是否可以左右拖动	Boolean	true	false
        current: 0, //指定哪个tab为激活状态	String | Number	0，即list的第一项	-
        height: 80, //	导航栏的高度，单位rpx	String | Number	80	-
        fontSize: 30, //	tab文字大小，单位rpx	String | Number	30	-
        duration: 0.5, //	滑块移动一次所需的时间，单位秒	String | Number	0.5	-
        activeColor: "#2979ff", //	滑块和激活tab文字的颜色	String	#2979ff	-
        inactiveColor: "#303133", //	tabs文字颜色	String	#303133	-
        barWidth: 40, //	滑块宽度，单位rpx	String | Number	40	-
        barHeight: 6, //	滑块高度，单位rpx	String | Number	6	-
        gutter: 40, //	单个tab标签的左右内边距之和，单位rpx	String | Number	40	-
        bgColor: "#ffffff", //	tabs导航栏的背景颜色	string	#ffffff	--
        bold: true, //激活选项的字体是否加粗	Boolean	true	false
        showBar: true, //	是否显示底部的滑块	Boolean	true	false
        itemWidth: "auto", // 1.5.6	标签的宽度，单位rpx	String | Number	auto	-
        offset: [5, 20], //1.7.4	设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，单位rpx。	Array	[5, 20]	-
        current: 0,
        list: [
          {
            cate_name: "待收货",
          },
          {
            cate_name: "待付款",
          },
          {
            cate_name: "待评价",
            cate_count: 105,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
</style>