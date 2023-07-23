<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-button type="text" @click="dialogVisible = true"> 打开对话框 </el-button>

  <el-dialog v-model="dialogVisible" title="这是Dialog组件的标题">
    <span> 这是Dialog组件的内容 </span>
    <template #footer>
      <span> 这是Dialog组件的尾部 </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
};
</script>