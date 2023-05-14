<template lang="">
    <Layout >
        <div class="col-lg-12">
            <div class="top_part">
                <div class="left_part">
                    <h2 class="arrow_icon icon_gap">Dashboard</h2>
                </div>
            </div>
            <!--top_part ends-->
            <div class="row">
                <div class="col-lg-8 d-inline-grid bs-100">
                    <div class="white_bg mt-4 mb-0">
                        <div class="dash_statistics">
                            <div class="welcome">
                                <div class="user_image me-3">
                                    <img src="../../assets/images/avatar.jpg" />
                                </div>
                                <div class="user_info">
                                    <h3>Hello, Shajib!</h3>
                                    <p>Take a look at your accounts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="dash_cost">
                    <div class="row rows">
                        <div class="col-lg-8 col-md-8 p8">
                            <div class="pay_total">
                                <div class="pay_box blue_border">
                                    <h4>Accounting</h4>
                                    <p>Jan 2023 - Jun 2023</p>
                                </div>
                                <div class="pay_box">

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="white_bg mt-4 mb-0">
                                <h4>Task List</h4>
                            </div>
                                        
                        </div>
                    </div>
                </div>
            </div>
            <!--dash_cost ends-->

        </div>
    </Layout>
</template>
<script>
import Layout from '../common/LayoutView.vue';
export default{
    components: {
        Layout,
    },
}
</script>
<style lang="">
    
</style>