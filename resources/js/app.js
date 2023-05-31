import { createApp } from "vue/dist/vue.esm-bundler";
import { createPinia } from "pinia";
import AppComponent from "./components/App.vue";
import router from "./router/index";

let app = createApp({
    components: {
        AppComponent,
    },
});

app.use(router);
app.use(createPinia());
app.mount("#app");