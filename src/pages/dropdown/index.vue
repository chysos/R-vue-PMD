<template>
  <view>
    <r-dropdown
      style="margin: 30rpx"
      :option="option"
      :dd_ref="$u.guid()"
    ></r-dropdown>
    <r-dropdown style="margin-top:500rpx" :option="option2" :dd_ref="$u.guid()"></r-dropdown>
    <p>{{option2}}</p>
    <u-toast ref="R_dd" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      option2: {
        type: "common", //自定义
        activeColor: "#2979ff", //标题和选项卡选中的颜色	String	#2979ff	-
        inactiveColor: "#606266", //标题和选项卡未选中的颜色	String	#606266	-
        closeOnClickMask: true, //点击遮罩是否关闭菜单	Boolean	true	false
        closeOnClickSelf: true, //点击当前激活项标题是否关闭菜单	Boolean	true	false
        duration: 300, //选项卡展开和收起的过渡时间，单位ms	String | Number	300	-
        height: 80, //标题菜单的高度，单位任意，数值默认为rpx单位	String | Number	80	-
        borderBottom: true, //标题菜单是否显示下边框	Boolean	false	true
        titleSize: 28, //标题的字体大小，单位任意，数值默认为rpx单位	String | Number	28
        borderRadius: 0, //菜单展开内容下方的圆角值，单位任意	String | Number	0
        menuIcon: "arrow-down", //标题菜单右侧的图标	String	arrow-down	arrow-down-fill
        menuIconSize: 26, //标题菜单右侧的图标的大小，单位任意，数值默认为rpx单位	String | Number	26\
        scrollStyle: "height: 400rpx", //高度需要设置
        labels: [
          {
            title: "距离",
            value: 1,
            options: [
              {
                label: "默认排序",
                value: 1,
              },
              {
                label: "距离优先",
                value: 2,
              },
              {
                label: "价格优先",
                value: 3,
              },
            ],
          },
          {
            title: "温度",
            value: 2,
            options: [
              {
                label: "去冰",
                value: 1,
              },
              {
                label: "加冰",
                value: 2,
              },
            ],
          },
        ],
      },
      option: {
        type: "div",
        activeColor: "#2979ff", //标题和选项卡选中的颜色	String	#2979ff	-
        inactiveColor: "#606266", //标题和选项卡未选中的颜色	String	#606266	-
        closeOnClickMask: true, //点击遮罩是否关闭菜单	Boolean	true	false
        closeOnClickSelf: true, //点击当前激活项标题是否关闭菜单	Boolean	true	false
        duration: 300, //选项卡展开和收起的过渡时间，单位ms	String | Number	300	-
        height: 80, //标题菜单的高度，单位任意，数值默认为rpx单位	String | Number	80	-
        borderBottom: true, //标题菜单是否显示下边框	Boolean	false	true
        titleSize: 28, //标题的字体大小，单位任意，数值默认为rpx单位	String | Number	28
        borderRadius: 0, //菜单展开内容下方的圆角值，单位任意	String | Number	0
        menuIcon: "arrow-down", //标题菜单右侧的图标	String	arrow-down	arrow-down-fill
        menuIconSize: 26, //标题菜单右侧的图标的大小，单位任意，数值默认为rpx单位	String | Number	26\
        scrollStyle: "height: 400rpx", //高度需要设置
        labels: [
          {
            title: "距离",
            options: [
              {
                text: "选项一",
                press: () => {
                  this.$refs.R_dd.show({
                    title: this.option.labels[0].options[0].text + "被单击",
                  });
                },
              },
              {
                text: "选项二",
                press: () => {
                  this.$refs.R_dd.show({
                    title: this.option.labels[0].options[1].text + "被单击",
                  });
                },
              },
            ],
          },
          {
            title: "温度",
            options: [
              {
                text: "100 摄氏度",
                press: () => {
                  this.$refs.R_dd.show({
                    title: this.option.labels[1].options[0].text + "被单击",
                  });
                },
              },
              {
                text: "200 摄氏度",
                press: () => {
                  this.$refs.R_dd.show({
                    title: this.option.labels[1].options[1].text + "被单击",
                  });
                },
              },
              {
                text: "200 摄氏度",
                press: () => {
                  this.$refs.R_dd.show({
                    title: this.option.labels[1].options[2].text + "被单击",
                  });
                },
              },
              {
                text: "300 摄氏度",
                press: () => {
                  this.$refs.R_dd.show({
                    title: this.option.labels[1].options[3].text + "被单击",
                  });
                },
              },
              {
                text: "400 摄氏度",
                press: () => {
                  this.$refs.R_dd.show({
                    title: this.option.labels[1].options[4].text + "被单击",
                  });
                },
              },
              {
                text: "500 摄氏度",
                press: () => {
                  this.$refs.R_dd.show({
                    title: this.option.labels[1].options[5].text + "被单击",
                  });
                },
              },
              {
                text: "600 摄氏度",
                press: () => {
                  this.$refs.R_dd.show({
                    title: this.option.labels[1].options[6].text + "被单击",
                  });
                },
              },
              {
                text: "700 摄氏度",
                press: () => {
                  this.$refs.R_dd.show({
                    title: this.option.labels[1].options[7].text + "被单击",
                  });
                },
              },
              {
                text: "800 摄氏度",
                press: () => {
                  this.$refs.R_dd.show({
                    title: this.option.labels[1].options[8].text + "被单击",
                  });
                },
              },
            ],
          },
          {
            title: "属性",
            options: [
              {
                text: "属性一",
                press: () => {
                  this.$refs.R_dd.show({
                    title: this.option.labels[2].options[0].text + "被单击",
                  });
                },
              },
              {
                text: "属性二",
                press: () => {
                  this.$refs.R_dd.show({
                    title: this.option.labels[2].options[1].text + "被单击",
                  });
                },
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
</style>