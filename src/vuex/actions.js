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
export const changeStatisticsPrice     = ({commit}, data)   =>{
    commit(types.Change_StatisticsPrice, data)
}
export const changeFuturePrice         = ({commit}, data)   =>{  // 预估价格
    commit(types.Change_Future_Price, data)
}
export const changeTextareaValue       = ({commit}, data)   =>{   //图片描述信息
    commit(types.Change_Textarea_Value, data)
}
export const changeAppointmentTime     = ({commit}, data)   =>{   //设定或改变预约时间
    commit(types.Change_Appointment_Time, data)
}
export const addImgsUrl                 = ({commit}, data)   =>{   //从服务器请求来的上传的图片呢地址信息
    commit(types.add_Imgs_Url, data)
}
export const removeImg                   = ({commit}, data)   =>{   //删除上传图片
    commit(types.remove_Img, data)
}