<template>
  <div class="index">
    <h1>This is an index page</h1>
  </div>
  <button @click="goHome">
    返回Home
  </button>
</template>
<script>
export default{
  methods:{
    goHome(){
      this.$router.push({
        name:'Home',
        query:{
          ...this.$route.query,
        },
      })
    }
  }
}
</script>