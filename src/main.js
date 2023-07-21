import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {
  ElForm,
  ElFormItem,
  ElButton,
  ElInput,
  ElRadio,
  ElRadioGroup,
  ElCheckbox,
  ElCheckboxGroup,
  ElSelect,
  ElOption,
  ElSwitch,
  ElTimePicker,
  ElDatePicker,
} from 'element-plus'

const components = [
  ElForm,
  ElFormItem,
  ElButton,
  ElInput,
  ElRadio,
  ElRadioGroup,
  ElCheckbox,
  ElCheckboxGroup,
  ElSelect,
  ElOption,
  ElSwitch,
  ElTimePicker,
  ElDatePicker,
];

const app = createApp(App);

app.use(router).mount('#app')

components.forEach(component => {
  app.use(component);
})
