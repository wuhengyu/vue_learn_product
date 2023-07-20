<!-- router-link标签跳转 -->
<template>
  <div class="WuHengYu2">
    <h1>wuhengyu2</h1>
  </div>
  <div>
    <el-button type="primary" @click="goWuhengyu1">跳转wuhengyu1</el-button>
    <!-- <button @click="goWuhengyu1">跳转wuhengyu1</button> -->
  </div>
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
<style>
.WuHengYu2{
  font-size: 20px;
}
</style>