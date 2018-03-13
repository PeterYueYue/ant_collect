<template>
  <div class="orderinfo">
    <header class="head clearfix">
        <div @click="backbtn()" class="fl">
            <span class="fl headback"></span>
            <span class="fl">返回</span>
        </div>
        <h3 class="fl">订单详情</h3>
    </header>
    <div class="userInfoBox">
        <ul class="userInfo">
            <li class="item ">
                <strong >姓名</strong>
                <input  type="text" value="请输入联系人姓名" >
            </li>
            <li class="item ">
                <strong >电话</strong>
                <input  type="text" value="请输入手机号码" >
            </li>
            <li class="item ">
                <strong >地址</strong>
                <input  type="text" value="浦东新区 北蔡镇 永安小区" >
            </li>
            <li class="item ">
                <strong >门牌号</strong>
                <input  type="text" value="例：5号楼203室" >
            </li>
        </ul>
    </div>
    <div class="collectTimeAndPrice">
        <div class="pickUp ">
            <strong>上门时间：</strong>
            <time>2018.1.23</time>
            <span>上午</span>
            <div class="dataBlock">
                <a href="">
                   
                </a>
                 <!-- <data-time></data-time> -->
            </div>
        </div>
        <div class="estimatePrice clearfix">
            <strong class="fl">回收估计</strong>
            <span class="fr">￥40.00</span>
        </div>
    </div>
    <div class="information">实际成交价格最终验机结果为准</div>
    <div class="nextbutton  ">
        <router-link  to="" >提交订单</router-link>
    </div>
    <div class="information">提交订单后将有售后人员与您电话沟通，请保持手机畅通</div>
    <div class="bottomInformation">
        <div>本服务有爱回收有限公司提供</div>
        <div>400-8288-999</div>
    </div>
  </div>
</template>
<script>
import '@/assets/createstyle/tool.css'

import '@/assets/createstyle/orderInfo.css'
import DataTime from '@/components/create/common/dataTime.vue'
export default {
    data () {
            return {
                open: false,
                value3: ''
            }
        },
    methods:{
        backbtn(){

            this.$router.go(-1);
        },
        handleClick () {
            this.open = !this.open;
        },
        handleChange (date) {
            this.value3 = date;
        },
        handleClear () {
            this.open = false;
        },
        handleOk () {
            this.open = false;
        }
    },
    components:{
        DataTime
    }
  
}
</script>

