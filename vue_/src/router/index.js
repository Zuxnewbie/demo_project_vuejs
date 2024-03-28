import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../store/index.js"; // Import Vuex Store

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/error",
    name: "ErrorView",
    component: () => import("../views/ErrorView.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: { name: "ErrorView" }, // Redirect to the ErrorView component
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../views/ShopView.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/CartView.vue"),
  },
  {
    path: "/checkout",
    name: "CheckOut",
    component: () => import("../views/CheckOutView.vue"),
  },
  {
    path: "/details",
    name: "Details",
    component: () => import("../views/DetailsView.vue"),
  },

  // trang chi tiet san pham
  {
    path: "/category/show/:id",
    name: "ListProducts",
    component: () => import("../views/Category/ListProducts.vue"),
  },

  {
    path: "/admin/category/add",
    name: "AddCategory",
    component: () => import("../views/Category/AddCategory.vue"),
    meta: { requiresAdmin: true },
  },
  {
    path: "/admin/category",
    name: "Category",
    component: () => import("../views/Category/Category_View.vue"),
    meta: { requiresAdmin: true },
  },
  {
    path: "/admin/view",
    name: "Admin_view",
    component: () => import("../views/Admin_view.vue"),
    meta: { requiresAdmin: true },
  },
  {
    path: "/admin",
    name: "Admin_login",
    component: () => import("../views/Admin_login.vue"),
  },
  {
    path: "/admin/product",
    name: "AdminProuduct",
    component: () => import("../views/Product/Product_view.vue"),
    meta: { requiresAdmin: true },
  },
  // category edit
  {
    path: "/admin/category/:id",
    name: "EditCategory",
    component: () => import("../views/Category/EditCategory.vue"),
  },
  // add product
  {
    path: "/admin/product/new",
    name: "AddProduct",
    component: () => import("../views/Product/AddProduct.vue"),
    meta: { requiresAdmin: true },
  },
  // edit product
  {
    path: "/admin/product/:id",
    name: "EditProudct",
    component: () => import("../views/Product/EditProudct.vue"),
  },
  // Show detail (Chi tiết hàng hóa)
  {
    path: "/product/show/:id",
    name: "ShowDetails",
    component: () => import("../views/DetailsView.vue"),
  },
  // Sign up
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Sign_up.vue"),
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import("../views/Sign_in.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("Navigating to:", to.name); // Log the name of the route we're navigating to
  console.log("Requires admin:", to.meta.requiresAdmin); // Log whether the route requires admin authentication
  console.log("Is admin logged in:", store.state.isAdminLoggedIn); // Log the state of isAdminLoggedIn

  // Check if it's an admin route and if admin is logged in
  if (to.meta.requiresAdmin && !store.state.isAdminLoggedIn) {
    console.log("Redirecting to Admin login");
    next({ name: "Admin_login" }); // Redirect to Admin login if not logged in
  } else {
    console.log("Proceeding to the route");
    next(); // Proceed to the route
  }
});

// router.beforeEach((to, from, next) => {
//   // Cuộn lên đầu trang khi chuyển route
//   window.scrollTo(0, 0);
//   next();
// });

export default router;
