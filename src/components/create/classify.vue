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
                <!-- <li class="item ">手机</li>
                <li class="item">笔记本</li>
                <li class="item">摄像摄影</li>
                <li class="active item ">智能数码</li>
                <li class="item">大家电</li>
                <li class="item">办公设备</li> -->
                <li 
                v-for="(item ,index) in menulist" 
                class="item"
                v-bind:class="{ active: isActive == index }"
                @click="getList(item.id,index)"
                
                >{{item.name}}</li>
            </ul>
            <div class="pinlei fl">
                <div class="title clearfix">
                    <span class="left_line fl"></span>
                    <h5 class="fl">品类</h5>
                    <span class="right_line fl"></span>
                </div>
                <ul class="linlei_list clearfix">
                    <li class="item  fl"

                    v-for="(item,index) in subList"

                    @click="getAddressInfo(item,index)"
                    >
                        
                        <router-link  :to="'/addressoption/'+item.id">
                            <img :src=item.icon alt="">
                            <span>{{item.name}}</span>
                        </router-link>
                    </li>
                     <!-- <li class="item fl">
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
                    </li> -->
                    
                    
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

    data(){
        return{
            menulist:'',
            isId:'1',
            subList:'',
            isActive:'1'
            
        }
    },
    created:function(){
        api.getClassify({
            "app_key": "app_id_1",
            "data": {
            "level": "0"
            }
        }).then((res)=>{this.menulist = res.data;  }).catch((erro)=>{console.log(erro)});

        api.getSubList({
                "app_key": "app_id_1",
                "data": {
                    "id": this.isId
                }
            }).then((res)=>{ 

            this.subList = res.data;  
            
            }).catch((erro)=>{console.log(erro)})
        
    },
    methods:{
        getList(id,index){
            this.isId = id;
            this.isActive = index;
            api.getSubList({
                "app_key": "app_id_1",
                "data": {
                    "id": this.isId
                }
            }).then((res)=>{ 
            this.subList = res.data;    
            }).catch((erro)=>{console.log(erro)})
        },
        getAddressInfo(item,id){  //获取子集列表里的ID
            this.$store.dispatch('setAddRessId',item)
            //获取地址信息
            api.getAddRessList({
            "app_key": "app_id_1",
                "data": {
                    "id":1
                }
            }).then((res)=>{
                this.$store.dispatch('changeAddress',res)
            }).catch((erro)=>{console.log(erro)})  
        }
    }
  

}
</script>

