<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="containter">
      <div id="siderbar">
        <ul>
          <li>
            <router-link to="/user/profile">个人信息</router-link>
          </li>
          <li>
            <router-link to="/user/settings">用户设置</router-link>
          </li>
        </ul>
      </div>
      <div class="main-body">
          <router-view></router-view>
      </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="css">
.containter {
  display: flex;
  height: 100%;
}
#siderbar {
  width: 200px;
  height: 100%;
  background-color: #000;
}
#siderbar li {
  list-style: none;
  padding: 0;
  margin: 0;
} 
#sidebar li a {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #fff;
  height: 40px;
}
#sidebar li a:router-link-active {
  background-color: #f47c00;
} 
.main-body {
  flex: 1;
  height: 100%;
  background: #f5f5f5;
}    
</style>