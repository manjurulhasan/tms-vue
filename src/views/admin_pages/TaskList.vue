<template lang="">
    <Layout>
        <div class="col-lg-12 col-md-12">
            <TopTitle>
                <div class="left_part">
                    <h2 class="arrow_icon icon_gap">Tasks</h2>
                </div>
                <div class="right_part sl_right">
                    <div class="filter">
                        <div class="adv_search">
                        <input type="text" placeholder="Search">
                        <button class="adv_src">
                            <font-awesome-icon icon="fa-solid fa-search" />
                        </button>
                    </div>
                    </div>
                    <div class="right_btn">
                        <RouterLink to="/tasks/create" class="btn blue_btn btn-success">
                            <font-awesome-icon icon="fa-solid fa-plus" /> Create Task
                        </RouterLink>
                    </div>
                </div>
            </TopTitle>
            <div class="row">
                <div class="cl-lg-12 col-md-12">
                    <div class="white_bg mb-0">
                        <div class="table-border">
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th class="w-15 text-uppercase">Task</th>
                                        <th class="w-15 text-uppercase">Entry Date</th>
                                        <th class="w-20 text-uppercase">Tenant Name</th>
                                        <th class="w-20 text-uppercase">PROPERTY DETAILS</th>
                                        <th class="w-15 text-uppercase">ASSIGNED TO</th>
                                        <th class="w-10 text-uppercase">Status</th>
                                        <th class="w-5"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="w-15">Fix Kitchen Cabinet</td>
                                        <td class="w-15">02/04/2023</td>
                                        <td class="w-20">Shajib Hasan</td>
                                        <td class="w-20">H#34, Rd#9/A, Dhanmondi</td>
                                        <td class="w-15">Benzadid Gani</td>
                                        <td class="w-10"> Active </td>
                                        <td class="w-5">
                                            <button class="transparent"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="w-15">Fix Kitchen Cabinet</td>
                                        <td class="w-15">02/04/2023</td>
                                        <td class="w-20">Shajib Hasan</td>
                                        <td class="w-20">H#34, Rd#9/A, Dhanmondi</td>
                                        <td class="w-15">Benzadid Gani</td>
                                        <td class="w-10"> Active </td>
                                        <td class="w-5">
                                            <button class="transparent"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="w-15">Fix Kitchen Cabinet</td>
                                        <td class="w-15">02/04/2023</td>
                                        <td class="w-20">Shajib Hasan</td>
                                        <td class="w-20">H#34, Rd#9/A, Dhanmondi</td>
                                        <td class="w-15">Benzadid Gani</td>
                                        <td class="w-10"> Active </td>
                                        <td class="w-5">
                                            <button class="transparent"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="w-15">Fix Kitchen Cabinet</td>
                                        <td class="w-15">02/04/2023</td>
                                        <td class="w-20">Shajib Hasan</td>
                                        <td class="w-20">H#34, Rd#9/A, Dhanmondi</td>
                                        <td class="w-15">Benzadid Gani</td>
                                        <td class="w-10"> Active </td>
                                        <td class="w-5">
                                            <button class="transparent"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="w-15">Fix Kitchen Cabinet</td>
                                        <td class="w-15">02/04/2023</td>
                                        <td class="w-20">Shajib Hasan</td>
                                        <td class="w-20">H#34, Rd#9/A, Dhanmondi</td>
                                        <td class="w-15">Benzadid Gani</td>
                                        <td class="w-10"> Active </td>
                                        <td class="w-5">
                                            <button class="transparent"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="w-15">Fix Kitchen Cabinet</td>
                                        <td class="w-15">02/04/2023</td>
                                        <td class="w-20">Shajib Hasan</td>
                                        <td class="w-20">H#34, Rd#9/A, Dhanmondi</td>
                                        <td class="w-15">Benzadid Gani</td>
                                        <td class="w-10"> Active </td>
                                        <td class="w-5">
                                            <button class="transparent"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="w-15">Fix Kitchen Cabinet</td>
                                        <td class="w-15">02/04/2023</td>
                                        <td class="w-20">Shajib Hasan</td>
                                        <td class="w-20">H#34, Rd#9/A, Dhanmondi</td>
                                        <td class="w-15">Benzadid Gani</td>
                                        <td class="w-10"> Active </td>
                                        <td class="w-5">
                                            <button class="transparent"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
<script>
import Layout from '../common/LayoutView.vue';
import TopTitle from '../../components/TopTitle.vue';
export default {
    components: {
        Layout,TopTitle
    },
}
</script>
<style scoped>
    .w-5{
        width: 5%;
    }
    .w-10{
        width: 10%;
    }
    .w-15{
        width: 15%;
    }
    .w-20{
        width: 20%;
    }
    .w-25{
        width: 25%;
    }
</style>