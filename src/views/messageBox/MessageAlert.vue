<template>
  <el-button type="text" @click="open">
    Click to open the Message Box
  </el-button>
</template>
<script>
import { ElMessageBox } from "element-plus";
export default {
  name: "this is a MessageBoxView",
  methods: {
    open() {
      // 弹窗内容
      ElMessageBox.alert("这是一段内容", "标题名称", {
        // 按钮名称
        confirmButtonText: "按钮名称：确定",
        callback: (action) => {
          // 打印日志
          console.log("action:", action);
          // 响应info消息
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