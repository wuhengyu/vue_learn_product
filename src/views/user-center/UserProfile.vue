<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1 style="line-height: 400px;">个人信息内容</h1>
  <!-- label-width="100px" label-position="right" -->
  <el-form :model="form">
    <el-form-item label="活动名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="活动区域">
      <el-select v-model="form.region" placeholder="选择区域" size="small">
        <el-option label="上海" value="shanghai"></el-option>
        <el-option label="北京" value="beijing"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>

    <el-form-item label="活动类型">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="线上活动" name="type"></el-checkbox>
        <el-checkbox label="促销活动" name="type"></el-checkbox>
        <el-checkbox label="线下活动" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>

      <el-form-item>
        <el-button type="primary">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>

  </el-form>

</template>

<script>
export default {
  data() {
    return {
      form: {
        name: 'zhangsan',
        region: '',
        date1: '',
        date2: '',
        type: [],
        resource: '',
        desc: '',
        live: false,
      },
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
  },
}
</script>
