<template>
  <view class="content">
    <view>
      <text class="u-line-5">form:{{ form_data }}</text>
      <r-form
        :list="option"
        @get_form_data="get_form_data"
        :form_ref="$u.guid()"
        :form.sync="form"
      ></r-form>
    </view>
  </view>
</template>

<script>
export default {
  computed: {
    form_data() {
      return JSON.stringify(this.form);
    },
  },
  data() {
    return {
      form: {},
      title: "Hello R-vue",
      option: [
        {
          type: "location",
          label: "位置选择",
          name: "my-location",
          value: "",
        },
        {
          type: "number-box",
          label: "数字",
          name: "my-number-box",
          value: 25,
        },
        {
          type: "slider",
          label: "滑块：",
          max: "100",
          min: "0",
          step: "20",
          name: "my-slider",
          value: 0,
        },
        {
          type: "common_input",
          label: "普通输入框",
          name: "number",
          value: "",
          placeholder: "请输入普通输入框",
          rules: [
            {
              required: true,
              message: "请输普通输入框",
              // 可以单个或者同时写两个触发验证方式
              trigger: "blur,change",
            },
            {
              min: 5,
              message: "普通输入框不能少于5个字",
              trigger: "change,blur",
            },
          ],
        },
        {
          type: "time_picker",
          label: "时间选择器",
          name: "createTime",
          placeholder: "单击开始时间选择器",
          value: "",
          rules: [
            {
              required: true,
              message: "请输入时间",
              // 可以单个或者同时写两个触发验证方式
              trigger: "blur,change",
            },
          ],
        },
        {
          type: "single_select",
          label: "单个选择框（母框）",
          name: "type",
          select_list: [
            {
              value: "0",
              label: "第一个对象",
            },
            {
              value: "1",
              label: "第二个对象",
            },
          ],
          placeholder: "单击选择设备类型",
          value: "",
          rules: [
            {
              required: true,
              message: "请选择设备类型",
              // 可以单个或者同时写两个触发验证方式
              trigger: "blur,change",
            },
          ],
        },
        {
          type: "single_select_child",
          label: "单个选择框（子框）",
          name: "equipmentNum_name",
          parentName: "type",
          // context:子组件上下文
          // obj:母选择器值
          //单击时触发：callback :回调函数携带返回一个obj对象
          request_func: (context, obj, callback) => {
            let list = [];
            console.log(obj);
            setTimeout(() => {
              for (let i in [1, 2, 3, 4, 5]) {
                let obj2 = {
                  label: obj + "的子对象",
                  value: obj + "的子对象",
                };
                list.push(obj2);
              }
              callback(list);
            }, 500);
          },
          select_list: [],
          placeholder: "单击选择设备",
          value: "",
          rules: [
            {
              required: true,
              message: "请选择设备",
              // 可以单个或者同时写两个触发验证方式
              trigger: "blur,change",
            },
          ],
        },
        {
          type: "single_button",
          label: "简单的按钮",
          name: "select_component",
          click_func: (context) => {
            context.$refs.Form_Toast.show({
              title: "这是单击事件",
            });
          },
          btn_name: "单击简单的按钮",
        },
        {
          type: "password_input",
          label: "密码",
          name: "password_input",
          value: "",
          placeholder: "请输入密码",
          rules: [
            {
              required: true,
              message: "请输入工单编号",
              // 可以单个或者同时写两个触发验证方式
              trigger: "blur,change",
            },
            {
              min: 5,
              message: "密码不能少于5个字",
              trigger: "change,blur",
            },
          ],
          passwordIcon: true, //是否显示查看密码
        },
        {
          type: "common_input",
          label: "姓名",
          name: "login_name",
          value: "",
          placeholder: "请输入姓名",
          rules: [
            {
              required: true,
              message: "请输入姓名",
              // 可以单个或者同时写两个触发验证方式
              trigger: "blur,change",
            },
            {
              min: 2,
              message: "姓名不能少于2个字",
              trigger: "change,blur",
            },
          ],
        },
        {
          type: "range_calendar",
          label: "范围性的日历",
          name: "rangeCalendar",
          value: "",
          placeholder: "请输入日历起始与截止时间",
          rules: [
            {
              required: true,
              message: "请输入日历起始与截止时间",
              // 可以单个或者同时写两个触发验证方式
              trigger: "blur,change",
            },
          ],
        },
        {
          type: "single_calendar",
          label: "单选日历",
          name: "singleCalendar",
          value: "",
          placeholder: "请输入日历",
          rules: [
            {
              required: true,
              message: "请输入时间",
              // 可以单个或者同时写两个触发验证方式
              trigger: "blur,change",
            },
          ],
        },
        {
          type: "common_rate",
          label: "评分",
          name: "common_rate",
          count: 12,
          value: 6,
        },
        {
          type: "radio",
          label: "单选框",
          name: "my-radio",
          value: "apple",
          list: [
            {
              name: "apple",
              disabled: true,
            },
            {
              name: "banner",
              disabled: false,
            },
            {
              name: "orange",
              disabled: false,
            },
            {
              name: "watermelon",
              disabled: false,
            },
            {
              name: "peach",
              disabled: false,
            },
            {
              name: "admin",
              disabled: false,
            },
          ],
        },
        {
          type: "switch",
          label: "开关",
          name: "my-switch",
          value: true,
        },
      ],
    };
  },
  onLoad() {},
  methods: {
    get_form_data(form_data) {
      this.form_data = form_data;
      console.log(this.form_data);
    },
  },
};
</script>

<style>
.title {
  font-size: 10rpx;
  color: #8f8f94;
  height: 300rpx;
  width: 100rpx;
  padding: 30rpx 30rpx 30rpx 30rpx;
}
</style>