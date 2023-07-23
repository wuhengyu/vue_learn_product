<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-button type="text" @click="dialogVisible = true"> 打开对话框 </el-button>

  <el-dialog
    v-model="dialogVisible"
    title="这是Dialog组件的标题"
    width="80%"
    center
    :before-close="handleClose"
    draggable
  >
    <!-- <template #defalut> -->
    <!-- 组件的内容定义在名称为default的插槽内 -->
    <el-dialog
      v-model="innerVisible"
      width="30%"
      title="嵌套弹窗"
      append-to-body
    >
    </el-dialog>
    <!-- </template> -->

    <!-- 主题内容直接定义在默认插槽内 -->
    <span> 这里可能是表单，关闭前要留意 </span>
    <template #footer>
      <!-- 尾部内容定义在名称为footer的插槽内 -->
      <span> 这是Dialog组件的尾部 </span>

      <div class="dialog-footer">
        <el-button type="primary" @click="innerVisible = true">
          打开嵌套dialog
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<!-- 定义了一个名为default的组件对象，该对象包含了组件的数据、方法和生命周期钩子等 -->
<script>
import { ElMessage, ElMessageBox } from "element-plus";
export default {
  data() {
    return {
      // 控制对话框的显示和隐藏
      dialogVisible: false,
      innerVisible: false,
    };
  },
  methods: {
    // 关闭对话框
    handleClose(done) {
      ElMessageBox.confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "已取消关闭",
          });
        });
    },
  },
};
</script>