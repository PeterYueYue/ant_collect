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
        <!-- <div class="hsdiqu clearfix" @click="getUserAddRess()"  >
            <h5 class="fl">回收地区</h5>
            <div class="text fl">
                请选择你所在的区域...
                <span class="fr"></span>
            </div>
        </div> -->

        <!-- 省 城市 区 三级联动下来菜单 -->
        <addressele class="addele" ></addressele>

        <div class="next">
            <span class="add_info">找不到回收的小区?</span>
            <h1 id="demo"></h1>
            <div class="nextbutton  ">
                <!-- <a href="">下一步</a> -->
                <router-link  to="/typeSelect/typeclass" >下一步</router-link>
            </div>
        
        </div>
        <!-- 如果选择的地址没有弹出此提示框 -->
        <!-- <prompt-box></prompt-box> -->
        

   
    

        
    </div>

    
  



</template>

 <style>
    .output{ display:block; max-width: 100%; overflow: auto}
</style>
<script src="https://gw.alipayobjects.com/as/g/h5-lib/alipayjsapi/3.1.0/alipayjsapi.inc.min.js"></script>
<script>





import '@/assets/createstyle/tool.css'
import '@/assets/createstyle/addressopt.css'

import addressele from '@/components/create/common/addressel.vue'
import PromptBox from './common/promptbox.vue'
export default {
  components:{
      PromptBox,
      addressele
  },

  created(){
      
        if(navigator.geolocation) {


    navigator.geolocation.getCurrentPosition(
        
        function (position) {  
            var longitude = position.coords.longitude;  
            var latitude = position.coords.latitude;  
            console.log(longitude)
            console.log(latitude)
            },
            function (e) {
             var msg = e.code;
             var dd = e.message;
             console.log(msg)
             console.log(dd)
        }
      ) 
   }
            
            
        
  },
  methods:{
    backbtn(){ //执行返回上一个路由；
        this.$router.go(-1);
        
    }
      
    
}
}
</script>
