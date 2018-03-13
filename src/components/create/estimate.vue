<template>
    <div class="estimate">
        <header class="head clearfix">
            <div @click="backbtn()" class="fl">
                <span class="fl headback"></span>
                <span class="fl">返回</span>
            </div>
            <h3 class="fl">价格评估</h3>
        </header>
        <div class="callbackinfo">
            <img class="" src="@/assets/icebox.png" alt="">
            <div class=" information ">
                <h5>商品名称</h5>
                <div class="recovery_price">
                    预估价格:
                    <span class="young">
                        ￥
                        <span>
                            39.9
                        </span>
                    </span>
                </div>
            </div>
        </div>
        <div class="reference_price clearfix">
            <span class="fl">平均回收价：￥29.99</span>
            <router-link class="fr btna" to="/typeSelect/typeclass" >重新询价</router-link>
        </div>
        <ul class="authority">
            <li class="item">
                <div class="imgbox">
                    <img src="@/assets/speciality.png" alt="">
                </div>
                <span>专业的质量评估</span>
            </li>
             <li class="item">
                <div class="imgbox">
                    <img src="@/assets/clear.png" alt="">
                </div>
                <span>隐私清除保密</span>
            </li>
             <li class="item">
                <div class="imgbox">
                    <img src="@/assets/government.png" alt="">
                </div>
                <span>政府担保交易</span>
            </li>
            

        </ul>

        <div class="nextbutton  ">
            <router-link  to="/orderInfo" >立即回收</router-link>
        </div>
    </div>
</template>
<script>
import '@/assets/createstyle/estimate.css'
export default {
    methods:{
        backbtn(){ //执行返回上一个路由；
          this.$router.go(-1);
          
      },
    }
  
}
</script>

