<template lang="">
    <header>
        <div class="header_left">
            <div class="toggle" onclick="toggleMenu()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.28307 19L20 19M19.9996 12L4 12M20 5L12.9719 5" stroke="#100F2E" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
            </div>
        </div>
        <div class="header_right">
            <div class="profile">
                <div class="notification new_alert">
                    <a href="#">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 5.83887C11 5.28658 10.7989 3.9998 12 3.9998C13.201 3.9998 13 5.28658 13 5.83887" stroke="#0A1436" stroke-width="1.5"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 12.8389C5 8.97288 8.13401 5.83887 12 5.83887V5.83887C15.866 5.83887 19 8.97287 19 12.8389V17.484C19 17.512 19.0101 17.539 19.0284 17.5602L19.5686 18.1846C20.1291 18.8323 19.6689 19.8389 18.8124 19.8389H5.18761C4.33107 19.8389 3.87094 18.8323 4.43139 18.1846L4.97161 17.5602C4.98992 17.539 5 17.512 5 17.484V12.8389Z" stroke="#0A1436" stroke-width="1.5"/>
                            <path d="M10 20.5889C10 21.6934 10.8954 22.5889 12 22.5889C13.1046 22.5889 14 21.6934 14 20.5889" stroke="#0A1436" stroke-width="1.5"/>
                            </svg>
                    </a>
                </div>
                <div class="dropdown">
                    <div class="account" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="image">
                            <img src="../../assets/images/avatar.jpg" alt="person">
                        </div>
                        <div class="title">
                            <h3>Manjurul Hasan</h3>
                            <p>CTO</p>
                        </div>
                    </div>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Profile</a>
                        <a class="dropdown-item" href="#" @click="Logout">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
    export default defineComponent({
        components:{
            
        },
        data() {
            return {
                //
            }
        },
        methods: {
            Logout(){
                this.$router.push('/login')
            }
        },
    })
</script>
<style lang="">
    
</style>