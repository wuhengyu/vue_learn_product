<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1 style="line-height: 400px;">个人信息内容</h1>
  <!-- label-width="100px" label-position="right" -->
  <el-form :model="form" :rules="rules" ref="form" label-width="100px">
    <el-form-item label="活动名称" prop="name" >
      <el-input v-model="form.name" style="width: 50%;" placeholder="活动名称"></el-input>
    </el-form-item>

    <el-form-item label="活动区域" prop="region">
      <el-select v-model="form.region" placeholder="选择区域" size="small">
        <el-option label="上海" value="shanghai"></el-option>
        <el-option label="北京" value="beijing"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="活动时间" required prop="date1">
      <!-- <el-col :span="11"> -->
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 25%;" ></el-date-picker>
      <!-- </el-col> -->
      <!-- <el-col class="line" :span="2">-</el-col> -->
      <!-- <el-col :span="11"> -->
        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 50%;"></el-time-picker>
      <!-- </el-col> -->
    </el-form-item>

    <el-form-item label="活动类型" prop="type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="线上活动" name="type"></el-checkbox>
        <el-checkbox label="促销活动" name="type"></el-checkbox>
        <el-checkbox label="线下活动" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="特殊资源" prop="resource">
      <el-radio-group v-model="form.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="备注" prop="desc">
      <el-input v-model="form.desc" type="textarea"></el-input>
    </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">确定</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>

  </el-form>

</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        type: [],
        resource: '',
        desc: '',
        live: false,
      },
      rules:{
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
          { pattern: /^[a-zA-Z0-9_-]{3,5}$/, message: '只能是数字字母下划线', trigger: 'blur'}
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' },
          {
            validator: (rule, value, callback) => {
              if (value.getTime() < Date.now()) {
                callback(new Error('不能小于当前时间'));
              } else {
                callback();
              }
            }
          }
        
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ],
        live: [
          { required: true, message: '请选择直播平台', trigger: 'change' }
        ]

      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
