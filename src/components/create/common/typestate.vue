<template>
<div class="classchange">
    <h3 class="titlename">功能状况</h3>
    <ul class="class_change_list clearfix">
        <li class="fl">
            <a href="">制冷正常</a>
        </li>
        <li class="fl">
            <a href="">制冷效果差</a>
        </li>
        <li class="fl ">
            <!-- <a class="active" href="">不制冷/不启动</a> -->
            <router-link class="active" to="/uploadimage">不制冷/不启动</router-link>
        </li>
        
    </ul>
</div>
</template>
<script>
export default {
  
    created(){

        const {index}  = this.$route.params;
        // this.$store.commit("changePointIndex",index)

        
    }
}
</script>

