<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
      bgC: {
          type: String,
          default: '#f4f4f4'
      }
  }
}
</script>

<style scoped>
.wrapper{
    display: flex;
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 0px;
    height: 49px;
    background: #f4f4f4;   
}
.wrapper div{
    flex: 1;
}
</style>