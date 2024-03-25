<template>

    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3>Add Category</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form action="">
                    <div class="form-group">
                        <label for="">Category name</label>
                        <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId"
                            v-model="categoryName">

                    </div>

                    <div class="form-group">
                        <label for=""> Description</label>
                        <textarea type="text" name="" id="" class="form-control" placeholder=""
                            aria-describedby="helpId" v-model="description">  </textarea>
                        <!-- <small id="helpId" class="text-muted">Help text</small> -->
                    </div>

                    <div class="form-group">
                        <label for="">Category Image</label>
                        <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId"
                            v-model="imageUrl">

                        <!-- <small id="helpId" class="text-muted">Help text</small> -->
                    </div>

                    <button type="button" class="btn btn-primary" @click="addCategory">Submit</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script>
const axios = require("axios");
const sweetalert = require("sweetalert");

export default {
    data() {
        return {
            categoryName: "",
            description: "",
            imageUrl: "",
        };
    },
    methods: {
        addCategory() {
            console.log(this.categoryName, this.description);
            const newCategory = {
                categoryName: this.categoryName,
                description: this.description,
                imageUrl: this.imageUrl
            };

            const baseURL = "http://localhost:3000/";

            axios({
                method: "post",
                url: `${baseURL}category`,
                data: JSON.stringify(newCategory),
                headers: {
                    "Content-Type": 'application/json'
                },
            })
                .then(() => {
                    sweetalert({
                        text: "Category added successfully",
                        icon: "success",
                    })
                })
                .catch((err) => {
                    console.error(err);
                })
        }
    }
}
</script>


<script scoped></script>