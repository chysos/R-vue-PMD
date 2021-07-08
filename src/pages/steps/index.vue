<template>
<view>
    <view>{{option}}</view>
  <r-steps :option="option"></r-steps>
  <view>{{option2}}</view>
    <r-steps :option="option2"></r-steps>
</view>
</template>

<script>
import RSteps from "../../components/single_comp/R-steps.vue";
export default {
  components: { RSteps },
  data() {
    return {
      option2: {
          mode: "dot",
        direction: "row", // 1.5.1	row-横向，column-竖向	String	row	column
        activeColor: "#6600CC", //	已完成步骤的激活颜色，如设置，type值会失效	String	-	-
        unActiveColor: "606266", //未激活的颜色，用于表示未完成步骤的颜色	String	#606266	-
        icon: "checkmark", // 1.3.7	mode = number时的自定义图标	String	checkmark	-
        list: [
          {
            name: "下单",
          },
          {
            name: "出库",
          },
          {
            name: "运输",
          },
          {
            name: "签收",
          },
        ],
        current: "2",
      },
      option: {
        mode: "number",
        direction: "row", // 1.5.1	row-横向，column-竖向	String	row	column
        activeColor: "#6600CC", //	已完成步骤的激活颜色，如设置，type值会失效	String	-	-
        unActiveColor: "606266", //未激活的颜色，用于表示未完成步骤的颜色	String	#606266	-
        icon: "checkmark", // 1.3.7	mode = number时的自定义图标	String	checkmark	-
        list: [
          {
            name: "下单",
          },
          {
            name: "出库",
          },
          {
            name: "运输",
          },
          {
            name: "签收",
          },
        ],
        current: "3",
      },
    };
  },
};
</script>

<style lang="scss">
</style>