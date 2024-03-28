import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    isLoggedIn: false,
    user: null,
    isAdminLoggedIn: sessionStorage.getItem("isAdminLoggedIn") === "true",
    admin: null,
  },
  mutations: {
    setLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    setUser(state, user) {
      state.user = user;
    },
    setIsAdminLoggedIn(state, isAdminLoggedIn) {
      state.isAdminLoggedIn = isAdminLoggedIn;
      sessionStorage.setItem("isAdminLoggedIn", isAdminLoggedIn);
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        // Make an HTTP GET request to fetch data from db.json
        const response = await axios.get("http://localhost:3000/users");

        // Extract the users data from the response
        const users = response.data;

        console.log("Users:", users);
        console.log("Provided email:", email);
        console.log("Provided password:", password);

        // Find the user with the provided email and password
        const user = users.find(
          (user) => user.email == email && user.password == password
        );

        if (user) {
          // Store the user's authentication token or session in localStorage
          localStorage.setItem("user", JSON.stringify(user));

          // For simplicity, let's just set isLoggedIn to true and set the user object

          commit("setLoggedIn", true);
          commit("setUser", user);
        } else {
          // Handle incorrect email/password error
          console.error("Incorrect email or password");
          // You can show an error message or handle it in any way you prefer
        }
      } catch (error) {
        console.error("Error logging in:", error);
        // Handle login error
      }
    },
    logout({ commit }) {
      // Perform logout actions here
      localStorage.removeItem("user");

      // For simplicity, let's just set isLoggedIn to false and clear the user object
      commit("setLoggedIn", false);
      commit("setUser", null);
    },

    // Action để đăng nhập admin
    async loginAdmin({ commit }, { name, pass }) {
      try {
        // Lấy danh sách admin từ props hoặc API
        const response = await axios.get("http://localhost:3000/admin");
        const admins = response.data;
        const admin = admins.find(
          (admin) => admin.name === name && admin.pass == pass
        );

        if (admin) {
          // Đánh dấu trạng thái đăng nhập của admin
          localStorage.setItem("isAdminLoggedIn", true);
          commit("setIsAdminLoggedIn", true);
        } else {
          console.error("Incorrect admin name or password");
        }
      } catch (error) {
        console.error("Error logging in as admin:", error);
      }
    },
  },
  getters: {
    userName(state) {
      console.log(state.user.lastName);
      return state.user ? state.user.lastName : null;
    },
    userId(state) {
      return state.user ? state.user.id : null;
    },
    // adminConfirm(state){
    //   //
    // }
  },
  modules: {},
});
