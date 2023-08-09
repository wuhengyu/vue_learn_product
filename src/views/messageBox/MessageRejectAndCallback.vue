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
        // 默认情况下，当用户触发取消（单击“取消”按钮）和触发关闭（单击“关闭”按钮或遮罩层，按下Esc键）时，Promise的reject回调和callback回调的参数均为'cancel'
        // 如果将distinguishCancelAndClose属性设置为true，则上述两种行为的参数分别为'cancel'和'close'
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