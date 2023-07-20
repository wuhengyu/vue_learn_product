<!-- router-link标签跳转 -->
<template>
  <div class="WuHengyu1">
    <h1>wuhengyu1</h1>
  </div>
  <div>
    <el-button type="primary" @click="goWuhengyu2">跳转wuhengyu2</el-button>
    <!-- <button @click="goWuhengyu2">跳转wuhengyu2</button> -->
  </div>
</template>
<script>
export default{
  methods:{
    goWuhengyu2(){
      this.$router.push({path:'/wuhengyu2'})
    }
  }
}
</script>