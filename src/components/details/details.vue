<template>
  <div class="details_wrap">
    <div class="details_wrap_item">
      <h3>取消时间：2017-9-11 12：22：30<span class="cancel">已取消</span></h3>
      <div class="date">时间：2017-9-11 12：22：30</div>
      <div class="content">
        <img src="@/assets/2.jpg" alt="" class="pic">
        <div>
          <div class="name">商品名称</div>
          <div class="price">预估价格：<span>￥39.9</span></div>
        </div>
      </div>
    </div>
    <div class="details_wrap_time">上门时间：2018.01.24 星期一<span class="btn_cancel" @click="openOrders">取消订单</span></div>
    <div class="details_wrap_reason">
      <!-- 已派单状态才有评价按钮 --> <p class="why">取消原因<span class="btn_view" @click="openEvaluation">评价/查看评价</span></p>
      <!--<p class="answer">该物品估价值较低，暂不收取暂不收取暂不收取暂不收取暂不收取暂不收取暂不收取暂不收取暂不收取暂不收取暂不收取暂不收取暂不收取暂不收取</p>-->
      <!-- 已派单状态才有 --><p class="tel"><img src="@/assets/icon_tel.png" alt="" class="icon_tel">联系电话：13565555555</p>
    </div>
    <div class="details_wrap_info">
      <div class="title">询价信息</div>
      <div class="picture">
        <img src="@/assets/2.jpg" alt="">
        <img src="@/assets/2.jpg" alt="">
        <img src="@/assets/2.jpg" alt="">
      </div>
      <div class="description">回收物描述字数有限制，0~120字描述</div>
      <div class="lable">
        <span>120l-220l双门冰箱</span>
        <span>120l-220l双门冰箱</span>
        <span>120l-220l双门冰箱</span>
      </div>
    </div>
    <div class="details_wrap_belongs">
      <div class="text">本服务由爱回收有限公司提供</div>
      <div class="text">400-8288-999</div>
    </div>
    <!-- 已派单状态才有 --><div class="details_wrap_footbtn" @click="openCode">确认交易</div>
    <!-- 取消理由弹窗 -->
    <div class="details_shadow" v-if="showShadow"></div>
    <div class="details_shadow_box" v-if="showOrders">
      <div class="title">请选择取消订单的理由</div>
      <div class="button_holder">
        <input type="radio" id="radio-1" name="radio" class="regular_radio"/><label for="radio-1"></label>不想卖了<br />
        <input type="radio" id="radio-2" name="radio" class="regular_radio" /><label for="radio-2"></label>信息填写错误<br />
        <input type="radio" id="radio-3" name="radio" class="regular_radio" /><label for="radio-3"></label>估价过低<br />
        <input type="radio" id="radio-4" name="radio" class="regular_radio" /><label for="radio-4"></label>回收员原因<br />
        <input type="radio" id="radio-5" name="radio" class="regular_radio" /><label for="radio-5"></label>其他原因
      </div>
      <div class="button_footer">
        <div class="btn_cancel" @click="closeOrders">取消</div>
        <div class="btn_confirm">确认</div>
      </div>
    </div>
    <!-- 二维码弹窗 -->
    <div class="details_shadow_code" v-if="showCode">
      <img src="@/assets/icon_delete.png" alt="" class="icon_delete" @click="closeCode">
      <div class="code_text">请将交易二维码出示给回收人员</div>
      <img src="@/assets/code.png" alt="" class="pic_code">
    </div>
    <!-- 已完成状态弹窗 -->
    <div class="details_shadow_evaluation" v-if="showEvaluation">
      <div class="title">我们的服务您满意吗？</div>
      <div class="pic">
        <img src="@/assets/icon_star.png" alt="" class="icon_star">
        <img src="@/assets/icon_star.png" alt="" class="icon_star">
        <img src="@/assets/icon_star.png" alt="" class="icon_star">
        <img src="@/assets/icon_star.png" alt="" class="icon_star">
        <img src="@/assets/icon_star_hover.png" alt="" class="icon_star">
      </div>
      <textarea name="" id="" class="text">我们的服务您还满意吗？</textarea>
      <div class="footer_btn" @click="closeEvaluation">提交</div>
    </div>
  </div>
</template>

<script>
  import '@/components/details/details.css'
  export default {
    data(){
      return {
        showShadow: false,
        showOrders: false,
        showEvaluation: false,
        showCode: false,
      }
    },
    methods:{
      openOrders(){
        this.showShadow = true;
        this.showOrders = true;
      },
      closeOrders(){
        this.showShadow = false;
        this.showOrders = false;
      },
      openEvaluation(){
        this.showShadow = true;
        this.showEvaluation = true;
      },
      closeEvaluation(){
        this.showShadow = false;
        this.showEvaluation = false;
      },
      openCode(){
        this.showShadow = true;
        this.showCode = true;
      },
      closeCode(){
        this.showShadow = false;
        this.showCode = false;
      },
    }
  }
</script>
