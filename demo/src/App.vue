<template>
  <div id="app">
    <router-view/>
    <nav-img />
  </div>
</template>

<script>
import NavImg from './components/tabBar/NavImg'
export default {
  name: 'App',
  components: { NavImg },
  data(){
    return{
      
    }
  }
}

</script>

<style>
@import './assets/css/main.css'
</style>
