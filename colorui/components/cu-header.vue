<template>
  <view>
    <view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
      <view
        class="cu-bar fixed"
        :style="style"
        :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]"
      >
        <view class="action" @tap="back" v-if="isBack">
          <text class="cuIcon-back"></text>
          <slot name="backText"></slot>
        </view>
        <view style="left:20upx;font-size: 32rpx;position: absolute;opacity: 0.8;" @tap="clickLeft">
          <slot name="left"></slot>
        </view>
        <view class="content" :style="[{top:StatusBar + 'px'}]">
          <slot name="content"></slot>
        </view>
        <view style="right:20upx;font-size: 32rpx;position: absolute;opacity: 0.8;" @tap="clickRight">
          <slot name="right"></slot>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "cu-header",
  props: {
    bgColor: {
      type: String,
      default: "bg-gradual-blue"
    },
    isBack: {
      type: [Boolean, String],
      default: false
    },
    bgImage: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      StatusBar: this.StatusBar,
      CustomBar: this.CustomBar
    };
  },
  methods: {
    back() {
      uni.navigateBack({
        delta: 1
      });
    },
    clickRight(){
      this.$emit('clickRight');
    },
    clickLeft(){
      this.$emit('clickLeft');
    }
  },
  computed: {
    style() {
      var StatusBar = this.StatusBar;
      var CustomBar = this.CustomBar;
      var bgImage = this.bgImage;
      var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
      if (this.bgImage) {
        style = `${style}background-image:url(${bgImage});`;
      }
      return style;
    }
  }
};
</script>

<style scoped lang="less">
.notice {
  position: absolute;
  right: 40rpx;
  font-size: 32rpx;
  .text {
    opacity: 0.8;
  }
}
</style>
