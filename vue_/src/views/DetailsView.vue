<template>
  <!-- Single Product Start -->
  <div class="container-fluid py-5 mt-5">
    <div class="container py-5">
      <div class="row g-4 mb-5">
        <div class="col-lg-8 col-xl-9">
          <div class="row g-4">
            <div class="col-lg-6">
              <div class="border rounded">
                <a href="#">
                  <img
                    src="https://product.hstatic.net/200000157781/product/dsc_7673_copy_21112823a1ce471d895c58e3ea2bf8e8.jpg"
                    class="img-fluid rounded" alt="Image" />
                </a>
              </div>
            </div>
            <div class="col-lg-6" style="text-align: left">
              <h4 class="fw-bold mb-3">{{ product.productName }}</h4>
              <!-- <span>{{ userId }}</span> -->
              <p class="mb-3">Category: {{ category.categoryName }}</p>
              <h5 class="fw-bold mb-3">{{ product.price }} VNĐ</h5>
              <div class="d-flex mb-4">
                <i class="fa fa-star text-secondary"></i>
                <i class="fa fa-star text-secondary"></i>
                <i class="fa fa-star text-secondary"></i>
                <i class="fa fa-star text-secondary"></i>
                <i class="fa fa-star"></i>
              </div>
              <p class="mb-4">
                The generated Lorem Ipsum is therefore always free from
                repetition injected humour, or non-characteristic words etc.
              </p>
              <p class="mb-4">
                Susp endisse ultricies nisi vel quam suscipit. Sabertooth
                peacock flounder; chain pickerel hatchetfish, pencilfish
                snailfish
              </p>

              <div class="input-group quantity mb-5" style="width: 100px">
                <div class="input-group-btn">
                  <button class="btn btn-sm btn-minus rounded-circle bg-light border" @click="decreaseQuantity">
                    <i class="fa fa-minus"></i>
                  </button>
                </div>
                <input type="text" value="1" class="form-control form-control-sm text-center border-0"
                  v-model="quantity" />
                <div class="input-group-btn">
                  <button class="btn btn-sm btn-plus rounded-circle bg-light border" @click="increaseQuantity">
                    <i class="fa fa-plus"></i>
                  </button>
                </div>
              </div>

              <router-link v-if="!isLoggedIn" @click="showAlert"
                class="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary" :to="{ name: 'Signin' }">
                <i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
              </router-link>
              <button v-else @click="addToCart(product.id)"
                class="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">
                <i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
              </button>
            </div>
            <div class="col-lg-12">
              <nav>
                <div class="nav nav-tabs mb-3">
                  <button class="nav-link active border-white border-bottom-0" type="button" role="tab"
                    id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about" aria-controls="nav-about"
                    aria-selected="true">
                    Description
                  </button>
                  <button class="nav-link border-white border-bottom-0" type="button" role="tab" id="nav-mission-tab"
                    data-bs-toggle="tab" data-bs-target="#nav-mission" aria-controls="nav-mission"
                    aria-selected="false">
                    Reviews
                  </button>
                </div>
              </nav>
              <div class="tab-content mb-5">
                <div class="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                  <p>
                    {{ product.description }}
                  </p>
                  <div class="px-2">
                    <div class="row g-4">
                      <div class="col-6">
                        <div class="row bg-light align-items-center text-center justify-content-center py-2">
                          <div class="col-6">
                            <p class="mb-0">Weight</p>
                          </div>
                          <div class="col-6">
                            <p class="mb-0">1 kg</p>
                          </div>
                        </div>
                        <div class="row text-center align-items-center justify-content-center py-2">
                          <div class="col-6">
                            <p class="mb-0">Country of Origin</p>
                          </div>
                          <div class="col-6">
                            <p class="mb-0">Agro Farm</p>
                          </div>
                        </div>
                        <div class="row bg-light text-center align-items-center justify-content-center py-2">
                          <div class="col-6">
                            <p class="mb-0">Quality</p>
                          </div>
                          <div class="col-6">
                            <p class="mb-0">Organic</p>
                          </div>
                        </div>
                        <div class="row text-center align-items-center justify-content-center py-2">
                          <div class="col-6">
                            <p class="mb-0">Сheck</p>
                          </div>
                          <div class="col-6">
                            <p class="mb-0">Healthy</p>
                          </div>
                        </div>
                        <div class="row bg-light text-center align-items-center justify-content-center py-2">
                          <div class="col-6">
                            <p class="mb-0">Min Weight</p>
                          </div>
                          <div class="col-6">
                            <p class="mb-0">250 Kg</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                  <div class="d-flex">
                    <img src="img/avatar.jpg" class="img-fluid rounded-circle p-3" style="width: 100px; height: 100px"
                      alt="" />
                    <div class="">
                      <p class="mb-2" style="font-size: 14px">April 12, 2024</p>
                      <div class="d-flex justify-content-between">
                        <h5>Jason Smith</h5>
                        <div class="d-flex mb-3">
                          <i class="fa fa-star text-secondary"></i>
                          <i class="fa fa-star text-secondary"></i>
                          <i class="fa fa-star text-secondary"></i>
                          <i class="fa fa-star text-secondary"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                      <p>
                        The generated Lorem Ipsum is therefore always free from
                        repetition injected humour, or non-characteristic words
                        etc. Susp endisse ultricies nisi vel quam suscipit
                      </p>
                    </div>
                  </div>
                  <div class="d-flex">
                    <img src="img/avatar.jpg" class="img-fluid rounded-circle p-3" style="width: 100px; height: 100px"
                      alt="" />
                    <div class="">
                      <p class="mb-2" style="font-size: 14px">April 12, 2024</p>
                      <div class="d-flex justify-content-between">
                        <h5>Sam Peters</h5>
                        <div class="d-flex mb-3">
                          <i class="fa fa-star text-secondary"></i>
                          <i class="fa fa-star text-secondary"></i>
                          <i class="fa fa-star text-secondary"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                      <p class="text-dark">
                        The generated Lorem Ipsum is therefore always free from
                        repetition injected humour, or non-characteristic words
                        etc. Susp endisse ultricies nisi vel quam suscipit
                      </p>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="nav-vision" role="tabpanel">
                  <p class="text-dark">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                    tempor sit. Aliqu diam amet diam et eos labore. 3
                  </p>
                  <p class="mb-0">
                    Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et
                    eos labore. Clita erat ipsum et lorem et sit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Single Product End -->
