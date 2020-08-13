<template>
  <div>
   <h1>my is home</h1>    
  </div>  
</template>

<script>
export default {
  name: 'Home',
  methods:{
    getData(){
      new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve('hahhah');
        }, 1000);
      }).then( res => {
        console.log(res);
      })
    }
  },
  created(){
    this.getData()
     
  }
}
</script>

<style>

</style>