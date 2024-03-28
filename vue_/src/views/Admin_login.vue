<template>
  <div class="container">
    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="signin" class="flex-item border">
          <h2 class="pt-4">Admin Controller</h2>
          <form @submit="signin" action="" class="form-group pt-4 pl-4 pr-4">
            <div class="form-group">
              <label for="">name</label>
              <input v-model="name" type="text" class="form-control" />
            </div>

            <div class="form-group">
              <label for="">Password</label>
              <input v-model="pass" type="password" class="form-control" />
            </div>

            <button class="btn btn-primary mt-2 py-0">Continue</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";

export default {
  props: ["baseURL", "admin"],
  data() {
    return {
      name: null,
      pass: null,
    };
  },
  methods: {
    async signin(e) {
      e.preventDefault();
      const isAdmin = this.admin.some(
        (admin) => admin.name === this.name && admin.pass == this.pass
      );
      if (isAdmin == true) {
        await this.$store.dispatch("loginAdmin", {
          name: this.name,
          pass: this.pass,
        }); // Dispatch login action
        this.$router.replace("/admin/product");
        swal({
          text: "Đăng nhập thành công",
          icon: "success",
        });
      } else {
        swal({
          text: "Đăng nhập không thành công! Email hoặc Password không trùng khớp",
          icon: "error",
        });
      }
    },
  },
};
</script>

<style></style>
