<template lang="">
    <Layout>
        <div class="col-lg-12 col-md-12">
            <topTitle>
                <div class="left_part">
                    <h2 class="arrow_icon icon_gap">Add a Manager</h2>
                </div>
                <div class="right_part sl_right">
                    <div class="right_btn">
                        <RouterLink to="/managers/create" class="blue_btn sl_btn">
                            <font-awesome-icon icon="fa-solid fa-save" /> Save
                        </RouterLink>
                    </div>
                </div>
            </topTitle>

                <div class="row">
                    <div class="col-lg-9 col-md-9">
                        <div class="white_bg mt-0">
                            <form action="">
                                <div class="create_form">
                                    <h2>General Information</h2>
                                    <div class="field_row">
                                        <div class="col-lg-6 col-md-6">
                                            <div class="floating_field">
                                                <select class="select_item form-control floating_select">
                                                        <option selected>Manager</option>
                                                </select>
                                                <label>Role <span class="valid_star">*</span></label>
                                            </div>
                                        </div>
                                        
                                        <div class="col-lg-6 col-md-6">
                                            <div class="floating_field calendar_icon">
                                                <input type="date">
                                                <label>Joining Date</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field_row">
                                        <div class="col-md-6">
                                            <div class="floating_field">
                                                <input type="text" required>
                                                <label>First Name <span class="valid_star">*</span></label>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="floating_field calendar_icon">
                                                <input type="date">
                                                <label>Date of Birth</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field_row">
                                        <div class="col-lg-6 col-md-6">
                                            <div class="floating_field">
                                                <input type="text" required>
                                                <label>Last Name <span class="valid_star">*</span></label>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="floating_field">
                                                <input type="text" required>
                                                <label>Email <span class="valid_star">*</span></label>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="field_row">
                                        <div class="col-lg-6 col-md-6">
                                            
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="floating_field">
                                                <select class="select_item form-control floating_select">
                                                        <option selected>Active</option>
                                                        <option>Deactive</option>
                                                </select>
                                                <label>Status <span class="valid_star">*</span></label>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <!--main information ends-->
                                    <h2>Contact information</h2>
                                    <div class="field_row">
                                        
                                        <div class="col-lg-6 col-md-6">
                                            <div class="floating_field">
                                                <input type="text">
                                                <label>Street Address</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="floating_field">
                                                <input type="text" required>
                                                <label>Phone <span class="valid_star">*</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field_row">
                                        <div class="col-lg-6 col-md-6">
                                            <div class="floating_field">
                                                <select class="select_item form-control floating_select">
                                                        <option selected>Dhaka</option>
                                                </select>
                                                <label>City <span class="valid_star">*</span></label>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="floating_field">
                                                <input type="text" required>
                                                <label>Post Code <span class="valid_star">*</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <!--account information ends-->
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="mol-lg-3 col-md-3">
                        <div class="white_bg mt-0">
                            <div class="picture_up">
                                <label class="photo_upload">
                                    <input type="file">
                                    <div class="img_upload"></div>
                                </label>
                                <div class="picture_des">
                                    <p>Max 5 MB, jpg or jpeg or png<br>photo supported only.
                                    </p>
                                </div>
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
<style lang="">
    
</style>