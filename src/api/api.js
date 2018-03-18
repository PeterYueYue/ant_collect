import axios from 'axios';



// let base = 'http://192.168.1.122:8080';
let base = 'http://101.132.165.211:8080'

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
let configGetAreaList = {   //根据层级取得所有该层地区
    "name": "area.getByArea",
    "format": "json",
    "sign": "13D87277BCBF3A55F7D1BB13A6E00723",
    "version": "1.0",
    "nonce": "fc1874cb-af8d-4feb-bed2-39914f6dc098",
    "timestamp": 1520403875676,
    "token": "3F3TEMH74565Q5QORHNPE76UZM6VT4JPWVV4OPUNTGAXLLRLC6B5GYU3LW34YHVNOEFL2LXPVT24UAJWCBI7NJ42KSYJ2KXG2OVQSA27WG43UUZQ4FYKZJHIRFEZICJPMDOZDBJ4Q62CYZNTHZWYKZJLJJF26CDHC2YOP3DFQF3WXSANFSH6UM57BZXWRLGTJWO6UFBKPLK3LCLBCNNT4KSY3LFMDVRU5T3LPXGYXLYBXGMJ7YJCXH3AK3VZ5YI3WBZNCSIELCGPJCDITVJH4DVRSFXA7FKOGH7EFLLPZ4O2ZIFJROTQ"
  }

let configAreaChildList = {  //根据父级取得所有子地区

    "name": "area.child",
    "format": "json",
    "sign": "A81DE37CBFECB1C01F50A634006095E4",
    "version": "1.0",
    "nonce": "ebe3fcb8-4ab5-49a7-accc-4eade3ce7446",
    "timestamp": 1520404216901,
    "token": "3F3TEMH74565Q5QORHNPE76UZM6VT4JPWVV4OPUNTGAXLLRLC6B5GYU3LW34YHVNOEFL2LXPVT24UAJWCBI7NJ42KSYJ2KXG2OVQSA27WG43UUZQ4FYKZJHIRFEZICJPMDOZDBJ4Q62CYZNTHZWYKZJLJJF26CDHC2YOP3DFQF3WXSANFSH6UM57BZXWRLGTJWO6UFBKPLK3LCLBCNNT4KSY3LFMDVRU5T3LPXGYXLYBXGMJ7YJCXH3AK3VZ5YI3WBZNCSIELCGPJCDITVJH4DVRSFXA7FKOGH7EFLLPZ4O2ZIFJROTQ"

}
let configCategoryAttrOption = {  //根据分类 的属性取 分类属性选项
    "name": "categoryAttrOption.listCategoryAttrOption",
    "format": "json",
    "sign": "49964CA877CA34368E2BC8D6FD331D2B",
    "version": "1.0",
    "nonce": "45418cfc-5ad2-4f48-8fe7-09ded212d999",
    "timestamp": 1520579620270,
    "token": "3F3TEMH74565Q5QORHNPE76UZM6VT4JPWVV4OPUNTGAXLLRLC6B5GYU3LW34YHVNOEFL2LXPVT24UCSPFZ54XJGBWOYJ2KXG2OVQSA66MVAOXZJJLEKKZJHIRFEZICJPR5IJ6KH3W7J2V2N2YG2KWONJV2L4ZAYE73TH4P7OCHDEVXGKNWGICHRB5QUBSCA6AZT24RQLJ374LVA4XBQ2V67K7NP4D56C7U3OG2SAK7CN6B6PMDHBT2ANYMRYZ5K3KRFLRSIYOSSQESPQSXVE73BPPBPSSIQTWILQLUDPZ4O2ZIFJROTQ"
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
    getAddRessList(params){  //
        let config =  Object.assign(configAddressList,params)
        return axios.post(`${base}/ali/api`,config).then(res => res.data);
    },
    getAreaList(params){  //根据层级获取所有的区
        let config =  Object.assign(configGetAreaList,params)
        return axios.post(`${base}/ali/api`,config).then(res => res.data);
    },
    areaChildList(params){  //根据父级取得所有子地区
        let config =  Object.assign(configAreaChildList,params)
        return axios.post(`${base}/ali/api`,config).then(res => res.data);
    },
    categoryAttrOption(params){  //根据分类 的属性取 分类属性选项
        let config =  Object.assign(configCategoryAttrOption,params)
        return axios.post(`${base}/ali/api`,config).then(res => res.data);
    }

}

