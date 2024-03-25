<template>
  <!-- Footer Start -->
  <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
    <div class="container py-5">
      <div class="pb-2 mb-4" style="border-bottom: 1px solid rgba(226, 175, 24, 0.5)"></div>
      <div class="row g-5">
        <div class="col-lg-4 col-md-6">
          <router-link :to="{ name: 'home' }">
            <div class="footer-item">
              <h1 class="text-primary mb-0">Fruitables</h1>
              <p class="text-secondary mb-0">Fresh products</p>
            </div>
          </router-link>
          <div class="d-flex justify-content-center pt-3">
            <a class="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="https://www.instagram.com/"><i
                class="fab fa-instagram"></i></a>
            <a class="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="https://www.facebook.com/"><i
                class="fab fa-facebook-f"></i></a>
            <a class="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="https://www.youtube.com/"><i
                class="fab fa-youtube"></i></a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="d-flex flex-column text-start footer-item">
            <h4 class="text-light mb-3">Shop Info</h4>
            <a class="btn-link" href="">About Us</a>
            <a class="btn-link" href="">Contact Us</a>
            <a class="btn-link" href="">Privacy Policy</a>
            <a class="btn-link" href="">Terms & Condition</a>
            <a class="btn-link" href="">Return Policy</a>
            <a class="btn-link" href="">FAQs & Help</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="d-flex flex-column text-start footer-item">
            <h4 class="text-light mb-3">Account</h4>
            <a class="btn-link" href="">My Account</a>
            <a class="btn-link" href="">Shop details</a>
            <a class="btn-link" href="">Shopping Cart</a>
            <a class="btn-link" href="">Wishlist</a>
            <a class="btn-link" href="">Order History</a>
            <a class="btn-link" href="">International Orders</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->

  <a href="#" class="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i
      class="fa fa-arrow-up"></i></a>
</template>
<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  margin-top: 100px;
  background-color: #232f3e;
  font-size: 16px;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

.footer-link {
  color: #ddd;
}

li {
  padding-bottom: 10px;
}
</style>