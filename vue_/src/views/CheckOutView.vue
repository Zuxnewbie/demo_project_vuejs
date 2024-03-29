<template>
  <!-- Checkout Page Start -->
  <div class="container-fluid py-5">
    <div class="container py-5">
      <h1 class="mb-4">Billing details</h1>
      <form action="#">
        <div class="row g-5">
          <div class="col-md-12 col-lg-6 col-xl-7">
            <div class="row">
              <div class="col-md-12 col-lg-12">
                <div class="form-item w-100">
                  <label class="form-label my-3">Full Name</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>

            <div class="form-item">
              <label class="form-label my-3">Address <sup>*</sup></label>
              <input type="text" class="form-control" placeholder="House Number Street Name" />
            </div>

            <div class="form-item">
              <label class="form-label my-3">Mobile<sup>*</sup></label>
              <input type="tel" class="form-control" />
            </div>
            <hr />
            <div class="form-item">
              <textarea name="text" class="form-control" spellcheck="false" cols="30" rows="11"
                placeholder="Oreder Notes (Optional)"></textarea>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 col-xl-5">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Products</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in carts" :key="product.id">
                    <th scope="row">
                      <div class="d-flex align-items-center mt-2">
                        <img :src="product.imageURL" class="img-fluid rounded-circle" style="width: 90px; height: 90px"
                          alt="" />
                      </div>
                    </th>
                    <td class="py-5">{{ product.productName }}</td>
                    <td class="py-5">{{ product.price }}</td>
                    <td class="py-5">{{ product.quantity }}</td>
                    <td class="py-5">{{ product.price }} đ</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
              <div class="col-12">
                <div class="form-check text-start my-3">
                  <input type="checkbox" class="form-check-input bg-primary border-0" id="Payments-1" name="Payments"
                    value="Payments" />
                  <label class="form-check-label" for="Payments-1">Check Payments</label>
                </div>
              </div>
              <div>?????????????????</div>
            </div>
            <div class="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
              <div class="col-12">
                <div class="form-check text-start my-3">
                  <input type="checkbox" class="form-check-input bg-primary border-0" id="Delivery-1" name="Delivery"
                    value="Delivery" />
                  <label class="form-check-label" for="Delivery-1">Cash On Delivery</label>
                </div>
              </div>
            </div>

            <div class="row g-4 text-center align-items-center justify-content-center pt-4">
              <button type="button" class="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <!-- Checkout Page End -->
</template>

<script>
export default {
  props: ["baseURL", "carts"],

  name: "CheckOutView",
  data() { },
};
</script>

<style></style>
