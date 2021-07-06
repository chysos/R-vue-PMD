<template>
<view>
    <u-toast ref="R_card" />
  <r-card :option="option"></r-card>
</view>
</template>

<script>
import RCard from "./R-card.vue";
export default {
  components: { RCard },
  data() {
    return {
      option: [
        {
          full: true,
          title: "今日新闻",
          titleColor: "",
          titleSize: 30,
          subTitle: "2021-07-06",
          subTitleColor: "",
          subTitleSize: 26,
          border: true,
          margin: "30rpx",
          borderRadius: "16",
          headBorderBottom: true,
          footBorderTop: true,
          thumb: require("@/static/icons/河马.png"),
          thumbWidth: "",
          thumbCircle: true,
          padding: "",
          show_head: true,
          show_foot: true,
          box_shadow: "",
          press: () => {

          },
          body: [
            {
              text: "APK被终结，谷歌推出AAB格式，开发者、鸿蒙、和Windows11是否影响大",
              imgUrl:
                "https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg",
              press: () => {
                   this.$refs.R_card.show({title: this.option[0].body[0].text+'被单击'})
              },
            },
            {
              text: "中国工程院院士钟南山在沪参加上海科技大学2021届毕业典礼时表示，疫苗到第三期做不下去了，原因是没病人了。这被网友称为最骄傲的凡尔赛发言",
              imgUrl: require("@/static/icons/1.jpg"),
              press: () => {
                  this.$refs.R_card.show({title: this.option[0].body[1].text+'被单击'})
              },
            },
          ],
          foot:{
              label:'5评论',
              press: () => {
                   this.$refs.R_card.show({title:'评论框被单击'})
              },
          }
        },
        {
          full: true,
          title: "今日看点",
          titleColor: "",
          titleSize: 30,
          subTitle: "2021-07-06",
          subTitleColor: "",
          subTitleSize: 26,
          border: true,
          margin: "30rpx",
          borderRadius: "16",
          headBorderBottom: true,
          footBorderTop: true,
          thumb: require("@/static/icons/狐狸.png"),
          thumbWidth: "",
          thumbCircle: true,
          padding: "",
          show_head: true,
          show_foot: true,
          box_shadow: "",
          press: () => {

          },
          body: [
            {
              text: "中国日报北京7月6日电（记者 张陨璧）有知情人士日前接受《中国日报》独家采访时透露，近日有500多名中国理工科研究生申请赴美签证时被美方拒签，拜登政府一方面试图顺应美高校要求大量吸收中国留学生、保证学费收入的呼声，另一方面说一套做一套，仍旧延续打压理工科中国研究生和学者的错误政策，严重损害中国留学人员合法权益。",
              imgUrl:require("@/static/icons/2.jpg"),
              press: () => {
                   this.$refs.R_card.show({title: this.option[1].body[0].text+'被单击'})
              },
            },
            {
              text: "英国政府5日公布英格兰地区最后阶段“解封”计划详情，包括一旦实施“解封”，将取消在商店、地铁等公共场所须戴口",
              imgUrl: require("@/static/icons/3.jpg"),
              press: () => {
                  this.$refs.R_card.show({title: this.option[1].body[1].text+'被单击'})
              },
            },
            {
              text: "7月5日下午，中国排协网站公布中国女排东京奥运12人参赛名单。朱婷担任球队队长，张常宁、李盈莹和刘晓彤为球队主攻",
              imgUrl:require("@/static/icons/4.jpg"),
              press: () => {
                   this.$refs.R_card.show({title: this.option[1].body[2].text+'被单击'})
              },
            }
          ],
          foot:{
              label:'13评论',
              press: () => {
                   this.$refs.R_card.show({title:'评论框被单击'})
              },
          }
        }
      ],
    };
  },
};
</script>

<style lang="scss">
</style>