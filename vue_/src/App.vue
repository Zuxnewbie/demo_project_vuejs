<template>

  <AppNavbar />
  <!-- <nav>
    <router-link to="/admin">Admin</router-link> |
  </nav> -->
  <router-view v-if="categories && products" :baseURL="baseURL" :categories="categories" :products="products"
    :users="users" @fetchData="fetchData" style="min-height: 60vh;">
  </router-view>
  <!-- footer -->
  <Footer_home />
</template>

<script>
import axios from "axios";
import AppNavbar from "./components/AppNavbar.vue";
import Footer_home from "./components/Footer_home.vue";

export default {
  components: {
    AppNavbar, Footer_home
  },
  data() {
    return {
      baseURL: "http://localhost:3000/",
      products: null,
      categories: null,
      users: null
    }
  },
  methods: {
    async fetchData() {
      try {
        const categoryResponse = await axios.get(this.baseURL + "category");
        this.categories = categoryResponse.data;

        const productResponse = await axios.get(this.baseURL + "product");
        this.products = productResponse.data;

        const usersResponse = await axios.get(this.baseURL + "users");
        this.users = usersResponse.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
