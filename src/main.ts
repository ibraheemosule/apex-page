import { createApp } from "vue";
import App from "./App.vue";
import Layout from "./components/Layout.vue";
import "./assets/css/index.css";

const app = createApp(App);
app.component("Layout", Layout);

app.mount("#app");
