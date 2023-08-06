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
      ElMessageBox.confirm("确实要删除这个商品么", "提示", {
        confirmButtonText: "按钮名称：确定",
        cancelButtonText: "按钮名称：取消",
        type: "warning",
      })
        .then(() => {
          alert("删除成功！");
        })
        .catch(() => {
          alert("取消删除！");
        });
    },
  },
};
</script>