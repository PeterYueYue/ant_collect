<template>
    <div class="uploadimage">
        <header class="head clearfix">
            <div @click="backbtn()" class="fl">
                <span class="fl headback"></span>
                <span class="fl">返回</span>
            </div>
            <h3 class="fl">上传图片</h3>
        </header>
        <a href="" class="imgbtnortext">
            <!-- 上传图片后隐藏 -->
            <div class="upimg"></div>
            <!-- 上传图片呢后显示 -->
            <div class="showimge">
                <img src="@/assets/upimg1.png" alt="">
                <img src="@/assets/upimg2.png" alt="">
                <div class="isaddimg">
                    <span class="level"></span>
                    <span class="verticals"></span>
                </div>
            </div>
            
            <div class="text">上传物品图片</div>
        </a>
        <div class="recycle_description">

            <h4>回收物品描述</h4>
            <div class="textarea_box">
                <textarea rows="3" maxlength="150" placeholder="请输入文字" cols="20">
                
                </textarea>
                <span>0/150</span>
            </div>
            <div class="nextbutton  ">
                <router-link  to="/estimate" >马上询价</router-link>
            </div>

        </div>
    </div>

</template>
<script>
import '@/assets/createstyle/uploadimage.css'
export default {
  
    methods:{
        backbtn(){ //执行返回上一个路由；
          this.$router.go(-1);
          
      }
    }
}
</script>

