<template>
  <view class="content">
    <r-cell :list="option"></r-cell>
  </view>
</template>

<script>
export default {
  data() {
    return {
      option:[
        {
          icon: 'integral-fill',
          type: 'common_cell',
          title: "R-vue-表单",
          value: "查看",
          arrow: true,
          arrow_direction: 'down',
          press:()=>{
            this.viewForm()
          }
        },
        {
          icon: 'integral-fill',
          type: 'common_cell',
          title: "R-vue-宫格",
          value: "查看",
          arrow: true,
          arrow_direction: 'down',
          press:()=>{
            this.viewGrid()
          }
        },
        {
          icon: 'integral-fill',
          type: 'common_cell',
          title: "R-vue-列表",
          value: "查看",
          arrow: true,
          arrow_direction: 'down',
          press:()=>{
            this.viewCell()
          }
        },
        {
          icon: 'integral-fill',
          type: 'common_cell',
          title: "R-vue-卡片",
          value: "查看",
          arrow: true,
          arrow_direction: 'down',
          press:()=>{
            this.viewCard()
          }
        },
        {
          icon: 'integral-fill',
          type: 'common_cell',
          title: "R-vue-下拉菜单",
          value: "查看",
          arrow: true,
          arrow_direction: 'down',
          press:()=>{
            this.viewDropdown()
          }
        },
        {
          icon: 'integral-fill',
          type: 'common_cell',
          title: "R-vue-标签页",
          value: "查看",
          arrow: true,
          arrow_direction: 'down',
          press:()=>{
            this.viewTabs()
          }
        },
        {
          icon: 'integral-fill',
          type: 'common_cell',
          title: "R-vue-轮播图 ",
          value: "查看",
          arrow: true,
          arrow_direction: 'down',
          press:()=>{
            this.viewSwiper()
          }
        },
        {
          icon: 'integral-fill',
          type: 'common_cell',
          title: "R-vue-分段器 ",
          value: "查看",
          arrow: true,
          arrow_direction: 'down',
          press:()=>{
            this.viewSubsection()
          }
        },
        {
          icon:'integral-fill',
          type: 'common_cell',
          title: 'R-vue-步骤条',
          value:"查看",
          arrow:true,
          arrow_direction:'down',
          press:()=>{
            this.viewSteps()
          }
        },
        {
          icon:'integral-fill',
          type: 'common_cell',
          title: 'R-vue-查看更多',
          value:"查看",
          arrow:true,
          arrow_direction:'down',
          press:()=>{
            this.viewReadmore()
          }
        },
        {
          icon:'integral-fill',
          type: 'common_cell',
          title: 'R-vue-时间轴',
          value:"查看",
          arrow:true,
          arrow_direction:'down',
          press:()=>{
            this.viewTimeLine()
          }
        },
        {
          icon:'integral-fill',
          type: 'common_cell',
          title: 'R-vue-我的',
          value:"查看",
          arrow:true,
          arrow_direction:'down',
          press:()=>{
            this.viewMe()
          }
        },
        {
          type:'common_cell',
          title:'R-vue-硬件',
          press:()=>{
            this.viewNative()
          }
        }
      ]
    };
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
    },
    viewSwiper(){
      this.$u.route({
        url:"pages/swiper/index",
      })
    },
    viewSubsection(){
      this.$u.route({
        url:"pages/subsection/index",
      })
    },
    viewSteps(){
      this.$u.route({
        url:"pages/steps/index"
      })
    },
    viewReadmore(){
      this.$u.route({
        url:"pages/readmore/index"
      })
    },
    viewTimeLine(){
      this.$u.route({
        url:"pages/timeline/index"
      })
    },
    viewMe(){
      this.$u.route({
        url:"pages/me/index"
      })
    },
    viewNative(){
      this.$u.route({
        url:"pages/native/index"
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
