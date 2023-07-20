<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header1">
    <h1>我是Home头部</h1>
  <router-link to="/about">go to the about</router-link>
  </div>
  <div>
    <!-- <button class="my-button" @click="goWuhengyu1">跳转wuhengyu1</button> -->
    <el-button  type="primary" @click="goWuhengyu1">跳转wuhengyu1</el-button>
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
.header1 {
  padding: 30px;
}

.header1 a {
  font-weight: bold;
  color: #2c3e50;
}

.header1 a.router-link-exact-active {
  color: #42b983;
}

.header1 {
  padding: 30px;
}

.header1 a {
  font-weight: bold;
  color: #2c3e50;
}

.header1 a.router-link-exact-active {
  color: #42b983;
}

.my-button {
  background-color: #4CAF50; /* 设置背景色 */
  border: none; /* 去掉边框 */
  color: white; /* 设置字体颜色 */
  padding: 15px 32px; /* 按钮内边距 */
  text-align: center; /* 文字居中 */
  text-decoration: none; /* 去掉下划线 */
  display: inline-block; /* 设置为行内块级元素 */
  font-size: 16px; /* 字体大小 */
  margin: 4px 2px; /* 按钮外边距 */
  cursor: pointer; /* 鼠标光标样式 */
  border-radius: 10px; /* 圆角半径 */
}
</style>