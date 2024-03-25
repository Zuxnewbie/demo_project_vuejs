<template>
  <!-- Fruits Shop Start-->
  <div class="container-fluid fruite py-5">
    <div class="container py-5">
      <h1 class="mb-4">Fresh fruits shop</h1>
      <div class="row g-4">
        <div class="col-lg-12">
          <div class="row g-4">
            <div class="col-xl-3">
              <div class="input-group w-100 mx-auto d-flex">
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
                      <li>
                        <div class="d-flex justify-content-between fruite-name">
                          <a href="#"
                            ><i class="fas fa-apple-alt me-2"></i>Apples</a
                          >
                          <span>(3)</span>
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
                <div class="col-md-6 col-lg-6 col-xl-4">
                  <div class="rounded position-relative fruite-item">
                    <div class="fruite-img">
                      <img
                        src="../assets/Frontend/img/fruite-item-5.jpg"
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
                    <div
                      class="p-4 border border-secondary border-top-0 rounded-bottom"
                    >
                      <h4>Grapes</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div class="d-flex justify-content-between flex-lg-wrap">
                        <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a
                          href="#"
                          class="btn border border-secondary rounded-pill px-3 text-primary"
                          ></a
                        >

                        <router-link class="btn border border-secondary rounded-pill px-3 text-primary" :to="{ name: 'Details' }" >
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
  data() {},
};
</script>

<style></style>
