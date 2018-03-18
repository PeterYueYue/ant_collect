<template>
<div class="classchange">
    <h3 class="titlename">类型</h3>
    <ul class="class_change_list clearfix">
        
        <li v-for="item,index in data"  @click="isActive(index)"     class="fl ">
            <!-- <a class="active" href="">120L-220L双门冰箱</a> -->
            <router-link   class="active" :to="'/typeSelect/typeyear/'+'2'" >{{item.name}}</router-link>
            
        </li>
        <li class="fl">
            <!-- <a href="">120L-220L双门冰箱</a> -->
            <router-link  class="active"  :to="'/typeSelect/typeyear/'+'2'">120L-220L双门冰箱</router-link>
        </li>

        <li class="fl">
            <!-- <a href="">120L-220L双门冰箱</a> -->
            <router-link  class="active"  to="/typeSelect/typeyear">120L-220L双门冰箱</router-link>
        </li>
        <li class="fl">
            <!-- <a href="">120L-220L双门冰箱</a> -->
            <router-link    to="/typeSelect/typeyear">120L-220L双门冰箱</router-link>
        </li>
        <
    </ul>
</div>
</template>
<script>
import api from '@/api/api.js'
export default {
    data(){
        return{

            index:1,
            data:'',
            isActive:''
        }
    },
    created(){

        const {index} = this.$route.params;
        this.$store.dispatch("changePointIndex",index)

        this.$emit('changeIndex',"1")


        //  根据分类 的属性取 分类属性选项
        api.categoryAttrOption({
        "app_key": "app_id_1",
        "data": {
            "id": 2
        }
        }).then((res)=>{
            this.data = res.data;

            console.log(this.data)

        }).catch((erro)=>{
            console.log(erro)

        })
    }

  


}
</script>



