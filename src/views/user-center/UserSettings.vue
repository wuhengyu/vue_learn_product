<!-- eslint-disable vue/multi-word-component-names --> 
<template>
  <h1 style="line-height: 400px;">用户设置内容</h1>
  <el-input
    v-model="input"
    type="password"
    placeholder="Please input password"
    show-password
  />
</template>

<script>
export default {
  data() {
    return {
      input: '',
    }
  },
}
</script>

