import Vue from 'vue';
import Vuex from 'vuex';

import app from '../App.vue'
import dict from './modules/dict';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // 状态
    },
    mutations: {
        // 改变方法
    },
    actions: {

    },
    modules: {
        app,
        // user,
        dict
    }
});

export default store;
