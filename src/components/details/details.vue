<template>
  <imgView v-if="showImgView" :picUrl="picUrl" @toggleImgView="toggleImgView"></imgView>
  <div class="details_wrap" v-else>
    <div class="details_wrap_item">
      <div class="time">订单号：{{detailsList.orderNo}}<span
        :class="detailsList.statusClass">{{detailsList.statusPage}}</span></div>
      <div class="date">时间：{{detailsList.createDatePage}}</div>
      <div class="content">
        <img :src="detailsList.category?detailsList.category.icon:''" alt="" class="pic">
        <div>
          <div class="name">{{detailsList.category ? detailsList.category.name : ''}}</div>
          <div class="price">预估价格：<span>￥{{detailsList.price}}</span></div>
        </div>
      </div>
    </div>
    <div class="details_wrap_time">{{detailsList.arrivalTimePage}}<span class="btn_cancel" @click="openOrders"
                                                                        v-show="detailsList.status!=='COMPLETE'&&detailsList.status!=='CANCEL'&&detailsList.status!=='REJECTED'">取消订单</span>
    </div>
    <!-- 待接单状态无此div -->
    <!-- 已取消 -->
    <div class="details_wrap_reason" v-show="detailsList.status=='CANCEL'||detailsList.status=='REJECTED'">
      <div class="why">取消原因</div>
      <div class="answer">{{detailsList.cancelReason}}</div>
    </div>
    <!-- 已完成，已派单 -->
    <div class="details_wrap_reason" v-show="detailsList.status=='COMPLETE'||detailsList.status=='TOSEND'">
      <div class="why">回收人员{{detailsList.recyclerId}}号<span class="btn_view" @click="openEvaluation"
                                                            v-show="detailsList.status=='COMPLETE'">{{detailsList.isEvaluated == '1' ? '查看评价' : '评价'}}</span>
      </div>
      <a href="tel:13828172679" class="tel"><img src="@/assets/icon_tel.png" alt=""
                                                 class="icon_tel">联系电话：{{detailsList.tel}}</a>
    </div>
    <!-- 已接单 -->
    <div class="details_wrap_reason" v-show="detailsList.status=='ALREADY'">
      <div class="why">派单详情</div>
      <div class="answer">本订单已由爱回收有限公司接单，工作人员将在1-3个工作日内与您联系，请保持电话畅通</div>
    </div>
    <div class="details_wrap_info">
      <div class="title">询价信息</div>
      <div class="picture">
        <img :src="pic.picUrl" alt="" v-for="pic in detailsPic" @click="toggleImgView(true)">
      </div>
      <div class="description">{{detailsList.cancelReason}}</div>
      <div class="lable">
        <span v-for="des in detailsDes">{{des.categoryAttrOpptionName}}</span>
      </div>
    </div>
    <div class="details_wrap_belongs">
      <div class="text">本服务由爱回收有限公司提供</div>
      <div class="text">400-8288-999</div>
    </div>
    <!-- 已派单状态才有 -->
    <div class="details_wrap_footbtn" @click="openCode" v-show="detailsList.status=='TOSEND'">确认交易</div>
    <div class="details_shadow" v-if="showShadow"></div>
    <!-- 取消理由弹窗 -->
    <div class="details_shadow_box" v-if="showOrders">
      <div class="title">请选择取消订单的理由</div>
      <div class="button_holder">
        <input type="radio" id="radio-1" name="radio" class="regular_radio" value="不想买了" v-model="cancelReason"/><label
        for="radio-1"><i></i>不想买了</label>
        <input type="radio" id="radio-2" name="radio" class="regular_radio" value="信息填写错误"
               v-model="cancelReason"/><label for="radio-2"><i></i>信息填写错误</label>
        <input type="radio" id="radio-3" name="radio" class="regular_radio" value="估价过低" v-model="cancelReason"/><label
        for="radio-3"><i></i>估价过低</label>
        <input type="radio" id="radio-4" name="radio" class="regular_radio" value="回收员原因" v-model="cancelReason"/><label
        for="radio-4"><i></i>回收员原因</label>
        <input type="radio" id="radio-5" name="radio" class="regular_radio" value="其他原因" v-model="cancelReason"/><label
        for="radio-5"><i></i>其他原因</label>
      </div>
      <div class="button_footer">
        <div class="btn_cancel" @click="closeOrders">取消</div>
        <div class="btn_confirm" @click="submitCancelOrders">确认</div>
      </div>
    </div>
    <!-- 取消成功弹窗 -->
    <div class="details_cancelSucceed_box" v-if="showCancel">取消成功</div>
    <!-- 二维码弹窗 -->
    <div class="details_shadow_code" v-if="showCode">
      <img src="@/assets/icon_delete.png" alt="" class="icon_delete" @click="closeCode">
      <div class="code_text">请将交易二维码出示给回收人员</div>
      <img src="@/assets/code.png" alt="" class="pic_code">
    </div>
    <!-- 已完成状态弹窗 -->
    <div class="details_shadow_evaluation" v-if="showEvaluation">
      <div class="title">我们的服务您满意吗？</div>
      <div class="evaStar">
        <ul class="star">
          <li v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" @click="stars(index)"
              track-by="index"></li>
        </ul>
      </div>
      <textarea name="" id="" class="text" v-model="evaluateText" :disabled="detailsList.isEvaluated=='1'"
                placeholder="我们的服务您还满意吗？"></textarea>
      <div class="footer_btn" @click="closeEvaluation" v-show="detailsList.isEvaluated == '1'">关闭</div>
      <div class="footer_btn" @click="setEvaluate" v-show="detailsList.isEvaluated == '0'">提交</div>
    </div>
  </div>
