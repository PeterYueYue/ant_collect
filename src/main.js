// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import axios from 'axios'
import YDUI from 'vue-ydui';
import {DateTime} from 'vue-ydui/dist/lib.rem/datetime';
import 'vue-ydui/dist/ydui.rem.css';
import 'vue-ydui/dist/ydui.base.css';
import 'iview/dist/styles/iview.css';
Vue.use(YDUI);
Vue.use(iView);
// Vue.use(axios);


Vue.component(DateTime.name, DateTime);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
