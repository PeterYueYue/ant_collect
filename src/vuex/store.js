import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);
// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state: {
      count: 0,
      msItemId:'',
      // pointIndex:0,
      useraddress:'8888',
      testStr:'aabbcc',
      

    },
   
    mutations: {

      getSubItemID(state,id){  //获取子集ID
        this.state.msItemId = id;
      },
      // changeAddress(state,item){
      //    this.uesrInfo = item;
      //   this.useraddress = uesrInfo.address;
      //   this.username = uesrInfo.name;
      //   console.log(this.state,"vuex2")
      // },
      set_change_index(state,data){
        console.log('state');
        
      },
      Change_Address(state,data){
        this.state.useraddress = data

        console.log(this.state.useraddress,'yuaynag')
      }
    },
    // actions :{

    //   changeAddress(dispatch,item){

    //     console.log(item,"vuex里的")
    //     this.commit('changeAddress',item)

    //   }

    // },
    plugins: [createPersistedState({storage: window.sessionStorage})]
  })