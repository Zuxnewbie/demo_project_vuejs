<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Edit Product</h4>
            </div>
        </div>
        <div class="row">
            {{ product }}
            <div class="col-3"></div>
            <div class="col-6">
                <form action="" v-if="product">
                    <div class="form-group">
                        <label for="">Category</label>
                        <select class="form-control" v-model="product.categoryId" name="" id="" required>
                            <option v-for="category of categories" :key="category.id" :value="category.id">
                                {{ category.categoryName }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" class="form-control" v-model="product.productName" required>
                    </div>

                    <div class="form-group">
                        <label for="">Description</label>
                        <input type="text" class="form-control" v-model="product.description" required>
                    </div>

                    <div class="form-group">
                        <label for="">Image URL</label>
                        <input type="text" class="form-control" v-model="product.imageUrl" required>
                    </div>

                    <div class="form-group">
                        <label for="">Price</label>
                        <input type="text" class="form-control" v-model="product.price" required>
                    </div>
                    <button type="button" class="btn btn-primary" @click="editProduct()">Edit</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
export default {
    data() {
        return {
            product: null,
            id: null
        }
    },
    props: ["baseURL", "categories", "products"],
    methods: {
        async editProduct() {
            console.log("product", this.product);
            await axios.put(`${this.baseURL}product/${this.id}`, this.product)
                .then(() => {
                    this.$emit("fetchData");
                    this.$router.push({ name: "AdminProuduct" })
                    swal({
                        text: "Product has been updated successfully",
                        icon: "success"
                    })
                }).catch(err => console.log("err" + err));
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.product = this.products.find(product => product.id == this.id)
    },
}
</script>