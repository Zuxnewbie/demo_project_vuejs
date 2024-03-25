<template>
    <div class="container">
        <div class="row">
            <div class="col-12 justify-content-center d-flex flex-row pt-5">
                <div id="signin" class="flex-item border">
                    <h2 class="pt-4">Sign-in</h2>
                    <form @submit="signin" action="" class="form-group pt-4 pl-4 pr-4">
                        <div class="form-group">
                            <label for="">Email</label>
                            <input v-model="email" type="email" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="">Password</label>
                            <input v-model="password" type="password" class="form-control">
                        </div>

                        <button class="btn btn-primary mt-2 py-0">Continue</button>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
import swal from 'sweetalert';

export default {
    props: ['baseURL', 'users'],
    data() {
        return {
            email: null,
            password: null,
        }
    },
    methods: {
        async signin(e) {
            e.preventDefault();
            const isUser = this.users.some((user => user.email === this.email && user.password == this.password));
            if (isUser == true) {
                this.$router.replace("/")
                swal({
                    text: "Đăng nhập thành công",
                    icon: "success",
                })
            } else {
                swal({
                    text: "Đăng nhập không thành công! Email hoặc Password không trùng khớp",
                    icon: "error",
                })
            }
        }
    }
}
</script>

<style>
.btn-primary {
    background-color: #f0c14b;
    color: black;
}

@media screen {
    #signin {
        width: 40%;
    }
}
</style>