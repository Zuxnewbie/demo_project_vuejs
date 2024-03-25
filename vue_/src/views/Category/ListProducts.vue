<template>
    <div class="container-fluid fruite py-5">
        <div class="container ">
            <div class="row g-4">
                <div class="col-lg-12">
                    <div class="row g-4">
                        <div class="row g-4 justify-content-center">
                            <div v-for="product of product" :key="product.id" class="col-md-3 col-lg-3 ">
                                <div class="rounded position-relative fruite-item">
                                    <div class="fruite-img">
                                        <img src="../../assets/Frontend/img/best-product-5.jpg"
                                            class="img-fluid w-100 rounded-top" alt="" />
                                    </div>
                                    <div class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                        style="top: 10px; left: 10px">
                                        Fruits
                                    </div>
                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                        <h4>Grapes</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            sed do eiusmod te incididunt
                                        </p>
                                        <div class="d-flex justify-content-between flex-lg-wrap">
                                            <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                            <a href="#"
                                                class="btn border border-secondary rounded-pill px-3 text-primary"></a>

                                            <router-link
                                                class="btn border border-secondary rounded-pill px-3 text-primary"
                                                :to="{ name: 'Details' }">
                                                <i class="fa fa-shopping-bag me-2 text-primary"></i>
                                                View More
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import ProductBox from '@/components/ProductBox.vue';
export default {
    // components: { ProductBox },
    data() {
        return {
            id: null,
            category: {},
            product: {},
            msg: "",
        }
    },
    props: ['categories', 'products'],
    mounted() {
        this.id = this.$route.params.id;
        this.category = this.categories.find((category => category.id == this.id))
        // this.product = this.products.find((product => product.productID == this.id))
        this.product = this.products.filter(product => product.productID == this.id);
        console.log(this.product.length);
        if (this.product.length == 0) {
            this.msg = "Không có sản phẩm";
        } else if (this.product.length == 1) {
            this.msg = "Chỉ có 1 sản phẩm";
        } else {
            this.msg = `Có ${this.product.length} sản phẩm`;
        }
    }
}
</script>