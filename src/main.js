import Vue from 'vue'
import App from './App'
// import {formatDate} from '@/utils/time';
import uView from "uview-ui";
import * as echarts from 'echarts';


import RVue from './components'
// 注册组件库
Vue.use(RVue)


import cuHeader from '../colorui/components/cu-header.vue'
Vue.component('cu-header',cuHeader)


Vue.config.productionTip = false
Vue.use(uView);
Vue.prototype.$echarts = echarts;

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
