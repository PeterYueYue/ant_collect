<template>
  
    <div class="classify">
        <header class="head clearfix">
            <div class="fl">
                <span class="fl headback"></span>
                <span class="fl">返回</span>
            </div>
            <h3 class="fl">回收分类</h3>
        </header>
        <div class="content clearfix">
            <ul class="commodity fl">
                <li class="item ">手机</li>
                <li class="item">笔记本</li>
                <li class="item">摄像摄影</li>
                <li class="active item ">智能数码</li>
                <li class="item">大家电</li>
                <li class="item">办公设备</li>
                <li class="item">纸张塑料</li>
            </ul>
            <div class="pinlei fl">
                <div class="title clearfix">
                    <span class="left_line fl"></span>
                    <h5 class="fl">品类</h5>
                    <span class="right_line fl"></span>
                </div>
                <ul class="linlei_list clearfix">
                    <li class="item fl">
                        
                        <router-link  to="/addressoption">
                            <img src="@/assets/washer.png" alt="">
                            <span>冰箱</span>
                        </router-link>
                    </li>
                     <li class="item fl">
                        <img src="@/assets/washer.png" alt="">
                        <span>电视</span>
                    </li>
                     <li class="item fl">
                        <img src="@/assets/washer.png" alt="">
                        <span>空调</span>
                    </li>
                     <li class="item fl">
                        <img src="@/assets/washer.png" alt="">
                        <span>洗衣机</span>
                    </li>
                     <li class="item fl">
                        <img src="@/assets/washer.png" alt="">
                        <span>电动车</span>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
    </div>


</template>
<script>
// import axios from 'axios'
import api from '@/api/api.js'
import '@/assets/createstyle/tool.css'
import '@/assets/createstyle/classify.css'
export default {

    created:function(){
        // let obj = {
        //     "app_key": "app_id_1",
        //     "data": {
        //         "pageNumber": 1,
        //         "pageSize": 20
        //     }
        // }
        // api.getClassify({
        //     "app_key": "app_id_1",
        //     "data": {
        //         "pageNumber": 1,
        //         "pageSize": 20
        //     }
        // }).then((res)=>{
        //     console.log(res);
        // }).catch((erro)=>{
        //     console.log(erro)
        // })

        api.getClassify()
    
//     axios.post('http://192.168.1.122:8080/ali/api',{

//     "app_key": "app_id_1",
//     "data": {
//     "pageNumber": 1,
//     "pageSize": 20
//     },
//     "name": "order.orderlist",
//     "format": "json",
//     "sign": "5D23A3D083914E83937787A5D23E4CC9",
//     "version": "1.0",
//     "nonce": "3dd5332b-261c-4d6d-9359-289ede05cc6e",
//     "timestamp": 1520579005446,
//     "token": "3F3TEMH74565Q5QORHNPE76UZM6VT4JPWVV4OPUNTGAXLLRLC6B5GYU3LW34YHVNOEFL2LXPVT24UAJWCBI7NJ42KSYJ2KXG2OVQSA6ZMU4VMMCLQUKIRXAWTX2BD3K6MDOZDBJ4Q62CYGOB7DVAUP4CYQAHL3JSQRIG7P2UO77IZBN7W3E4RZK42VEEUWCHGAZLS7LGRB4EVIIYSQVYYSGAETEUZC4JUVVV2UDRKIOBGXURUGYCOGKTBVFLZYU2QFPF2G4I7DVNKBWCOFWBQDLZLJYEDSPIL6T46KLPZ4O2ZIFJROTQ"
    
// }
        
//     )
//     .then(function (response) {

//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

   
    }
  

}
</script>

