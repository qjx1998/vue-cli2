<template>
  <div id="app">
    <router-link :to="{ path: 'Shop', query: { name,last } }" tag="button">我的商城</router-link>
    <router-link to="About" tag="button">个人中心</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      name: 'Jack',
      last: 'gogogogo,upupup!'
    }
  }
}

</script>

<style>

</style>
