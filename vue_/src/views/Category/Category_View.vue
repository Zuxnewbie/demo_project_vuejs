<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Our Categories</h3>
        <router-link :to="{ name: 'AddCategory' }">
          <Button class="btn">Add Category</Button>
        </router-link>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Category Name</th>
          <th scope="col">Action</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(category, index) in categories" :key="category.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ category.categoryName }}</td>
          <td>
            <router-link
              :to="{ name: 'EditCategory', params: { id: category.id } }"
            >
              Edit Category
            </router-link>
          </td>
          <td>
            <button @click="deleteCategory(category.id)">Delete Category</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  name: "Category_View",
  props: ["categories", "baseURL"],
  methods: {
    async deleteCategory(id) {
      try {
        await axios.delete(`${this.baseURL}category/${id}`);
        // Optionally, you might want to emit an event here to notify the parent component to update the list of categories.
        // this.$emit("categoryDeleted", id);
        swal({
          text: "Category has been deleted successfully",
          icon: "success"
        });
      } catch (error) {
        console.error("Error deleting category:", error);
        swal({
          text: "Error deleting category",
          icon: "error"
        });
      }
    }
  }
};
</script>
