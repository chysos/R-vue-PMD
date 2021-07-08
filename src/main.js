import Vue from 'vue'
import App from './App'
// import {formatDate} from '@/utils/time';
import uView from "uview-ui";
import * as echarts from 'echarts';

import cuHeader from '../colorui/components/cu-header.vue'
import RVue from './components'

Vue.use(RVue)

Vue.config.productionTip = false
Vue.use(uView);
Vue.prototype.$echarts = echarts;
//Vue.use(RVue)
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
