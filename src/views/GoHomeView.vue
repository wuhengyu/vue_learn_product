<template>
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