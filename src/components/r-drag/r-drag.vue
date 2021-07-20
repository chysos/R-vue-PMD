<template>
  <view class="r-drag" draggable="true" >
      <view style="pointer-events:none">
        <component :is="type" :list="option"></component>
      </view>
  </view>
</template>

<script>
export default {
    name:'r-drag',
    props:{
        type:{
            type:String,
            require:true
        },
        option:{
            type:Array,
            require:true
        }
    },
    data(){
        return{

        }
    },
    methods:{
    }
}
</script>

<style lang="scss">
.r-drag{
   &:hover{
       border: 3px dotted blue;
       cursor: move;
   }
   &:active{
       border: 6px dotted green;
       cursor: move;
   }
}
</style>