<template>
  <div class="container">
    <div class="col-12 text-center">
      <h3 class="pt-3">Our Categories</h3>
      <router-link :to="{ name: 'AddProduct' }">
        <Button class="btn">Add Product</Button>
      </router-link>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Name</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in formattedProducts" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ product.productName }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }} đ / kg</td>

          <td>
            <router-link
              :to="{ name: 'EditProudct', params: { id: product.id } }"
            >
              Edit Product
            </router-link>
          </td>
          <td>
            <button @click="deleteProduct(product.id)">Delete Product</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import ProductAdmin from '../../components/ProductAdmin.vue';
import axios from "axios";
import swal from "sweetalert";
export default {
  name: "Product_View",
  props: ["products", "baseURL"],
  computed: {
    formattedProducts() {
      return this.products.map((product) => {
        return {
          productName: product.productName,
          description: product.description.substring(0, 65) + "...",
          price: product.price,
          id: product.id,
        };
      });
    },
  },
  methods: {
    async deleteProduct(id) {
      try {
        await axios.delete(`${this.baseURL}product/${id}`);
        this.$emit("fetchData"); // Assuming fetchData emits an event to fetch updated product data
        swal({
          text: "Product has been deleted successfully",
          icon: "success",
        });
      } catch (error) {
        console.error("Error deleting product:", error);
        swal({
          text: "Error deleting product",
          icon: "error",
        });
      }
    },
  },
};
</script>
