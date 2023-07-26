import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// 引入阿里图标库
import "@/assets/iconfont/iconfont.css";
import "@/assets/iconfont/iconfont.js";
//字体库
import "@/assets/fontfamily/font.css";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router).use(ElementPlus).mount("#app");
