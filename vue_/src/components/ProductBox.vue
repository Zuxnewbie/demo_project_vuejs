<template>
    <div class="rounded position-relative fruite-item">
      <div class="fruite-img">
        <img
          :src="product.imageURL"
          class="img-fluid w-100 rounded-top"
          alt=""
        />
      </div>
      <div
        class="text-white bg-secondary px-3 py-1 rounded position-absolute"
        style="top: 10px; left: 10px"
      >
        Fruits
      </div>
      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
        <h4>{{ product.productName }}</h4>
        <p>{{ product.description.substring(0, 65) }}...</p>
        <div class="d-flex justify-content-between flex-lg-wrap">
          <p class="text-dark fs-5 fw-bold mb-0">{{ product.price }} / kg</p>
          <router-link
            :to="{ name: 'Details' }"
            class="btn border border-secondary rounded-pill px-3 text-primary"
          >
            <i class="fa fa-shopping-bag me-2 text-primary"></i> View More
          </router-link>

          
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "ProductBox",
  props: ["product"],
};
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

a {
  text-decoration: none;
}

.card-title {
  color: #484848;
}
</style>
