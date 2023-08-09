<template>
  <el-button :plain="true" @click="open1">success</el-button>
  <el-button :plain="true" @click="open2">warning</el-button>
  <el-button :plain="true" @click="open3">message</el-button>
  <el-button :plain="true" @click="open4">error</el-button>
</template>
<script>
import { ElMessage } from "element-plus";
export default {
  setup() {
    const open1 = () => {
      ElMessage({
        // title: "success",
        message: "This is a success message",
        type: "success",
      });
    };
    const open2 = () => {
      ElMessage({
        title: "warning",
        message: "This is a warning message",
        type: "warning",
      });
    };
    const open3 = () => {
      ElMessage({
        title: "message",
        message: "This is a message message",
        type: "message",
      });
    };
    const open4 = () => {
      ElMessage({
        title: "error",
        message: "This is a error message",
        type: "error",
      });
    };
    return {
      open1,
      open2,
      open3,
      open4,
    };
  },
};
</script>