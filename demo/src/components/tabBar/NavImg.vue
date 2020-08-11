<template>
  <div class="wrapper">
      <nav-bar>
      <tab-nav query="/Home" fontColor="#F4EA2C">
        <img src="../../assets/img/logo.png" class="navs" slot="inActive">
        <img src="../../assets/img/cart.png" class="navs" slot="active">
        <div class="item" slot="eachItem" >首页</div>
      </tab-nav>
      <tab-nav query="/Category" fontColor="#F4EA2C">
        <img src="../../assets/img/logo.png" class="navs" slot="inActive">
        <img src="../../assets/img/cart.png" class="navs" slot="active">
        <div class="item" slot="eachItem">微淘</div>
      </tab-nav>
      <tab-nav query="/Cart" fontColor="#F4EA2C">
        <img src="../../assets/img/logo.png" class="navs" slot="inActive">
        <img src="../../assets/img/cart.png" class="navs" slot="active">
        <div class="item" slot="eachItem">购物车</div>
      </tab-nav>
      <tab-nav query="/Profile" fontColor="#F4EA2C">
        <img src="../../assets/img/logo.png" class="navs" slot="inActive">
        <img src="../../assets/img/cart.png" class="navs" slot="active">
        <div class="item" slot="eachItem">我的</div>
      </tab-nav>
    </nav-bar>
  </div>  
</template>

<script>
import TabNav from './TabNav'
import NavBar from './NavBar'
export default {
   name: 'NavImg',
   components: { TabNav,NavBar },
}
</script>

<style>

</style>