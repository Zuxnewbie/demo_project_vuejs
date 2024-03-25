// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Import Vuex Store

const app = createApp(App);
app.use(router);
app.use(store); // Sử dụng Vuex Store
app.mount('#app');
