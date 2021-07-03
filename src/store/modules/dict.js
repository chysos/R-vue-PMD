import {httpRequestNoToken} from '@/utils/http';
const dict = {
  state: {
    // 经常需要读取的数据字典
    allDict:{}
  },
  mutations: {
    // 设置值的改变方法
    setDict(state,res){
      if(res.type){
        state[res.type] = res.res;
      }
    }
  },
  actions:{
    checkDict({commit,state},type){
      if(!state[type]){
        httpRequestNoToken('/dictData/getByType/' + type).then(res => {
          if (res.success) {
            commit("setDict", {res : res.result,type:type});
          }
        });
      }
    }
  }
};

export default dict;
