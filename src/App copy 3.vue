<template>
  <!-- 用来放置各路由对应的组件（页面） -->
  <router-view></router-view>
</template>
<!-- 登录注册 -->
<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
html,
body,
ul,
h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.register-link .el-form-item__content {
  display: flex;
  justify-content: right;
}
</style>
