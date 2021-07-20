<template>
  <view>
    <r-data-list :option="option" :compStyle="compStyle"></r-data-list>
  </view>
</template>

<script>
export default {
  data() {
    return {
      option: {
        dataStyle: {
          "margin-top": "5px",
          border: "1px solid #c0c4cc",
          padding: "8px",
        },
        list: [
          {
            image_url: require("@/static/equip/dbgd.png"),
            texts: [
              [{ value: "AAA" }, { value: "BBB" }],
              [{ value: "BBB" }, { value: "BBB" }],
            ],
          },
          {
            image_url: require("@/static/equip/dbgd.png"),
            texts: [
              [
                { style: { "font-weight": "bold","margin-bottom":"6px" }, value: "EEE" },
                { value: "fff" },
              ],
              [{ value: "ggg" }, { value: "ddd" }],
            ],
          },
        ],
      },
      compStyle: {
        "margin-left": "20px",
        "background-color": "#fff",
        "margin-right": "20px",
      },
    };
  },
};
</script>

<style lang="scss">
</style>