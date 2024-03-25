<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-1"></div>

      <div class="col-md-5 col-12">
        <img :src="product.imageURL" class="img-fluid" alt="">
      </div>
      <!-- display product detail -->
      <div class="col-md-6 col-12 pt-3 pt-md-0">
        <h4>{{ product.productName }}</h4>
        <h6 class="catgory font-italic">{{ category.categoryName }}</h6>
        <h6 class="font-weight-bold">${{ product.price }}</h6>
        <p>
          {{ product.description }}
        </p>
        <div class="features pt-3">
          <h5><strong>Features</strong></h5>
          <ul>
            <li>blablabalbalblblbalbalbalallbab</li>
            <li>blablabalbalblblbalbalbalallbab</li>
            <li>blablabalbalblblbalbalbalallbab</li>
            <li>blablabalbalblblbalbalbalallbab</li>
            <li>blablabalbalblblbalbalbalallbab</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      category: {}
    }
  },
  props: ["baseURL", "products", "categories"],
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id)
    this.category = this.categories.find((category => category.id == this.product.productID))
  }
};
</script>

<style>
.catgory {
  font-weight: 400;
}
</style>
