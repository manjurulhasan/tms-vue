<template lang="">
    <Layout>
        <div class="col-lg-12 col-md-12">
            <TopTitle>
                <div class="left_part">
                    <h2 class="">Add Bill</h2>
                </div>
            </TopTitle>
            <div class="row">
                <div class="cl-lg-12 col-md-12">
                    <div class="white_bg mb-0">
                        <div class="row">
                            <h5 class="mb-4">General info</h5>
                            <div class="col-lg-6 col-md-6 mb-3">
                                <div class="form-floating">
                                    <select class="form-select" aria-label="Select Year">
                                        <option value="2023" selected>2023</option>
                                        <option value="2022">2022</option>
                                    </select>
                                    <label> <span class="label-bg-white">Year</span></label>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 mb-3">
                                <div class="form-floating">
                                    <select class="form-select" aria-label="Select Year">
                                        <option value="January" selected>January</option>
                                        <option value="February" >February</option>
                                    </select>
                                    <label> <span class="label-bg-white">Month</span></label>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 mb-3">
                                <div class="form-floating">
                                    <select class="form-select" aria-label="Select Year">
                                        <option value="NAM Village" selected>NAM Village </option>
                                    </select>
                                    <label> <span class="label-bg-white">Name of Property</span></label>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 mb-3">
                                <div class="form-floating">
                                    <select class="form-select" aria-label="Select Year">
                                        <option value="A1" selected>A1</option>
                                        <option value="B3">B3</option>
                                    </select>
                                    <label> <span class="label-bg-white">Flat Number</span></label>
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
<style lang="">
    
</style>