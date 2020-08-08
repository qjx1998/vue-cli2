<template>
  <div id="app">
    <router-view/>
    <nav-bar>
      <tab-nav query="/Home">
        <img src="./assets/img/logo.png" class="navs" slot="inActive">
        <img src="./assets/img/cart.png" class="navs" slot="active">
        <div class="item" slot="eachItem" >首页</div>
      </tab-nav>
      <tab-nav query="/Category">
        <img src="./assets/img/logo.png" class="navs" slot="inActive">
        <img src="./assets/img/cart.png" class="navs" slot="active">
        <div class="item" slot="eachItem">微淘</div>
      </tab-nav>
      <tab-nav query="/Cart">
        <img src="./assets/img/logo.png" class="navs" slot="inActive">
        <img src="./assets/img/cart.png" class="navs" slot="active">
        <div class="item" slot="eachItem">购物车</div>
      </tab-nav>
      <tab-nav query="/Profile">
        <img src="./assets/img/logo.png" class="navs" slot="inActive">
        <img src="./assets/img/cart.png" class="navs" slot="active">
        <div class="item" slot="eachItem">我的</div>
      </tab-nav>
    </nav-bar>
  </div>
</template>

<script>
import TabNav from './components/tabBar/TabNav'
import NavBar from './components/tabBar/NavBar'
export default {
  name: 'App',
  components: { TabNav,NavBar },
  data(){
    return{
      
    }
  }
}

</script>

<style>
@import './assets/css/main.css'
</style>
