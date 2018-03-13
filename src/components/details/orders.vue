<template>
  <div class="orders_wrap">
    <div class="orders_wrap_item">
      <h3>取消时间：2017-9-11 12：22：30<span class="cancel">已取消</span></h3>
      <div class="content">
        <img src="@/assets/2.jpg" alt="" class="pic">
        <div>
          <div class="name">商品名称</div>
          <div class="price">预估价格：<span>￥39.9</span></div>
        </div>
      </div>
    </div>
    <div class="orders_wrap_item">
      <h3>取消时间：2017-9-11 12：22：30<span class="cancel">平台已取消</span></h3>
      <div class="content">
        <img src="@/assets/2.jpg" alt="" class="pic">
         <div>
          <div class="name">商品名称</div>
          <div class="price">预估价格：<span>￥39.9</span></div>
        </div>
      </div>
    </div>
    <div class="orders_wrap_item">
      <h3>取消时间：2017-9-11 12：22：30<span class="succeed">已完成</span></h3>
      <div class="content">
        <img src="@/assets/2.jpg" alt="" class="pic">
         <div>
          <div class="name">商品名称</div>
          <div class="price">预估价格：<span>￥39.9</span></div>
        </div>
      </div>
    </div>
    <div class="orders_wrap_text"><span class="line_lf"></span>没有更多订单了<span class="line_rt"></span></div>
  </div>
</template>

<script>
  import '@/components/details/orders.css'
  export default {

  }
</script>
