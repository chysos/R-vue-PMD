<template>
  <r-timeline :option="option"></r-timeline>
</template>

<script>
import RTimeline from "./R-timeline.vue";
export default {
  components: { RTimeline },
  data() {
    return {
      option: {
        current: 0,
        active_node_style:'background: #19be6b',
        list: [{
          icon:'pushpin-fill',
          title:'待取件',
          body:'[自提柜]您的快件已放在楼下侧门，直走前方53.6米，左拐约10步，再右拐直走，见一红灯笼停下，叩门三下，喊“芝麻开门”即可。',
          time:'2019-05-08 12:12'
        },
        {
          icon:'account',
          title:'派送中',
          body:'【深圳市】快件已到达目的地，派件员为国产锦衣卫007号，电话：',
          time:'2019-05-08 12:12'
        },
        {
          icon:"car-fill",
          title:'运输中',
          body:'【深圳市】快递已到达 深圳固戍一部',
          time:'2019-05-08 12:12'
        }
        ,
        {
          body:'[自提柜]您的快件已放在楼下侧门，直走前方53.6米，左拐约10步，再右拐直走，见一红灯笼停下，叩门三下，喊“芝麻开门”即可。',
          time:'2019-05-08 12:12'
        }
        ,
        {
          body:'[自提柜]您的快件已放在楼下侧门，直走前方53.6米，左拐约10步，再右拐直走，见一红灯笼停下，叩门三下，喊“芝麻开门”即可。',
          time:'2019-05-08 12:12'
        }],
      },
    };
  },
};
</script>

<style lang="scss">
</style>