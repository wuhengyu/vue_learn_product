<template>
  <el-button type="text" @click="open">
    Click to open the Message Box
  </el-button>
</template>
<script>
import { ElMessageBox } from "element-plus";
export default {
  methods: {
    open() {
      ElMessageBox.confirm("您有未保存的更改，是否继续？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        distinguishCancelAndClose: true,
        draggable: true, // 可拖拽
      })
        .then(() => {
          alert("已保存更改");
        })
        .catch((action) => {
          alert(action === "cancel" ? "已取消操作" : "已关闭窗口");
        });
    },
  },
};
</script>