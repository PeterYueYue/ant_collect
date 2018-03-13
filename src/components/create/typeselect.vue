<template>
  <div class="typeselect">
    <header class="head clearfix">
        <div @click="backbtn()" class="fl">
            <span class="fl headback"></span>
            <span class="fl">返回</span>
        </div>
        <h3 class="fl">类型选择</h3>
    </header>
    <div class="callbackinfo">
        <div class="imgbox">
            <img class="" src="@/assets/icebox.png" alt="">
        </div>
        <div class=" information ">
            <h5>商品名称</h5>
            <div class="recovery_price">
                平均回收价:
                <span class="young">
                    ￥
                    <span>
                        39.9
                    </span>
                </span>
            </div>
        </div>
    </div>
    <!-- <div class="classchange">
        <h3 class="titlename">类型</h3>
        <ul class="class_change_list clearfix">
            <li class="fl">
                <a href="">单门冰箱</a>
            </li>
            <li class="fl">
                <a href="">120L-220L双门冰箱</a>
            </li>
            <li class="fl ">
                <a class="active" href="">120L-220L双门冰箱</a>
            </li>
            <li class="fl">
                <a href="">120L-220L双门冰箱</a>
            </li>
            <li class="fl">
                <a href="">120L-220L双门冰箱</a>
            </li>
            <li class="fl">
                <a href="">120L-220L双门冰箱</a>
            </li>
            <li class="fl">
                <a href="">120L-220L双门冰箱</a>
            </li>
            <li class="fl">
                <a href="">120L-220L双门冰箱</a>
            </li>
            <li class="fl">
                <a href="">120L-220L双门冰箱</a>
            </li>
            <li class="fl">
                <a href="">120L-220L双门冰箱</a>
            </li>
        </ul>
    </div> -->
    <!-- 嵌套 种类 年前 以及其他信息的组件 -->
    <transition  >
        <router-view></router-view>
    </transition>
    <!-- 底部步骤按钮提示 -->
    <schedule></schedule>
  </div>



</template>
<script>
import '@/assets/createstyle/tool.css'
import '@/assets/createstyle/typeselect.css'
import Schedule from '@/components/create/common/schedule.vue'
export default {
    components:{
        Schedule
    },
    methods:{
        backbtn(){ //执行返回上一个路由；
          this.$router.go(-1);
          
      }
    }
}
</script>

