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
      count                   :   0,
      msItemId                :   '',
      useraddress             :   '8888',
      isShowMeassage          :   false ,    //控制选不到已服务的小区的提示框
      addRessId               :    {},  //  进入地址组件关联的ID
      isShowForState          :    0, //来改变类型和商品状况选择里的模块显示第几个
      selectedInfo            : {
        areaItem              : '', //行政区域信息；object
        subdistyictItem       : '',
        cellseletionItem      : ''
      },  //用来存储 地址选择 已选择信息
      commodityInformation:{  //这里存储商品的详细信息
      }
    },  
    mutations: {
      getSubItemID(state,id){  //获取子集ID
        this.state.msItemId = id;
      },
      Set_Add_Ress_Id(state,data){
        this.state.addRessId = Object.assign(this.state.addRessId, data )
      },
      Change_Address(state,data){
        this.state.useraddress = data
        this.state.selectedInfo.cellseletionItem = data
      },
      Change_Show_Or_Hidden(state,data){  //改变提示框显示状态  默认为隐藏
        this.state.isShowMeassage = !this.state.isShowMeassage;
        // this.state.addRessId      = data;
      },
      Change_Is_Show_State(state, data){ //来改变类型和商品状况选择里的模块显示第几个
        this.state.isShowForState = Object.assign(this.state.isShowForState, data )
      },
      Change_Selected(state, data){  //用来存储 地址选择 已选择信息
        this.state.selectedInfo.areaItem = data;
        this.state.selectedInfo.subdistyictItem = '';
      },
      Change_Selected_Subdistyict(state, data){
        this.state.selectedInfo.subdistyictItem = data.area;
      }
    },
    plugins: [createPersistedState({storage: window.sessionStorage})]
  })