<template>
    <ul class="elelist">
        <li  v-for="item in cellList"  @click="sendAddInfo(item)"   >
             <router-link to="/addressoption">{{item.address+'['+item.name+']'}}</router-link>
        </li>
    </ul>    
  
</template>
<script>
import '@/components/create/common/addressel.css'
import api from '@/api/api.js'
import {mapGetters} from 'vuex'
export default {

    data(){
        return{
            cellList:[]
        }
    },
    created(){

        // 根据区域id，取得该区域下所有小区 ，仅支持上一级，不支持跨层
        api.getCellSeleTion({
            "app_key": "app_id_1",
            "data": {
                "id": 3   // 暂时写
            }
        }).then(res =>{
            this.cellList = res.data
            console.log(res,"sssaaa")
        }).catch( erro =>{
            console.log(erro)
        })
    },
   
    computed: mapGetters({

        useraddress:'useraddress'
    }),
     methods:{
        sendAddInfo(item){

            console.log(this.useraddress,'sdsadas')

            this.$store.dispatch('changeAddress',item)
            
        }
        
    },
}
</script>

