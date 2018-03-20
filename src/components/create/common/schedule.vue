<template>
  
    <ul class="schedule">
        <li v-for="item,index in pointLength"  :class="{active :  index == fn1()}"></li>
        <!-- <li></li>
        <li></li>
        <li></li> -->
    </ul>

</template>
<script>

import {mapGetters} from 'vuex'

import '@/assets/createstyle/schedule.css'
console.log(mapGetters);


export default {

    data(){
        return{

            pointLength:4
        }
    },
    methods : {
        fn1(){
            return this.$route.params.index-1

            
        }
    },
    
    watch:{
        '$route' : 'fn1'
    }

    
}

</script>


