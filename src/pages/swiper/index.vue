<template>
  <view>
    <view>{{ option }}</view>
    <r-swiper :option="option"></r-swiper>
    <view class="u-v u-line-3">轮播速度</view>
    <r-subsection :option="subsection_option"></r-subsection>
    <view class="u-v u-line-3">边框曲率</view>
    <r-subsection :option="borderRadiusOption"></r-subsection>
    <view class="u-v u-line-3">高度</view>
    <r-subsection :option="heightOption"></r-subsection>
    <view class="u-v u-line-3">是否显示标题</view>
    <r-subsection :option="titleOption"></r-subsection>
  </view>
</template>

<script>
import RSubsection from "../subsection/R-subsection.vue";
import RSwiper from "./R-swiper.vue";
export default {
  components: { RSwiper, RSubsection },
  watch: {
    "subsection_option.current_value"(val, oldval) {
      this.option.interval = val;
    },
    "borderRadiusOption.current_value"(val, oldval) {
      this.option.borderRadius = val;
    },
    "heightOption.current_value"(val, oldval) {
      this.option.height = val;
    },
    "titleOption.current_value"(val, oldval) {
      this.option.title = val;
    },
  },
  data() {
    return {
      titleOption: {
        current: 1,
        current_value: true,
        list: [
          {
            name: false,
          },
          {
            name: true,
          },
        ],
      },
      heightOption: {
        current: 0,
        current_value: "150",
        list: [
          {
            name: "150",
          },
          {
            name: "200",
          },
          {
            name: "250",
          },
        ],
      },
      borderRadiusOption: {
        current: 0,
        current_value: "8",
        list: [
          {
            name: "8",
          },
          {
            name: "50",
          },
          {
            name: "100",
          },
        ],
      },
      subsection_option: {
        current: 1,
        current_value: "1000",
        list: [
          {
            name: "100",
          },
          {
            name: "1000",
          },
          {
            name: "3000",
          },
        ],
      },
      option: {
        title: true, //	是否显示标题文字，需要配合list参数，见上方说明	Boolean	false	true
        mode: "round", ////	指示器模式，见上方说明	String	round	rect / dot / number / none
        height: 250, ////	轮播图组件高度，单位rpx	String | Number	250	-
        indicatorPos: "bottomCenter", ////	指示器的位置	String	bottomCenter	topLeft / topCenter / topRight / bottomLeft / bottomRight
        effect3d: true, //是否开启3D效果	Boolean	false	true
        autoplay: true, //是否自动播放	Boolean	true	false
        interval: "1000", //自动轮播时间间隔，单位ms	String | Number	2500	-
        circular: true, ////是否衔接播放，见上方说明	Boolean	true	false
        duration: 500, //切换一张轮播图所需的时间，单位ms	String | Number	500	-
        borderRadius: 8, //轮播图圆角值，单位rpx	String | Number	8	-//	自定义标题样式	Object	-	-
        effect3dPreviousMargin: 50, //	effect3d = true模式的情况下，激活项与前后项之间的距离，单位rpx	String | Number	50	-
        imgMode: "aspectFill", //	图片的裁剪模式，详见image组件裁剪模式	String	aspectFill	-
        name: "image", //	组件内部读取的list参数中的属性名，见上方说明	string	name	-
        bgColor: "#f3f4f6", //背景颜色	string	#f3f4f6	-
        current: 0, //1.6.2	//初始化时，默认显示第几项	String | Number	0	-,
        list: [
          {
            image: "https://cdn.uviewui.com/uview/swiper/1.jpg",
            title: "昨夜星辰昨夜风，画楼西畔桂堂东",
          },
          {
            image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
            title: "身无彩凤双飞翼，心有灵犀一点通",
          },
          {
            image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
            title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳",
          },
        ],
      },
    };
  },
};
</script>

<style scoped lang="scss">
.wrap {
  padding: 30rpx;
  width: 100%;
}
.u-v {
  font-size: 110%;
  text-align: center;
}
</style>