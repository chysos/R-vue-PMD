<template>
  <r-me :option="option"></r-me>
</template>

<script>
import RMe from "../../components/templates/R-me.vue";
export default {
  components: { RMe },
  data() {
    return {
      option: {
        pic: require("@/static/icons/12.png"),
        username: "r-me",
        user_id:"123456789",
        show: true,
        options: [
          [
            {
              icon: "rmb-circle",
              type: "common_cell",
              title: "支付",
              value: "",
              arrow: true,
              arrow_direction: "down",
              press: () => {},
            },
          ],
          [
            {
              icon: "star",
              type: "common_cell",
              title: "收藏",
              value: "",
              arrow: true,
              arrow_direction: "down",
              press: () => {},
            },
            {
              icon: "photo",
              type: "common_cell",
              title: "相册",
              value: "",
              arrow: true,
              arrow_direction: "down",
              press: () => {},
            },
            {
              icon: "coupon",
              type: "common_cell",
              title: "卡券",
              value: "",
              arrow: true,
              arrow_direction: "down",
              press: () => {},
            },
            {
              icon: "heart",
              type: "common_cell",
              title: "关注",
              value: "",
              arrow: true,
              arrow_direction: "down",
              press: () => {},
            },
          ],
          [
            {
              icon: "setting",
              type: "common_cell",
              title: "设置",
              value: "",
              arrow: true,
              arrow_direction: "down",
              press: () => {},
            },
          ],
        ],
      },
    };
  },
};
</script>

<style lang="scss">
</style>