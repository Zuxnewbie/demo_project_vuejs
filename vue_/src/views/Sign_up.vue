<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center pt-3">
                <!-- display logo -->
            </div>
        </div>

        <!-- header -->
        <div class="row ">
            <div class="col-12 justify-content-center d-flex pt-3">
                <div id="signup" class="flex-item border">
                    <h2 class="pt-4 pl-4">Create account</h2>
                    <form @submit="signup" class="pt-4 pl-4 pr-4">
                        <div class="form-group">
                            <label for="Email">Email</label>
                            <input type="email" v-model="email" class="form-control" required>
                        </div>

                        <div class="form-row">
                            <div class="col">
                                <div class="from-group">
                                    <label for="">Frist Name</label>
                                    <input type="text" v-model="firstName" class="form-control" required>
                                </div>
                            </div>
                            <div class="col">
                                <div class="from-group">
                                    <label for="">Last Name</label>
                                    <input type="text" v-model="lastName" class="form-control" required>
                                </div>
                            </div>
                        </div>

                        <div class="from-group pt-1">
                            <label for="Password">Password</label>
                            <input type="password" v-model="password" class="form-control" required>
                        </div>


                        <div class="from-group pt-1 ">
                            <label for="Password">Confirm Password</label>
                            <input type="password" v-model="ConfirmPassword" class="form-control" required>
                        </div>
                        <button class="btn btn-primary mt-2">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
    props: ['baseURL', 'users'],
    data() {
        return {
            email: null,
            firstName: null,
            lastName: null,
            password: null,
            ConfirmPassword: null
        }
    },
    methods: {
        async signup(e) {
            e.preventDefault();
            if (this.password === this.ConfirmPassword) {
                const userWithEmailExists = this.users.some(user => user.email === this.email);
                if (userWithEmailExists) {
                    swal({
                        text: "Đăng ký không thành công, Email đã tồn tại",
                        icon: "error",
                    });
                } else {
                    const user = {
                        email: this.email,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        password: this.password
                    };
                    console.log("user", user);
                    await axios.post(`${this.baseURL}user`, user)
                        .then(() => {
                            this.$router.replace("/")
                            swal({
                                text: "Đăng ký thành công, làm ơn đơn nhập",
                                icon: "success",
                            })
                        })
                        .catch(err => console.log("err", err));
                }
            } else {
                swal({
                    text: "Đăng ký không thành công, Password không trùng khớp",
                    icon: "error",
                });
            }
        }
    }
}
</script>

<style scoped>
.btn-primary {
    background-color: #f0c14b;
    color: #000;
}

@media screen {
    #signup {
        width: 40%;
    }
}
</style>
