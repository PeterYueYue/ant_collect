import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
// 回收分类
import ClassIfy from '@/components/create/classify.vue'
// 地址选择
import AddressOption from '@/components/create/addressoption.vue'
// 地址选择  区域选择
import addressel from '@/components/create/common/addressel.vue'

import Areaelecte from '@/components/create/common/areaelecte.vue'
import TownSelect from '@/components/create/common/townselect.vue'
import Cellseletion from '@/components/create/common/cellseletion.vue'

// 类型选择
import TypeSelect from '@/components/create/typeselect.vue'
// 类型选择    类型选择
import TypeClass from '@/components/create/common/typeclass.vue'
// 类型选择   年限选择
import TypeYear from '@/components/create/common/typeyear.vue'
// 类型选择   功能状况
import Typestate from '@/components/create/common/typestate.vue'
// 上传图片
import UploadImage from '@/components/create/uploadimage.vue'
// 马上询价
import Estimate from '@/components/create/estimate.vue'
import OrderInfo from '@/components/create/orderInfo.vue'


// wang
import home from '@/components/details/home.vue'
import details from '@/components/details/details.vue'
import orders from '@/components/details/orders.vue'
import records from '@/components/details/records.vue'
import imgView from '@/components/details/imgView.vue'

// wangEnd


// 头部共用


// 测试
import Test from '@/components/create/common/test.vue'
// import app from '@/App.vue'

Vue.use(Router)
// 听不到声音
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'app',
      component: ClassIfy,
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/imgView',
      name: 'imgView',
      component: imgView
    },
    {
      path: '/records',
      name: 'records',
      component: records
    },
    {
      path: '/orders',
      name: 'orders',
      component: orders
    },
    {
      path: '/addressoption',
      name: 'AddressOption',
      component: AddressOption,   
    },
    {
      path: '/addressel',
      name: 'addressel',
      component: addressel,  
      children:[
        {
          path: 'townSelect/:areaItem',
          name: 'TownSelect',
          component: TownSelect,
        },
        {
          path:'areaelecte',
          name: 'Areaelecte',
          component: Areaelecte,
        },
        {
          path:'cellseletion/:itemAreaId',
          name: 'Cellseletion',
          component: Cellseletion,
        }
      ] 
    },
    {
      path: '/addressoption/:id',
      name: 'AddressOption',
      component: AddressOption,   
    },
    {
      path: '/typeSelect/:index',
      name: 'TypeSelect',
      component: TypeSelect,
    },
    {
      path:'/uploadimage',
      name:'UploadImage',
      component:UploadImage

    },
    {
      path:'/estimate',
      name:'Estimate',
      component:Estimate
    },
    {
      path:'/orderInfo',
      name:'OrderInfo',
      component:OrderInfo
    }
    
  ]
})
