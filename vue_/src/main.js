// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; // Import Vuex Store

// Check if user data exists in localStorage
const user = JSON.parse(localStorage.getItem("user"));
if (user) {
    // Set the user state in the Vuex store if user data exists
    store.commit('setLoggedIn', true);
    store.commit('setUser', user);
}

const app = createApp(App);
app.use(router);
app.use(store); // Sử dụng Vuex Store
app.mount("#app");
