<template>
    <ul class="elelist">
        <li   v-for="item in areaList"   @click="changeSelected(item)"    >
             <router-link :to="'/addressel/townSelect/'+item.id">{{item.areaName}}</router-link> 
        </li>
        
    </ul>    
  
</template>
<script>
import '@/components/create/common/addressel.css'
import api from '@/api/api.js'
import { mapGetters } from 'vuex';

export default {
    data(){
        return{

            areaList:[]
        }
    },
    created(){
        // 获取所有的区
        api.getAreaList({
            "app_key": "app_id_1",
            "data": {
                "id": 1,
                "level": 0
            }
        }).then((res)=>{
            this.areaList = res.data;
        }).catch((erro)=>{
            console.log(erro)
        })
    },
    methods:{
        changeSelected(item){
            this.$store.dispatch('changeSelected',item)

        }
    }
    
  
}
</script>

