<template>
  <view class="content">
    <u-cell-group>
      <u-cell-item
        icon="setting-fill"
        title="R-vue 表单"
        value="查看"
        @click="viewForm"
      ></u-cell-item>
      <u-cell-item
        icon="integral-fill"
        title="R-vue宫格"
        value="查看"
        @click="viewGrid"
      ></u-cell-item>
      <u-cell-item
        icon="integral-fill"
        title="R-vue-列表"
        value="查看"
        @click="viewCell"
      ></u-cell-item>
      <u-cell-item
        icon="integral-fill"
        title="R-vue-卡片"
        value="查看"
        @click="viewCard"
      ></u-cell-item>
      <u-cell-item
        icon="integral-fill"
        title="R-vue-下拉菜单"
        value="查看"
        @click="viewDropdown"
      ></u-cell-item>
      <u-cell-item
        icon="integral-fill"
        title="R-vue-标签页"
        value="查看"
        @click="viewTabs"
      ></u-cell-item>
    </u-cell-group>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    viewForm() {
      this.$u.route({
        url: "pages/form/index",
      });
    },
    viewGrid() {
      this.$u.route({
        url: "pages/grid/index",
      });
    },
    viewCell() {
      this.$u.route({
        url: "pages/cell/index",
      });
    },
    viewCard() {
      this.$u.route({
        url: "pages/card/index",
      });
    },
    viewDropdown(){
      this.$u.route({
        url:"pages/dropdown/index",
      })
    },
    viewTabs(){
      this.$u.route({
        url:"pages/tabs/index",
      })
    }
  },
};
</script>

<style lang="scss">
.content{
  background-color: $u-bg-color
}
</style>
