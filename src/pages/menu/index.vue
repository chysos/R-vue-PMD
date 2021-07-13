<template>
  <r-menu :option="option"></r-menu>
</template>

<script>
export default {
  data() {
    return {
      option: {
        card_list: [
          [
            {
              img_url: require("@/static/equip/gdfq@3x.png"),
              task_info: "工单发起",
              press: () => {},
            },
            {
              img_url: require("@/static/equip/dbgd@3x.png"),
              task_info: "待办工单",
              press: () => {},
            },
            {
              img_url: require("@/static/equip/ybgd@3x.png"),
              task_info: "已办工单",
              press: () => {},
            },
          ],
          [
            {
              img_url: require("@/static/equip/fqjc@3x.png"),
              task_info: "发起检查",
              press: () => {},
            },
            {
              img_url: require("@/static/equip/dbjh@3x.png"),
              task_info: "待办计划",
              press: () => {},
            },
            {
              img_url: require("@/static/equip/jcls@3x.png"),
              task_info: "检查历史",
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