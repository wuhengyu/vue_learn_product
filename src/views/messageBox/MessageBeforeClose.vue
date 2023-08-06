<template>
  <el-button type="text" @click="open">
    Click to open the Message Box
  </el-button>
</template>
<script>
import { ElMessageBox } from "element-plus";
import { h } from "vue";
export default {
  name: "this is a MessageBoxView",
  methods: {
    open() {
      ElMessageBox({
        title: "Message",
        // message: h("p", null, "This is a message box"),
        message: h("p", [
          h("span", null, "This is a message box "),
          h("i", { style: "color:teal" }, "VNode"),
        ]),

        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "Loading...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        },
      }).then((action) => {
        alert(`action: ${action}`);
      });
    },
  },
};
</script>