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
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import ProductAdmin from '../../components/ProductAdmin.vue';
export default {
  name: "Product_View",
  props: ["products"],
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
};
</script>
