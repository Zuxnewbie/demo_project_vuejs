<template>
    <div class="card w-100 h-100">
        <div class="embed-responsive">
            <img class="card-img-top" :src="category.imageUrl" alt="">
        </div>
        <div class="card-body">
            <router-link :to="{ name: 'ListProducts', params: { id: category.id } }">
                <h4 class="card-title">{{ category.categoryName }}</h4>

            </router-link>
            <p class="card-text">{{ category.description }}</p>
            <router-link :to="{ name: 'EditCategory', params: { id: category.id } }" v-show="$route.name == 'Category'">
                <a href="#" class="btn btn-primary">Edit</a>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "CategoryBox",
    props: ['category'],
    methods: {}
}
</script>

<style scoped>
.card-img-top {
    object-fit: cover;
    height: 200px;
    /* Đặt chiều cao cố định cho hình ảnh */
}

.embed-responsive {
    height: 200px;
    /* Đặt chiều cao cố định cho phần chứa hình ảnh */
    overflow: hidden;
    /* Ẩn phần vượt quá kích thước của thẻ */
}
</style>
