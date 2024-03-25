<template>
    <div class="container">
        <div class="col-12 text-center">
            <h3 class="pt-3">Our Categories</h3>
            <router-link :to="{ name: 'AddProduct' }">
                <Button class="btn">Add Product</Button>
            </router-link>
        </div>
        <div class="row">
            <!-- Hiển thị tất cả product trong component productBox -->
            <div v-for="product of products" :key="product.id" class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
                <ProductBox :product="product"></ProductBox>
            </div>
        </div>
    </div>
</template>
<script>
import ProductBox from '../../components/ProductBox.vue';
export default {
    name: "Category_View",
    props: ["products"],
    components: {
        ProductBox
    },
}
</script>