<template>
    <div class="addressopt">
        <header class="head clearfix">
            <div @click="backbtn()" class="fl">
                <span class="fl headback"></span>
                <span class="fl">返回</span>
            </div>
            <h3 class="fl">地址选择</h3>
        </header>
        <div class="step_call">
            <h3>四步变现</h3>
            <ul class="step_list">
                <li class="item">
                    <div class="step_num">1</div>
                    <span>旧机评估</span>
                    <div class="xuxian"></div>
                </li>
                <li class="item">
                    <div class="step_num">2</div>
                    <span>获得报价</span>
                    <div class="xuxian"></div>
                </li>
                <li class="item">
                    <div class="step_num">3</div>
                    <span>回收鉴定</span>
                    <div class="xuxian"></div>
                </li>
                <li class="item">
                    <div class="step_num">4</div>
                    <span>获得现金</span>
                    <!-- <div class="xuxian"></div> -->
                </li>
                
            </ul>
            <div class="icon_smaell"></div>
            <h5 class="reward">交易成功即可获得1次收呗信用</h5>
        </div>
        <!-- 获取用户的地址信息来判断位置 -->
        <div class="hsdiqu clearfix" @click="getUserAddRess()"  >
            <h5 class="fl">回收地区</h5>
            <router-link class="text fl" to="/addressel/areaelecte"  >
                请选择你所在的区域...
                <span class="fr"></span>
            </router-link>
        </div>

        <!-- 省 城市 区 三级联动下来菜单 -->
        <!-- <addressele :userAddressInfo="userAddressInfo" :areaList ="areaList" class="addele" ></addressele> -->

        <div class="next">
            <span class="add_info">找不到回收的小区?</span>
            <h1 id="demo"></h1>
            <div class="nextbutton  ">
                <!-- <a href="">下一步</a> -->
                <router-link  :to="'/typeSelect/typeclass/'+1" >下一步</router-link>
            </div>
        
        </div>

        <!-- 如果选择的地址没有弹出此提示框 -->
        <!-- <prompt-box></prompt-box> -->
        
    </div>


</template>

 <style>
    .output{ display:block; max-width: 100%; overflow: auto}
</style>
<script>
import '@/assets/createstyle/tool.css'
import '@/assets/createstyle/addressopt.css'
import api from '@/api/api.js'

// import addressele from '@/components/create/common/addressel.vue'
import PromptBox from './common/promptbox.vue'
export default {
  components:{
      PromptBox

  },
    data(){
        return{
            itemID:'',
            userAddressInfo:{},
            areaList:'',

        }
    },

  created(){
    this.itemID = this.$store.state.msItemId;

    

    const {id} = this.$route.params;


    
    api.getAddRessList({
        "app_key": "app_id_1",
        "data": {id}
    }).then((res)=>{

        this.userAddressInfo =res;

    }).catch((erro)=>{console.log(erro)})


    // 获取所有的区
    api.getAreaList({
        "app_key": "app_id_1",
        "data": {
            "id": 1,
            "level": 0
        }
    }).then((res)=>{
        
        this.areaList = res;
        console.log(res)

    }).catch((erro)=>{
        console.log(erro)
    })
    //根据父级取得所有子地区
    api.areaChildList({
        "app_key": "app_id_1",
        "data": {
            "id": 2,
            "level": 1
        }
    }).then((res)=>{
        console.log(res,"根据父级取得所有子地区")
    }).catch((erro)=>{
        console.log(erro)
    })
            
  },
  methods:{
    backbtn(){ //执行返回上一个路由；
        this.$router.go(-1);
    },
    getUserAddRess(){


        console.log("123")
    }

      
    
}
}
</script>
