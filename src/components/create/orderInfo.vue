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
                <input @blur="isName"  v-model="nameValue"   placeholder="请输入联系人姓名"  type="text" value="nameValue" >
            </li>
             <li class="item ">
                <strong >电话</strong>
                <input  type="text"  @blur="isPhoneNumber"  v-model="phoneNumber" placeholder="请输入手机号码" value="phoneNumber" >
           </li> 
            <li class="item ">
                <strong >地址</strong>
                <!-- <input  type="text" value="浦东新区 北蔡镇 永安小区" > -->
                <span>
                    {{selectedInfo.areaItem.areaName+"&nbsp"+selectedInfo.subdistyictItem.areaName}}</br>
                    {{selectedInfo.cellseletionItem.address+"&nbsp"+selectedInfo.cellseletionItem.name}}

                </span>
            </li>
            <li class="item ">
                <strong >门牌号</strong>
                <input  type="text"   placeholder="例：5号楼203室"  value="" >
            </li>
        </ul>
    </div>
    <div class="collectTimeAndPrice">
        <div class="pickUp ">
            <strong>上门时间：</strong>
            <time>{{time}}</time>
            <div  @click="setTime" class="dataBlock">
                <a href="javaScript:;">  
                </a>
            </div>

        </div>
        
        <!-- <yd-cell-group>
            <yd-cell-item arrow>
                <span slot="left">上门时间：</span>
                <yd-datetime type="datetime" v-model="datetime5" slot="right"></yd-datetime>
            </yd-cell-item>
        </yd-cell-group> -->

        
        
            
       
         
        <div class="estimatePrice clearfix">
            <strong class="fl">回收估计</strong>
            <span class="fr">￥{{futurePrice}}</span>
        </div>
        
    </div>
    <div class="information">实际成交价格最终验机结果为准</div>
    <div class="nextbutton  ">
        <!-- <a  v-if="!isEnter"   style="background-color:#bfc5c8;"   href="javascript:;">提交订单</a> -->
        <router-link  to="/home" >提交订单</router-link>
    </div>
    <div class="information">提交订单后将有售后人员与您电话沟通，请保持手机畅通</div>
    <div class="bottomInformation">
        <div>本服务有爱回收有限公司提供</div>
        <div>400-8288-999</div>
    </div>
  </div>
</template>

<style>
/* .yd-datetime-item-content span{
    font-size: .3rem;
    height: 76px;
}
.yd-datetime-item-content span{
    height: 76px;
    

} */
</style>


<script>


import '@/assets/createstyle/tool.css'

import '@/assets/createstyle/orderInfo.css'
import { mapGetters } from 'vuex';
// import DataTime from '@/components/create/common/dataTime.vue'
export default {
    data () {
        return {
            nameValue:'',
            phoneNumber: '',
            datetime5: '2018-01-11 06:06',
            time :'请选择上门回收时间'
            
        }
    },
    computed: mapGetters({
        futurePrice         :   'futurePrice',      //预估价格
        appointmentTime     :   'appointmentTime',  //上门预约时间
        selectedInfo        :   'selectedInfo'      //用来存储 地址选择 已选择信息

    }),
    methods:{
        backbtn(){
            this.$router.go(-1);
        },
        setTime(){

            var antThis = this;
            
                
            ap.datePicker({
                formate: 'yyyy-MM-dd HH:mm:ss',
                currentDate: '2018-03-25 15:11:11',
                startDate: '2018-03-01 11:11:11',
                endDate: '2018-12-30 11:11:11'
            }, function(res) {

                antThis.time = res.date;
                alert(antThis.time);

            

            });

            


        },
        isName(){
            var reg = RegExp();
            var str = this.nameValue;               
            reg=/^([\u4e00-\u9fa5]){2,7}$/;       //只能是中文，长度为2-7位
            if(!reg.test(str)){       
                    alert("对不起,您输入正确的名字格式!");//请将“字符串类型”要换成你要验证的那个属性名称！   
                 
            }       
        },
        isPhoneNumber(){
            var reg = RegExp();
            reg=/^[1][3,4,5,7,8][0-9]{9}$/;  
            if (!reg.test(this.phoneNumber)) {  
                    alert("请输入正确的手机号")
                } else {  
                    
                }

            }
       
    }
   
  
}
</script>



