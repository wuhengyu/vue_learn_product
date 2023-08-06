<template>
  <el-button type="text" @click="open">打开消息提示框</el-button>
</template>
<script>
import { ElMessageBox } from "element-plus";
export default {
  name: "this is a MessageBoxView",
  methods: {
    open() {
      ElMessageBox.prompt("确实要删除这个商品么", "提示", {
        confirmButtonText: "按钮名称：确定",
        cancelButtonText: "按钮名称：取消",
        // 校验邮箱格式
        inputPattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/,
        inputErrorMessage: "邮箱格式不正确",
      })
        .then(({ value }) => {
          alert(`你输入的邮箱是：${value}`);
        })
        .catch(() => {
          alert("输入已取消！");
        });
    },
  },
};
</script>