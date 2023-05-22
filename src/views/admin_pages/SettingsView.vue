<template lang="">
    <Layout>
        <div class="col-lg-12 col-md-12">
            <TopTitle>
                <div class="left_part">
                    <h2 class="arrow_icon icon_gap">Settings</h2>
                </div>
            </TopTitle>
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="white_bg mt-0">
                        <h5 class="mb-4">Set Global Options</h5>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 mb-3">
                                <div class="form-floating">
                                    <input type="text" class="form-control" placeholder="Monthly Rent">
                                    <label> <span class="label-bg-white">Monthly Rent</span></label>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 mb-3">
                                <div class="form-floating">
                                    <input type="text" class="form-control" placeholder="Gas Bill">
                                    <label>
                                        <span class="label-bg-white">Gas Bill</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 mb-3">
                                <div class="form-floating">
                                    <input type="text" class="form-control" placeholder="Utility Payment">
                                    <label>
                                        <span class="label-bg-white">Utility Payment</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 mb-3">
                                <div class="form-floating">
                                    <input type="text" class="form-control" placeholder="Water Bill">
                                    <label>
                                        <span class="label-bg-white">Water Bill</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 mb-3">
                                <div class="form-floating">
                                    <input type="text" class="form-control" placeholder="Electricity Bill">
                                    <label>
                                        <span class="label-bg-white">Electricity Bill</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 mb-3">
                                <div class="form-floating">
                                    <input type="text" class="form-control" placeholder="Internet Fees">
                                    <label>
                                        <span class="label-bg-white">Internet Fees</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 mb-3">
                                <div class="form-floating">
                                    <input type="text" class="form-control" placeholder="Cable Charges">
                                    <label>
                                        <span class="label-bg-white">Cable Charges</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 mb-3">
                                <div class="form-floating">
                                    <input type="text" class="form-control" placeholder="Newspaper Fees">
                                    <label>
                                        <span class="label-bg-white">Newspaper Fees</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 mb-3">
                                <div class="form-floating">
                                    <input type="text" class="form-control" placeholder="Service Charge">
                                    <label>
                                        <span class="label-bg-white">Service Charge</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <!--Submit & addmore Button starts-->
                                <div class="submit_right mb-30 mbl--block">
                                    <button class="delete_outline_btn btn_gap" type="button" data-toggle="modal" data-target="#deleteField">-Remove Fields</button>
                                    <button class="add_btn " type="button" data-toggle="modal" data-target="#addMore">+Add Fields</button>
                                </div>
                                <!--Submit & addmore Button ends-->
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-lg-12 col-md-12">
                            <div class="white_bg mt-0">
                                <div class="submit_right">
                                    <button type="button" class="btn btn-selected me-4">Apply to Selected </button>
                                    <button type="submit" class="btn btn-success px-4">Apply to All</button>
                                </div>
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
<style scoped>
    .btn-selected{
        width: 187px;
        height: 56px;
        background: #D9F2E1;
        border-radius: 8px;

    }
    .btn-selected:hover {
        background: #D9F2E1;
    }
    .btn-selected:active {  
        background: #D9F2E1;
        border-color: #198754;
    }
    .white_bg h5{
        font-size: 16px;
    }
</style>