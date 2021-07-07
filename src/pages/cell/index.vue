<template>
  <r-cell :list="option" :title="'标题'"></r-cell>
</template>

<script>
import RCell from "./R-cell.vue";
export default {
  components: { RCell },
  data() {
    return {
      option: [
        {
          type: 'common_cell',
          title: "名称",
          value: "数值",
          arrow: true,
          arrow_direction: 'down',
          press:()=>{

          }
        },
        {
          type: 'tags',
          title: "标签",
          list:[
            {
              text:'plain',
              mode:'plain'
            },{
              text:'dark',
              mode: 'dark'
            },{
              text: 'light',
              mode: 'light'
            }
          ],
          press:()=>{
            
          }
        },
        {
          type: 'radio',
          title: "单选（是，否）",
          value: "是",
          arrow: false,
          arrow_direction:'up',
          conf: [
            {
              name: "是",
              disabled: false,
            },
            {
              name: "否",
              disabled: true,
            },
            {
              name: "不是",
              disabled: true,
            },
            {
              name: "第4个",
              disabled: true,
            },
          ],
          press:()=>{
            
          }
        }
      ],
    };
  },
};
</script>

<style lang="scss">
</style>