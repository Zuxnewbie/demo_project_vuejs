<template>
  <!-- Fruits Shop Start-->
  <div class="container-fluid fruite py-5">
    <div class="container py-5">
      <h1 class="mb-4">{{ name }}</h1>
      <div class="row g-4">
        <div class="col-lg-12">
          <div class="row g-4">
            <div class="col-xl-3">
              <div class="input-group w-100 mx-auto d-flex">
                <input
                  v-model="searchKeyword"
                  type="search"
                  class="form-control p-3"
                  placeholder="keywords"
                  aria-describedby="search-icon-1"
                />
                <span id="search-icon-1" class="input-group-text p-3"
                  ><i class="fa fa-search"></i
                ></span>
              </div>
            </div>
            <div class="col-6"></div>
            <div class="col-xl-3">
              <div
                class="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4"
              >
                <label for="fruits">Sắp xếp theo:</label>
                <select
                  id="fruits"
                  name="fruitlist"
                  class="border-0 form-select-sm bg-light me-3"
                  form="fruitform"
                >
                  <option value="volvo">Giá từ cao đến thấp</option>
                  <option value="saab">Giá từ thấp đến cao</option>
                  <option value="opel">Sản phẩm bán chạy</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row g-4">
            <div class="col-lg-3">
              <div class="row g-4">
                <div class="col-lg-12">
                  <div class="mb-3">
                    <h4>Categories</h4>
                    <ul class="list-unstyled fruite-categorie">
                      <li v-for="category in categories" :key="category.id">
                        <div
                          @click="
                            handleProductFilter(
                              category.id,
                              category.categoryName
                            )
                          "
                          class="d-flex justify-content-between fruite-name"
                        >
                          <span class="span_category"
                            ><i class="fas fa-apple-alt me-2"></i
                            >{{ category.categoryName }}</span
                          >
                          <span>{{ category.productCount }}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="position-relative">
                    <img
                      src="../assets/Frontend/img/banner-fruits.jpg"
                      class="img-fluid w-100 rounded"
                      alt=""
                    />
                    <div
                      class="position-absolute"
                      style="top: 50%; right: 10px; transform: translateY(-50%)"
                    >
                      <h3 class="text-secondary fw-bold">
                        Fresh <br />
                        Fruits <br />
                        Banner
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="row g-4 justify-content-center">
                <div
                  v-for="product in filteredProducts"
                  :key="product.id"
                  class="col-md-6 col-lg-6 col-xl-4"
                >
                  <div class="rounded position-relative fruite-item">
                    <div class="fruite-img">
                      <router-link
                        :to="{
                          name: 'ShowDetails',
                          params: { id: product.id },
                        }"
                      >
                        <img
                          height="222px"
                          :src="product.imageURL"
                          class="img-fluid w-100 rounded-top"
                          :alt="product.productName"
                        />
                      </router-link>
                    </div>
                    <div
                      class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                      style="top: 10px; left: 10px"
                    >
                      Fruits
                    </div>
                    <div
                      class="p-4 border border-secondary border-top-0 rounded-bottom"
                    >
                      <h4>{{ product.productName }}</h4>
                      <p
                        class="description"
                        style="max-height: 100px; overflow: hidden"
                      >
                        {{ product.description.substring(0, 55) }}...
                      </p>
                      <div class="d-flex justify-content-between flex-lg-wrap">
                        <p class="text-dark fs-5 fw-bold mb-0">
                          {{ formatCurrencyVND(product.price) }} / kg
                        </p>

                        <router-link
                          class="btn border border-secondary rounded-pill px-3 text-primary"
                          :to="{
                            name: 'ShowDetails',
                            params: { id: product.id },
                          }"
                        >
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
  </div>
  <!-- Fruits Shop End-->
</template>

<script>
export default {
  name: "ShopView",
  data() {
    return {
      id: null,
      product: [],
      category: [],
      searchKeyword: "",
      msg: "",
      quantity: null,
      name: null,
    };
  },
  props: ["categories", "products"],
  mounted() {
    // Hàm để định dạng số tiền thành chuỗi định dạng tiền tệ theo VND

    // Call handleProductFilter() method when the component is mounted
    this.handleProductFilter(1, "Trái cây Việt Nam");
  },
  computed: {
    filteredProducts() {
      // Filter products based on the search keyword
      return this.product.filter((product) =>
        product.productName
          .toLowerCase()
          .includes(this.searchKeyword.toLowerCase())
      );
    },
  },
  methods: {
    formatCurrencyVND(amount) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(amount);
    },
    // Method to filter products by category ID and name
    handleProductFilter(id = null, name) {
      if (id !== null) {
        this.id = id;
      }

      // Filter products corresponding to the new ID
      if (this.id !== null) {
        this.product = this.products.filter(
          (product) => product.productID == this.id
        );
        // Count the number of products in the category
        console.log(name);
        this.name = name;
        const categoryProductCount = this.products.reduce((acc, curr) => {
          if (curr.productID === this.id) {
            return acc + 1;
          } else {
            return acc;
          }
        }, 0);
        // Update the number of products in the category
        this.categories.forEach((category) => {
          if (category.id === this.id) {
            category.productCount = categoryProductCount;
          }
        });

        if (this.product.length == 0) {
          this.msg = "Không có sản phẩm";
        } else if (this.product.length == 1) {
          this.msg = "Chỉ có 1 sản phẩm";
        } else {
          this.msg = `Có ${this.product.length} sản phẩm`;
        }
      }
    },
  },
};
</script>

<style>
.span_category {
  cursor: pointer;
}

.description {
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  /* Maximum number of lines to display */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.fruite-img img {
  width: 200px;
  /* Desired width */
  height: 200px;
  /* Desired height */
}
</style>
