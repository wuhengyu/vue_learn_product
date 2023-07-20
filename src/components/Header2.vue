<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>我是About头部</h1>
<router-link>从头部返回Home</router-link>
</template>
<script>
export default{
  methods:{
    goHome(){
      this.$router.push({
        query:{
          ...this.$route.query,
        },
      })
    }
  }
}
</script>