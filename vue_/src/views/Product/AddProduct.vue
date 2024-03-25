<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4>Add New Product</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form action="">
                    <div class="form-group">
                        <label for="">Category</label>
                        <select class="form-control" name="" id="" v-model="productID" required>
                            <option v-for="category in categories" :key="category.id" :value="category.id">{{
                            category.categoryName }}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" v-model="name" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="">Description</label>
                        <input type="text" v-model="description" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="">Image URL</label>
                        <input type="text" v-model="imageURL" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="">Price</label>
                        <input type="number" v-model="price" class="form-control">
                    </div>
                    <button type="button" class="btn btn-primary" @click="addProduct()">Add Product</button>
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
    props: ["baseURL", "categories"],
    data() {
        return {
            id: null,
            productID: null,
            name: null,
            description: null,
            imageURL: null,
            price: null
        }
    },
    methods: {
        addProduct() {
            const newProduct = {
                productID: this.productID,
                description: this.description,
                productName: this.name,
                price: this.price,
                imageURL: this.imageURL,

            }
            axios.post(this.baseURL + "product", newProduct)
                .then(() => {
                    this.$emit("fetchData");
                    this.$router.push({ name: "AdminProuduct" });
                    swal({
                        text: "Product added",
                        icon: "success"
                    })
                    this.refreshProductList();
                }).catch((err) => {
                    console.log("err" + err);
                })
        },
        refreshProductList() {
            // Gọi API hoặc thực hiện bất kỳ logic nào để cập nhật danh sách sản phẩm
            // Ví dụ:
            axios.get(this.baseURL + "products")
                .then(response => {
                    this.products = response.data;
                })
                .catch(error => {
                    console.log("Error refreshing product list: " + error);
                });
        }
    }
}
</script>