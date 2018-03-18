import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import * as actions from './actions'
import * as getters from './getters'
Vue.use(Vuex);
// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state: {
      count: 0,
      msItemId:'',
      pointIndex:0
    },
    mutations: {

      getSubItemID(state,id){  //获取子集ID
        this.state.msItemId = id;
      },
      changePoint(state,index){

        console.log(index)
      },
      set_change_index(state,index){
        state.pointIndex = index;
      }
      
    },
    plugins: [createPersistedState({storage: window.sessionStorage})]
  })