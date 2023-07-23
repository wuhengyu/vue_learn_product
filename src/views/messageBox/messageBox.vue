<template>
  <el-button @click="open"> 打开消息提示框 </el-button>
</template>

<script>
import { ElMessageBox } from "element-plus";
export default {
  name: "this is a MessageBoxView",
  methods: {
    open() {
      // success消息提示
      this.$message({
        message: "这是一条success消息提示",
        type: "success",
      });

      // info消息提示
      this.$message({
        message: "这是一条info消息提示",
        type: "info",
      });

      // error 消息提示
      this.$message({
        message: "这是一条error消息提示",
        type: "error",
      });

      ElMessageBox.alert("这是一段内容", "标题名称", {
        confirmButtonText: "按钮名称：确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `这是一个action, 名字叫: ${action}`,
          });
        },
      });
    },
  },
};
</script>