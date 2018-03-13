<template>
  <div class="home_wrap">
    <img src="@/assets/banner.jpg" alt="" class="home_wrap_banner">
    <div>
    <div class="home_wrap_item" @click="openDetails">
      <h3>下单时间：2017-9-11 12：22：30<span class="waiting">待接单</span></h3>
      <div class="content">
        <router-link to="/details">
          <img src="@/assets/2.jpg" alt="" class="pic">
        </router-link>
        <div>
          <div class="name">商品名称</div>
          <div class="price">预估价格：<span>￥39.9</span></div>
        </div>
      </div>
    </div>
    <div class="home_wrap_item">
      <h3>下单时间：2017-9-11 12：22：30<span class="complete">已派单</span></h3>
      <div class="content">
        <img src="@/assets/2.jpg" alt="" class="pic">
        <div>
          <div class="name">商品名称</div>
          <div class="price">预估价格：<span>￥39.9</span></div>
        </div>
      </div>
    </div>
    <div class="home_wrap_item">
      <h3>下单时间：2017-9-11 12：22：30<span class="already">已接单</span></h3>
      <div class="content">
        <img src="@/assets/2.jpg" alt="" class="pic">
        <div>
          <div class="name">商品名称</div>
          <div class="price">预估价格：<span>￥39.9</span></div>
        </div>
      </div>
    </div>
    </div>

    <!-- 无订单时 -->
    <img src="@/assets/recycling.png" alt="" class="home_wrap_icon">
    <div class="home_wrap_ordername">您还没有进行中的收呗订单</div>
    <div class="home_wrap_btnname">点击下方立即回收按钮，为绿色生活助力吧！</div>

    <img src="@/assets/icon_footer.png" alt="" class="home_wrap_footer_tbg">
    <div class="home_wrap_footer">
      <div class="footer_circle">我要<br/>回收</div>
      <div class="footer_left" @click="openRecords"><img src="@/assets/icon_foot.png" alt=""><span>收呗足迹</span></div>
      <div class="footer_right" @click="openOrders"><img src="@/assets/icon_record.png" alt=""><span>订单记录</span></div>
    </div>
  </div>
</template>

<script>
  import '@/components/details/home.css'
  export default {
    name: "home",
    methods:{
      openDetails(){
        this.$router.push({ path: '/details' })
      },
      openRecords(){
        this.$router.push({ path: '/records' })
      },
      openOrders(){
        this.$router.push({ path: '/orders' })
      },
    }
  }
</script>
