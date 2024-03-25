import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
    path: '/details',
    name: 'Details',
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
  },
  {
    path: "/admin/category",
    name: "Category",
    component: () => import("../views/Category/Category_View.vue"),
  },
  {
    path: "/admin",
    name: "Admin_view",
    component: () => import("../views/Admin_view.vue"),
  },
  {
    path: "/admin/product",
    name: "AdminProuduct",
    component: () => import("../views/Product/Product_view.vue"),
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
    component: () => import("../views/Product/ShowDetails.vue"),
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

export default router;
