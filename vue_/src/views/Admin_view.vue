<template>
    <div class="container py-4">
        <router-link :to="{ name: 'Category' }">
            <Button class="btn">Admin Category</Button>
        </router-link>
        <br>
        <router-link :to="{ name: 'AdminProuduct' }">
            <Button class="btn">Admin Product</Button>
        </router-link>
    </div>

</template>

<script>
export default {

}
</script>

<style>
.btn {
    margin-bottom: 20px;
}
</style>