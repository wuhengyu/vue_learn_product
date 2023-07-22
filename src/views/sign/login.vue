<!-- eslint-disable vue/multi-word-component-names -->
<!-- <template>
  <p ref="p">hello</p>
</template>
<script>
import {ref, onMounted} from 'vue'
export default {
  setup() {
    const p = ref(null)
    onMounted(() => {
      console.log(p.value.innerText)
    })
    return {
      p
    }
  }
}
</script> -->

<template>
  <div class="page flex-center">
    <div class="sian-box">
      <el-form ref="form" :model="form" :rules="rules" label-width="60px">
          <h3 class="title">系统登录</h3>

          <el-form-item label="账号" prop="account">
            <el-input v-model="form.account" placeholder="请输入用户名" prefix-icon="user"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" type="password" placeholder="请输入密码" prefix-icon="lock"></el-input>
          </el-form-item>
          
          <el-form-item label="">
          <div>
          <el-button @click="login" type="primary" class="w100p">登录</el-button>
          </div>
          <div class="txt-r">
            <router-link to="/register">没有账号?去注册</router-link>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default{
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'login',
  data() {
    return {
      form: {
        account: '',
        password: '',
      },
      rules: {
        account: [
          { required: true, message: '请输入用户名', trigger:  ["blur", "change"]},
          {pattern: /^[a-zA-Z0-9_-]{3,20}$/, message: '用户名必须是3-20个字母、数字、下划线或减号', trigger: 'blur'},
        ],
        password: [
          { required: true, message: '请输入密码', trigger:  ["blur", "change"]},
          {pattern: /^[a-zA-Z0-9_-]{3,20}$/, message: '密码必须是3-20个字母、数字、下划线或减号', trigger: 'blur'},
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$router.push('/home');
        } else {
          return false;
        }
      });
    },
  },
};
</script>