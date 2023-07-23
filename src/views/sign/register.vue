<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="page flex-center">
    <div class="sign-box">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <h3 class="title">系统注册</h3>
        <el-form-item label="账号" prop="account">
          <el-input v-model="form.account" placeholder="请输入用户名">
          </el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="form.password"
            placeholder="请输入密码"
          >
          </el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="cfpassword">
          <el-input
            type="password"
            v-model="form.cfpassword"
            placeholder="请确认密码"
          >
          </el-input>
        </el-form-item>

        <el-form-item label="" class="register-link">
          <div>
            <el-button type="primary" @click="register" class="sign_button"
              >注册</el-button
            >
          </div>
        </el-form-item>

        <el-form-item label="" class="register-link">
          <div class="register-link__content">
            <router-link to="/login">已有账号，去登录</router-link>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "register",
  data() {
    const validateCfpassword = (rule, value, callback) => {
      if (value !== this.form.cfpassword) {
        callback(new Error("两次密码输入不一致"));
      } else {
        callback();
      }
    };
    return {
      form: {
        account: "",
        password: "",
        cfpassword: "",
      },
      rules: {
        account: [
          // trigger:  ["blur", "change"], 表单项失去焦点时和在表单项的值改变时都进行验证
          {
            required: true,
            message: "请输入用户名",
            trigger: ["blur", "change"],
          },
          // { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' },
          {
            pattern: /^[a-zA-Z0-9_-]{3,20}$/,
            message: "用户名必须是3-20个字母、数字、下划线或减号",
            trigger: ["blur", "change"],
          },
        ],
        password: [
          { required: true, validator: validateCfpassword, trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: ["blur", "change"],
          },
        ],
        cfpassword: [
          { required: true, validator: validateCfpassword, trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },

  methods: {
    register() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 模拟向后台发送注册请求
          const post = (params) => {
            return new Promise((resolve, reject) => {
              const { account, password } = params;
              let db_user = JSON.parse(localStorage.getItem("db_user"));
              if (db_user) {
                db_user = JSON.parse(db_user);
              } else {
                db_user = [];
              }
              if (!db_user.find((v) => v.account === account)) {
                db_user.push({ account, password });
                localStorage.setItem("db_user", JSON.stringify(db_user));
                resolve({ msg: "注册成功" });
              } else {
                reject({ msg: `用户名: 该${account} 已存在` });
              }
            });
          };

          post(this.form)
            .then((res) => {
              alert(
                `${res.msg} 用户名: ${this.form.account}, 密码：${this.form.password}`
              );
              this.$router.push("/");
            })
            .catch((err) => {
              alert(err.msg);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="css">
@import url(./index.css);
</style>

