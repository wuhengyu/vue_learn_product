<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>我是Home头部</h1>
  <router-link to="/about">go to the about</router-link>
  <br>
  <button @click="goWuhengyu1">跳转wuhengyu1</button>
</template>
<script>
export default{
  methods:{
    goWuhengyu1(){
      this.$router.push({path:'/wuhengyu1'})
    }
  }
}
</script>