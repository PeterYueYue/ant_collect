import * as types from './mutation-types'

export const changePointIndex = ({commit},data) => {
    console.log(data,'aaas');
    commit(types.SET_CHANGE_INDEX,data);
}