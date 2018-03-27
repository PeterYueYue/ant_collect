<style>
  body {
    height: auto!important;
  }

  #app {
    display: flex;
    height: 100%;
  }

  h1, h2, h3, h4, h5 {
    font-weight: normal;
  }
</style>

<template>
  <div id="app">
    <router-view></router-view>

    <!-- <class-ify></class-ify>    -->

    <!-- <address-option></address-option> -->
  </div>
</template>

<script>


  import ClassIfy from '@/components/create/classify.vue'
  import AddressOption from '@/components/create/addressoption.vue'
  import '@/assets/common.css'

  export default {
    name: 'App',
    components: {
      ClassIfy,
      AddressOption
    }

  }
</script>


