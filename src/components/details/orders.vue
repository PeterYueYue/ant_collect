<template>
  <div class="orders_wrap">
    <router-link to="/details">
      <div class="orders_wrap_item" v-for="item of ordersList">
        <div class="time">{{item.statusDatePage}}<span :class="item.statusClass">{{item.statusPage}}</span></div>
        <div class="content">
          <img :src="item.orderPic.picUrl" alt="" class="pic">
          <div>
            <div class="name">{{item.category.name}}</div>
            <div class="price">预估价格：<span>￥{{item.price}}</span></div>
          </div>
        </div>
      </div>
    </router-link>
    <div class="orders_wrap_text"><span class="line_lf"></span>没有更多订单了<span class="line_rt"></span></div>
  </div>
</template>

<script>
  import '@/components/details/orders.css'
  import api from '@/api/api.js'

  export default {
    data() {
      return {
        ordersList:{},
      }
    },
    mounted() {
      //获取数据
      api.getOrders().then((res) => {
        console.log(res.data.data.listOrder);
        res.data.data.listOrder.map(items => {
          const status = items.statusPage;
          switch (status) {
            case '已接单':
              items.statusClass= 'already';
              break;
            case '已派单':
              items.statusClass= 'complete';
              break;
            case '待接单':
              items.statusClass= 'waiting';
              break;
            case '已取消':
              items.statusClass= 'cancel';
              break;
            case '已完成':
              items.statusClass= 'succeed';
              break;
            default:
              break;
          }
        });
          this.ordersList = res.data.data.listOrder;
      }).catch((erro) => {
        console.log(erro)
      })
    }
  }
</script>
