<template>
  <div>
      <h2>这个是商城</h2>
      <h2>{{ $route.query.name }}</h2>
      <h2>{{ $route.query.last }}</h2>
  </div>
</template>

<script>
export default {
  destroyed(){
    
  }
}
</script>

<style>

</style>