</template>

<script>
  import '@/components/details/details.css'
  import api from '@/api/api.js'
  import imgView from '@/components/details/imgView.vue'

  export default {
    data() {
      return {
        showShadow: false,
        showOrders: false,
        showEvaluation: false,
        showCode: false,
        showCancel: false,
        score: 5,
        detailsList: {},
        detailsPic: {},
        detailsDes: {},
        id: this.$route.query.id,
        cancelReason: '不想买了',
        evaluateText: '',
        showImgView: false,
        picUrl: []
      }
    },
    mounted() {
      //获取数据
      this.getData();
      //获取评价
      this.getEvaluate();
    },
    components: {
      imgView
    },
    computed: { //计算属性
      itemClasses() {
        var result = []; // 返回的是一个数组,用来遍历输出星星
        var score = Math.floor(this.score * 2) / 2; // 计算所有星星的数量
        var hasDecimal = score % 1 !== 0; // 非整数星星判断
        var integer = Math.floor(score); // 整数星星判断
        for (var i = 0; i < integer; i++) { // 整数星星使用on
          result.push("on"); // 一个整数星星就push一个CLS_ON到数组
        }
        if (hasDecimal) { // 非整数星星使用half
          result.push("half"); // 类似
        }
        while (result.length < 5) {// 余下的用无星星补全,使用off
          result.push("off");
        }
        return result;
      }
    },
    methods: {
      getData() {
        api.getDetails({
          "app_key": "app_id_1",
          "data": {
            "id": this.id,
            "isEvaluated": "0",
            "status": 0
          },
        }).then((res) => {
          var status = res.data.order.statusPage;
          this.picUrl = res.data.orderPicList;
          switch (status) {
            case '已接单':
              res.data.order.statusClass = 'succeed';
              break;
            case '已派单':
              res.data.order.statusClass = 'complete';
              break;
            case '待接单':
              res.data.order.statusClass = 'waiting';
              break;
            case '已取消':
              res.data.order.statusClass = 'cancel';
              break;
            case '平台已取消':
              res.data.order.statusClass = 'cancel';
              break;
            case '已完成':
              res.data.order.statusClass = 'succeed';
              break;
            default:
              break;
          }
          this.detailsList = res.data.order;
          this.detailsPic = res.data.orderPicList;
          this.detailsDes = res.data.OrderItemList;
        }).catch((error) => {
          console.log(error)
        })
      },
      openOrders() {
        this.showShadow = true;
        this.showOrders = true;
        document.querySelector('.details_wrap').style.overflow = 'hidden';
      },
      closeOrders() {
        this.showShadow = false;
        this.showOrders = false;
        document.querySelector('.details_wrap').style.overflow = 'auto';
      },
      openEvaluation() {
        this.showShadow = true;
        this.showEvaluation = true;
        document.querySelector('.details_wrap').style.overflow = 'hidden';
      },
      closeEvaluation() {
        if ('detailsList.isEvaluated=="1"') {
          this.showShadow = false;
          this.showEvaluation = false;
          document.querySelector('.details_wrap').style.overflow = 'auto';
          return
        }
        this.setEvaluate();
        this.showShadow = false;
        this.showEvaluation = false;
        document.querySelector('.details_wrap').style.overflow = 'auto';
      },
      openCode() {
        this.showShadow = true;
        this.showCode = true;
        document.querySelector('.details_wrap').style.overflow = 'hidden';
      },
      closeCode() {
        this.showShadow = false;
        this.showCode = false;
        document.querySelector('.details_wrap').style.overflow = 'auto';
      },
      stars(index) {
        this.score = index + 1
      },
      timedMsg() {
        setTimeout(() => {
          this.showCancel = false;
          this.showShadow = false;
          document.querySelector('.details_wrap').style.overflow = 'auto';
          this.$router.push({
            path: '/orders'
          })
        }, 1000);
      },
      submitCancelOrders() {
        api.cancelOrders({
          "app_key": "app_id_1",
          "data": {
            "id": this.id,
            "cancelReason": this.cancelReason,
            "isEvaluated": "0"
          },
        }).then((res) => {
          console.log(res.data);
          this.showOrders = false;
          this.showCancel = true;
          this.timedMsg();
        }).catch((error) => {
          console.log(error)
        })
      },
      getEvaluate() {
        api.getEvaluate({
          "app_key": "app_id_1",
          "data": {
            "id": this.id,
          },
        }).then((res) => {
          console.log(res);
          if (res.data) {
            this.score = res.data.score;
            this.evaluateText = res.data.content;
          } else {
          }
        }).catch((error) => {
          console.log(error)
        })
      },
      setEvaluate() {
        api.setEvaluate({
          "app_key": "app_id_1",
          "data": {
            "recyclerId": 0,
            "orderId": this.id,
            "score": this.score,
            "content": this.evaluateText,
            "memberId": 0
          },
        }).then((res) => {
          this.$router.push({
                path: '/orders'
              })
          // if (res.status=="success") {
          //   this.$router.push({
          //     path: '/orders'
          //   })
          //   this.getData();
          // }
        }).catch((error) => {
          console.log(error)
        })
      },
      toggleImgView(v) {
        this.showImgView = v
      }
    }
  }
</script>
