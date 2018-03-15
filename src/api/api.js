import axios from 'axios';



let base = 'http://192.168.1.122:8080';

const configGetClassify = {
    "app_key": "app_id_1",
    "data": {
    "level": "1"
    },
    "name": "category.listTop",
    "format": "json",
    "sign": "150181CDB909BC6EB4F3FF8EFFF5AFD4",
    "version": "1.0",
    "nonce": "518d8cb1-4e7a-49da-941f-72669ee547f6",
    "timestamp": 1521084409360,
    "token": "3F3TEMH74565Q5QORHNPE76UZM6VT4JPWVV4OPUNTGAXLLRLC6B5GYU3LW34YHVNOEFL2LXPVT24UAJWCBI7NJ42KSYJ2KXG2OVQSA6ZMU4VMMCLQUKIRXAWTX2BD3K6MDOZDBJ4Q62CYGOB7DVAUP4CYQAHL3JSQRIG7P2UO77IZBN7W3E4RZK42VEEUWCHGAZLS7LGRB4EVIIYSQVYYSGAETEUZC4JUVVV2UDRKIOBGXURUGYCOGKTBVFLZYU2QFPF2G4I7DVNKBWCOFWBQDLZLJYEDSPIL6T46KLPZ4O2ZIFJROTQ"
} 





//回收分类
export default {
    getClassify(params){  //取得所有一级分类
        return axios.post(`${base}/ali/api`,configGetClassify).then(res => res);
    }

}