<template>
  <!-- Navbar start -->
  <div class="container-fluid fixed-top">
    <div class="container topbar bg-primary d-none d-lg-block">
      <div class="d-flex justify-content-between">
        <div class="top-info ps-2">
          <small class="me-3"
            ><i class="fas fa-map-marker-alt me-2 text-secondary"></i>
            <a href="#" class="text-white">123 Street, New York</a></small
          >
          <small class="me-3"
            ><i class="fas fa-envelope me-2 text-secondary"></i
            ><a href="#" class="text-white">Email@Example.com</a></small
          >
        </div>
        <div class="top-link pe-2">
          <a href="#" class="text-white"
            ><small class="text-white mx-2">Privacy Policy</small>/</a
          >
          <a href="#" class="text-white"
            ><small class="text-white mx-2">Terms of Use</small>/</a
          >
          <a href="#" class="text-white"
            ><small class="text-white ms-2">Sales and Refunds</small></a
          >
        </div>
      </div>
    </div>
    <div class="container px-0">
      <nav class="navbar navbar-light bg-white navbar-expand-xl">
        <a href="index.html" class="navbar-brand"
          ><h1 class="text-primary display-6">Fruitables</h1></a
        >
        <button
          class="navbar-toggler py-2 px-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="fa fa-bars text-primary"></span>
        </button>
        <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
          <div class="navbar-nav mx-auto">
            <router-link
              :to="{ name: 'home' }"
              class="nav-item nav-link active"
            >
              Home
            </router-link>
            <router-link :to="{ name: 'Shop' }" class="nav-item nav-link">
              Shop
            </router-link>
            <router-link :to="{ name: 'Cart' }" class="nav-item nav-link">
              Cart
            </router-link>
            <router-link :to="{ name: 'CheckOut' }" class="nav-item nav-link">
              Checkout
            </router-link>

            <!-- <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                >Pages</a
              >
              <div class="dropdown-menu m-0 bg-secondary rounded-0">
                <a href="cart.html" class="dropdown-item">Cart</a>
                <a href="chackout.html" class="dropdown-item">Chackout</a>
                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                <a href="404.html" class="dropdown-item">404 Page</a>
              </div>
            </div> -->
            <router-link :to="{ name: 'Signin' }" class="nav-item nav-link">
              Signin
            </router-link>
            <router-link :to="{ name: 'Signup' }" class="nav-item nav-link">
              Singup
            </router-link>
          </div>
          <div class="d-flex m-3 me-0">
            <button
              class="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i class="fas fa-search text-primary"></i>
            </button>
            <a href="#" class="position-relative me-4 my-auto">
              <i class="fa fa-shopping-bag fa-2x"></i>
              <span
                class="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                style="top: -5px; left: 15px; height: 20px; min-width: 20px"
                >3</span
              >
            </a>
            <a href="#" class="my-auto">
              <i class="fas fa-user fa-2x"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <!-- Navbar End -->

  <!-- Modal Search Start -->
  <div
    class="modal fade"
    id="searchModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content rounded-0">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Search by keyword</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex align-items-center">
          <div class="input-group w-75 mx-auto d-flex">
            <input
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
      </div>
    </div>
  </div>
  <!-- Modal Search End -->

  <!-- Hero Start -->
  <div class="container-fluid py-5 mb-5 hero-header">
    <div class="container py-5">
      <div class="row g-5 align-items-center">
        <div class="col-md-12 col-lg-7">
          <h4 class="mb-3 text-secondary">100% Organic Foods</h4>
          <h1 class="mb-5 display-3 text-primary">
            Organic Veggies & Fruits Foods
          </h1>
        </div>
        <div class="col-md-12 col-lg-5">
          <div
            id="carouselId"
            class="carousel slide position-relative"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active rounded">
                <img
                  src="img/hero-img-1.png"
                  class="img-fluid w-100 h-100 bg-secondary rounded"
                  alt="First slide"
                />
                <a href="#" class="btn px-4 py-2 text-white rounded">Fruites</a>
              </div>
              <div class="carousel-item rounded">
                <img
                  src="img/hero-img-2.jpg"
                  class="img-fluid w-100 h-100 rounded"
                  alt="Second slide"
                />
                <a href="#" class="btn px-4 py-2 text-white rounded"
                  >Vesitables</a
                >
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Hero End -->

  <slot></slot>
</template>

<script>
import "@/assets/Frontend/css/bootstrap.min.css";
import "@/assets/Frontend/css/style.css";
import "@/assets/Frontend/lib/lightbox/css/lightbox.min.css";
import "@/assets/Frontend/lib/owlcarousel/assets/owl.carousel.min.css";

export default {
  name: "AppNavbar",
  data() {
    return {
      token: null,
    };
  },
  methods: {
    signout() {
      localStorage.removeItem("token");
      this.token = null;
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
  },
};
</script>

<style scoped>
#logo {
  width: 100px;
  height: 100px;
  margin-left: 20px;
  margin-right: 20px;
}

.nav-link {
  color: rgba(255, 255, 255);
}

#search-button-navbar {
  background-color: #febd69;
  border-color: #febd69;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}

#nav-cart-count {
  background-color: red;
  color: white;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  font-size: 15px;
  margin-left: 10px;
}

#cart {
  position: relative;
}
</style>
