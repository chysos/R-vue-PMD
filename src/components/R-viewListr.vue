<template>
  <u-cell-group :title="title">
    <view v-for="(item, index) in list" :key="index">
      <u-cell-item
        :title="item.title"
        :value="item.value"
        :arrow="false"
        v-if="item.type === 1"
      >
      </u-cell-item>
      <u-cell-item :title="item.title" :arrow="false" v-if="item.type === 3">
        <u-radio-group v-model="item.value">
          <u-radio
            @change="radioChange"
            v-for="(u_item, index) in item.conf"
            :key="index"
            :name="u_item.name"
            :disabled="u_item.disabled"
          >
            {{ u_item.name }}
          </u-radio>
        </u-radio-group>
      </u-cell-item>
    </view>
  </u-cell-group>
</template>

<script>
/**
 * prop       数据类型
 * :title     string 
 * :arr       数组
 * 
 * 
 * 
 * 数据类型：数组
 * 
 * type:1 常规列表
 *    title: 列表名称
 *    value： 值
 *   例子：   
 *      {
          type: 1,
          title: "部件名称",
          value: "部件名称",
        }
 * type:2 title + 按钮
 *    title: 列表名称
 *    value: 按钮值
 * 
 * 
 * 
 * type:3 title + 单选框
 *     例子：
 *      {
          type: 3,
          title: "是否是易耗品",
          value: "是",
          conf: [
            {
              name: "是",
              disabled: false,
            },
            {
              name: "否",
              disabled: true,
            },
          ],
        }
 * 
 * 
 * 
 * 
 */
export default {
  data() {
    return {};
  },
  methods: {
    radioChange(e) {
      // console.log(e);
    },
    // 选中任一radio时，由radio-group触发
    radioGroupChange(e) {
      // console.log(e);
    },
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default:''
    },
  },
};

/*
parts_info: [
        ,{
          type: 1,
          title: "部件类型",
          value: "部件类型",
        },
        ,
        {
          type: 1,
          title: "到期时间",
          value: "2021-06-30",
        }
        ,
        {
          type: 1,
          title: "运行时间",
          value: "2021-06-28~2021.6.30",
        },
        {
          type: 1,
          title: "预计时长",
          value: "72H",
        },
        {
          type: 1,
          title: "维保描述",
          value: "描述内容",
        },{
            type: 1,
          title: "更换数量",
          value: "123",
        },{
            type: 1,
          title: "下次更换时间",
          value: "2021-07-25",
        }
      ],
*/
</script>

<style>
</style>