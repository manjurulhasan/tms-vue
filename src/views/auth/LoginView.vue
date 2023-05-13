<script lang="ts">
    import { defineComponent } from 'vue';
    import router from '@/router';
    export default defineComponent({
        components:{
            
        },
        data() {
            return {
                email: null,
                password: null,
                authMessage: {
                    show: false,
                    status: 'error',
                    message: 'success'
                }
            }
        },
        methods: {
            Login(){
                if(this.email && this.password){
                    this.authMessage.message = 'Login successful. Redirecting to dashboard';
                    this.authMessage.status = 'success';
                    this.authMessage.show = true;
                    setTimeout(function(){ router.push('/dashboard'); }, 1000);
                }else{
                    this.authMessage.message = 'Incorrect email or password.';
                    this.authMessage.status = 'error';
                    this.authMessage.show = true;
                }
            }
        },
    })
</script>

<template>
    <div class="auth-bg">
        <div class="bg-overlay bg-primary"></div>
        <div class="container">
            <!--sales_toggle part ends-->
            <div class="login">
                <!-- <form action=""> -->
                    <div class="login_form">
                        <p class="text-login">Log In</p>
                        <p class="text-login-details">Login by entering your email and password</p>
                        <div class="floating_field">
                            <input class="form-control" type="text" v-model="email" placeholder="Email">
                        </div>
                        <div class="floating_field">
                            <input class="form-control" type="password" v-model="password" placeholder="Password">
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="remember" name="remember_me">
                            <label for="remember"> Remember Me</label>
                        </div>
                        <div class="forgot d-flex justify-content-end">
                            <a href="#"> Forgot your password?</a>
                        </div>
                        <div v-if="authMessage.show" class="floating_field">
                            <div v-bind:class ="authMessage.status == 'error' ? 'alert-danger' : 'alert-success' " class="alert alert-dismissible fade show" role="alert">
                                {{ authMessage.message }}
                                <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                        </div>
                        <div class="login_submit">
                            <button class="btn blue_btn btn-success d-block w-100" @click="Login">Log In</button>
                        </div>
                    </div>
                <!-- </form> -->
            </div>
        </div>
    </div>

</template>

<style lang="">
    
</style>