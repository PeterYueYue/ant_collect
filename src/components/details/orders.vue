<template>
  <div class="orders_wrap">
    <router-link to="/details">
      <div class="orders_wrap_item">
        <div class="time">取消时间：2017-9-11 12：22：30<span class="cancel">已取消</span></div>
        <div class="content">
          <img src="@/assets/2.jpg" alt="" class="pic">
          <div>
            <div class="name">商品名称</div>
            <div class="price">预估价格：<span>￥39.9</span></div>
          </div>
        </div>
      </div>
    </router-link>
    <div class="orders_wrap_item">
      <div class="time">取消时间：2017-9-11 12：22：30<span class="cancel">平台已取消</span></div>
      <div class="content">
        <img src="@/assets/2.jpg" alt="" class="pic">
         <div>
          <div class="name">商品名称</div>
          <div class="price">预估价格：<span>￥39.9</span></div>
        </div>
      </div>
    </div>
    <div class="orders_wrap_item">
      <div class="time">取消时间：2017-9-11 12：22：30<span class="succeed">已完成</span></div>
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