</template>

<script>
import axios from 'axios';




import swal from "sweetalert";

export default {
  name: "CheckOutView",
  data() {
    return {
      quantity: 1,
      product: {},
      category: {},
    };
  },
  props: ["baseURL", "products", "categories", "carts"],

  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    userId() {
      return this.$store.state.user ? this.$store.state.user.id : null;
    },
  },
  methods: {
    showAlert() {
      alert("You don't have an account yet. Please sign up or sign in.");
    },

    redirectToSignIn() {
      this.$router.push({ name: "Signin" });
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },

    async addToCart(id) {
      console.log(id);
      const existingItemIndex = this.carts.findIndex(item => item.id === id);
      console.log(existingItemIndex);
      if (existingItemIndex !== -1) {
        let filteredArray = this.carts.filter((item) => item.id == id);
        console.log(filteredArray[0]);
        const { id: idProduct } = filteredArray[0];
        const newQuantity = filteredArray[0].quantity = this.quantity += filteredArray[0].quantity;
        console.log(newQuantity);
        const newItem = {
          ...filteredArray[0],
          quantity: newQuantity
        }
        axios.put(`${this.baseURL}carts/${idProduct}`, newItem)
          .then(() => {
            this.quantity = 1;
            swal({
              text: "Thêm vào giỏ hàng thành công !!!",
              icon: "success",
            });
          })
      } else {
        const itemCart = {
          id: this.product.id,
          categoryId: this.category.id,
          idUser: this.userId,
          quantity: this.quantity,
          price: this.product.price,
          imageURL: this.product.imageURL,
          productName: this.product.productName,
        };
        console.log(itemCart);
        await axios.post(`${this.baseURL}carts`, itemCart)
          .then(async () => {
            await swal({
              text: "Thêm vào giỏ hàng thành công !!!",
              icon: "success",
            })
            window.location.reload();
          })
          .catch(err => {
            console.log("Error while adding to cart:", err);
            swal({
              text: "Có lỗi xảy ra khi thêm vào giỏ hàng. Vui lòng thử lại sau.",
              icon: "error",
            });
          });
      }
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id);
    this.category = this.categories.find((category) => category.id == this.product.productID
    );
  },
};
</script>

<style></style>
