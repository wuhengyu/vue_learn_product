import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 完整引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 部分导入
// import {
//   ElForm,
//   ElFormItem,
//   ElButton,
//   ElInput,
//   ElRadio,
//   ElRadioGroup,
//   ElCheckbox,
//   ElCheckboxGroup,
//   ElSelect,
//   ElOption,
//   ElSwitch,
//   ElTimePicker,
//   ElDatePicker,
// } from 'element-plus'

// const components = [
//   ElForm,
//   ElFormItem,
//   ElButton,
//   ElInput,
//   ElRadio,
//   ElRadioGroup,
//   ElCheckbox,
//   ElCheckboxGroup,
//   ElSelect,
//   ElOption,
//   ElSwitch,
//   ElTimePicker,
//   ElDatePicker,
// ];

const app = createApp(App);

// 部分导入
// app.use(router).mount('#app')
// components.forEach(component => {
//   app.use(component);
// })

// 完整导入
app.use(router).use(ElementPlus).mount('#app')