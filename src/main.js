import Vue from 'vue'
import App from './App'
// import {formatDate} from '@/utils/time';
import uView from "uview-ui";
import RVue from './components'



Vue.config.productionTip = false
Vue.use(uView);
Vue.use(RVue)
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
