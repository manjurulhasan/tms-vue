<template lang="">
    <Layout>
        <div class="col-lg-12 col-md-12">
           <topTitle>
            <div class="left_part">
                <h2 class="arrow_icon icon_gap">Managers</h2>
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
                    <RouterLink to="/managers/create" class="blue_btn sl_btn">
                        <font-awesome-icon icon="fa-solid fa-plus" /> Add Manager
                    </RouterLink>
                </div>
            </div>
           </topTitle>
           <div class="white_bg mb-0">
                <div class="table-border">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th class="text-uppercase">Name</th>
                                <th class="text-uppercase">Email</th>
                                <th class="text-uppercase">Role</th>
                                <th class="text-uppercase">Mobile</th>
                                <th class="text-uppercase">Address</th>
                                <th class="text-uppercase">Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="w-20">Shajib Hasan</td>
                                <td class="w-20">shajib@tms.com</td>
                                <td>Admin</td>
                                <td class="w-15">555566665</td>
                                <td class="w-20">Dhanmondi 9/A</td>
                                <td> Active </td>
                                <td >
                                    <button class="transparent"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="w-20">Shajib Hasan</td>
                                <td class="w-20">shajib@tms.com</td>
                                <td>Admin</td>
                                <td class="w-15">555566665</td>
                                <td class="w-20">Dhanmondi 9/A</td>
                                <td> Active </td>
                                <td >
                                    <button class="transparent"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="w-20">Shajib Hasan</td>
                                <td class="w-20">shajib@tms.com</td>
                                <td>Admin</td>
                                <td class="w-15">555566665</td>
                                <td class="w-20">Dhanmondi 9/A</td>
                                <td> Active </td>
                                <td >
                                    <button class="transparent"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="w-20">Shajib Hasan</td>
                                <td class="w-20">shajib@tms.com</td>
                                <td>Admin</td>
                                <td class="w-15">555566665</td>
                                <td class="w-20">Dhanmondi 9/A</td>
                                <td> Active </td>
                                <td >
                                    <button class="transparent"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="w-20">Shajib Hasan</td>
                                <td class="w-20">shajib@tms.com</td>
                                <td>Admin</td>
                                <td class="w-15">555566665</td>
                                <td class="w-20">Dhanmondi 9/A</td>
                                <td> Active </td>
                                <td >
                                    <button class="transparent"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="w-20">Shajib Hasan</td>
                                <td class="w-20">shajib@tms.com</td>
                                <td>Admin</td>
                                <td class="w-15">555566665</td>
                                <td class="w-20">Dhanmondi 9/A</td>
                                <td> Active </td>
                                <td >
                                    <button class="transparent"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="w-20">Shajib Hasan</td>
                                <td class="w-20">shajib@tms.com</td>
                                <td>Admin</td>
                                <td class="w-15">555566665</td>
                                <td class="w-20">Dhanmondi 9/A</td>
                                <td> Active </td>
                                <td >
                                    <button class="transparent"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="w-20">Shajib Hasan</td>
                                <td class="w-20">shajib@tms.com</td>
                                <td>Admin</td>
                                <td class="w-15">555566665</td>
                                <td class="w-20">Dhanmondi 9/A</td>
                                <td> Active </td>
                                <td >
                                    <button class="transparent"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                                </td>
                            </tr>
                            <tr>
                                <td class="w-20">Shajib Hasan</td>
                                <td class="w-20">shajib@tms.com</td>
                                <td>Admin</td>
                                <td class="w-15">555566665</td>
                                <td class="w-20">Dhanmondi 9/A</td>
                                <td> Active </td>
                                <td >
                                    <button class="transparent"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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