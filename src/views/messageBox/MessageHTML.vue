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
      ElMessageBox.alert(
        "<strong style='color: red'>proxy is HTML</strong>",
        "HTML String",
        {
          dangerouslyUseHTMLString: true,
        }
      );
    },
  },
};
</script>