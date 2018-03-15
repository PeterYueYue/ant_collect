import axios from 'axios';



let base = 'http://192.168.1.122:8080';

let configGetClassify = {  //回收分类
    
    "name": "category.listTop",
    "format": "json",
    "sign": "150181CDB909BC6EB4F3FF8EFFF5AFD4",
    "version": "1.0",
    "nonce": "518d8cb1-4e7a-49da-941f-72669ee547f6",
    "timestamp": 1521084409360,
    "token": "3F3TEMH74565Q5QORHNPE76UZM6VT4JPWVV4OPUNTGAXLLRLC6B5GYU3LW34YHVNOEFL2LXPVT24UAJWCBI7NJ42KSYJ2KXG2OVQSA6ZMU4VMMCLQUKIRXAWTX2BD3K6MDOZDBJ4Q62CYGOB7DVAUP4CYQAHL3JSQRIG7P2UO77IZBN7W3E4RZK42VEEUWCHGAZLS7LGRB4EVIIYSQVYYSGAETEUZC4JUVVV2UDRKIOBGXURUGYCOGKTBVFLZYU2QFPF2G4I7DVNKBWCOFWBQDLZLJYEDSPIL6T46KLPZ4O2ZIFJROTQ"
} 
let configGetSubList = {   //根据一级分类id取得所有二级分类
    "name": "category.listchild",
    "format": "json",
    "sign": "5708373CF8855D4ED3D5429770083CEB",
    "version": "1.0",
    "nonce": "7a3e111a-4c92-411d-8683-220eacfde115",
    "timestamp": 1521091926280,
    "token": "3F3TEMH74565Q5QORHNPE76UZM6VT4JPWVV4OPUNTGAXLLRLC6B5GYU3LW34YHVNOEFL2LXPVT24UAJWCBI7NJ42KSYJ2KXG2OVQSA6ZMU4VMMCLQUKIRXAWTX2BD3K6MDOZDBJ4Q62CYGOB7DVAUP4CYQAHL3JSQRIG7P2UO77IZBN7W3E4RZK42VEEUWCHGAZLS7LGRB4EVIIYSQVYYSGAETEUZC4JUVVV2UDRKIOBGXURUGYCOGKTBVFLZYU2QFPF2G4I7DVNKBWCOFWBQDLZLJYEDSPIL6T46KLPZ4O2ZIFJROTQ"
}

let configAddressList ={

  "name": "community.defaultAddress",
  "format": "json",
  "sign": "40AFD5662C2FFA919683D5DE60B37A7D",
  "version": "1.0",
  "nonce": "16412db9-5f3b-4af2-90cd-bdc85a98ef17",
  "timestamp": 1520835093965,
  "token": "3F3TEMH74565Q5QORHNPE76UZM6VT4JPWVV4OPUNTGAXLLRLC6B5GYU3LW34YHVNOEFL2LXPVT24UAJWCBI7NJ42KSYJ2KXG2OVQSA27WG43UUZQ4FYKZJHIRFEZICJPMDOZDBJ4Q62CYZNTHZWYKZJLJJF26CDHC2YOP3DFQF3WXSANFSH6UM57BZXWRLGTJWO6UFBKPLK3LCLBCNNT4KSY3LFMDVRU5T3LPXGYXLYBXGMJ7YJCXH3AK3VZ5YI3WBZNCSIELCGPJCDITVJH4DVRSFXA7FKOGH7EFLLPZ4O2ZIFJROTQ"
}





//回收分类
export default {
    getClassify(params){  //取得所有一级分类
        let config =  Object.assign(configGetClassify,params)
        return axios.post(`${base}/ali/api`,configGetClassify).then(res => res.data);
    },
    getSubList(params){  //取得所有一级分类
        let config =  Object.assign(configGetSubList,params)
        return axios.post(`${base}/ali/api`,config).then(res => res.data);
    },
    getAddRessList(params){
        let config =  Object.assign(configAddressList,params)
        return axios.post(`${base}/ali/api`,config).then(res => res.data);
    }

}

