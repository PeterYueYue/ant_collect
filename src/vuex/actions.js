import * as types from './mutation-types'
import store      from './../../static/store.js'
export const changePointIndex = ({commit},data) => {
    console.log(data,'aaas');
    commit(types.SET_CHANGE_INDEX,data);
}



export const changeItem = ({ commit }, data) => {

    commit(types.Set_user_info, data)
}


export const changeAddress = ({commit}, data) => {

    console.log(data)

    commit(types.Change_Address,data)
}
