import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.scss";
import i18n from "./i18n";

createApp(App).use(i18n).use(router).mount("#app");
