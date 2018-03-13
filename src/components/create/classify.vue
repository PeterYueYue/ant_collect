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
                        
                        <router-link to="/addressoption">
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
import '@/assets/createstyle/tool.css'
import '@/assets/createstyle/classify.css'
export default {
  

}
</script>

