<template lang="">
    <Layout >
        <div class="col-lg-12">
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
                        <div class="col-lg-8 col-md-8 pb-4">
                            <div class="pay_total">
                                <div class="pay_box blue_border pe-3">
                                    <h4>Accounting</h4>
                                    <p class="pb-2">Jan 2023 - Jun 2023</p>
                                    <hr />
                                    <p class="pt-2 pb-2 text-uppercase">Average Monthly Income</p>
                                    <h3 class="text-magento mb-4">BDT 10,205,000</h3>
                                    <div class="total income mb-4">
                                        <div class="icon me-3">
                                            <font-awesome-icon icon="fa-solid fa-money-bill" />
                                        </div>
                                        <div class="total_text">
                                            <p class="text-uppercase">Total Income</p>
                                            <p>BDT 15,000,500</p>
                                        </div>
                                    </div>
                                    <div class="total expense">
                                        <div class="icon me-3">
                                            <font-awesome-icon icon="fa-solid fa-money-bill" />
                                        </div>
                                        <div class="total_text">
                                            <p class="text-uppercase">Total Income</p>
                                            <p class="mb-2">BDT 15,000,500</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="pay_box">
                                   
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="white_bg mb-0">
                                <h4 class="mb-4">Task Summary</h4>
                                <div class="task-list-summary">
                                    <div class="task-name">New Task</div>
                                    <div clalss="task_counts">
                                        <p class="text-primary bold">20</p>
                                    </div>
                                </div>
                                <div class="task-list-summary">
                                    <div class="task-name">In Progress</div>
                                    <div clalss="task_counts"><p class="text-warning bold">30</p></div>
                                </div>
                                <div class="task-list-summary">
                                    <div class="task-name">Finished</div>
                                    <div clalss="task_counts"><p class="text-success bold">20</p></div>
                                </div>
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
<style scoped>
    .bold{
        font-weight: bold;
    }
</style>