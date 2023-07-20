<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
<<<<<<< HEAD
    <router-link to="/wuhengyu1">点我跳转1</router-link> |
    <router-link to="/wuhengyu2">点我跳转2</router-link>
  </nav>
  <router-view/>
=======
    <router-link to="/index">Mac</router-link> |
    <router-link to="/gohome">gohome</router-link> |
  </nav>
  <div>
    <router-view name="top"></router-view>
    <router-view></router-view>
  </div>
>>>>>>> 2197ae4b0a9961105719965c2322d1451258fd5c
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
