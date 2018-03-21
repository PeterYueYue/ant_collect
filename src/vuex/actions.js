import * as types from './mutation-types'
import store      from './../../static/store.js'
export const changePointIndex = ({commit},data)             => {
    commit(types.SET_CHANGE_INDEX,data);
}
export const changeItem                = ({ commit }, data) => {
    commit(types.Set_user_info, data)
}
export const changeAddress             = ({commit}, data)   => {   //改变选择的地址信息
    commit(types.Change_Address, data)
}
export const changeShowOrHidden        = ({commit}, data)   => {  //控制选不到已服务的小区的提示框
    commit(types.Change_Show_Or_Hidden, data)
}
export const setAddRessId              = ({commit}, data)   =>{  //点击品类存储商品ID
    commit(types.Set_Add_Ress_Id, data)  
}
export const changeIsShowState         = ({commit}, data)   =>{  //来改变类型和商品状况选择里的模块显示第几个
    commit(types.Change_Is_Show_State, data)  
}
export const changeSelected            =  ({commit}, data)  =>{  //选择地址 改变已选的信息
    commit(types.Change_Selected, data)
}
export const changeSelectedSubdistyict = ({commit}, data)   =>{
    commit(types.Change_Selected_Subdistyict, data)
}
export const changeStatisticsPrice = ({commit}, data)   =>{
    commit(types.Change_StatisticsPrice, data)
}
export const changeFuturePrice = ({commit}, data)   =>{
    commit(types.Change_Future_Price, data)
}
