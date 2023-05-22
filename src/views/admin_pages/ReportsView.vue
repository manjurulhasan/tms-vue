<template lang="">
    <Layout>
        <div class="col-lg-12 col-md-12">
            <TopTitle>
                <div class="left_part">
                    <h2 class="arrow_icon icon_gap">Reports</h2>
                </div>
            </TopTitle>
            <div class="row">
                <div class="col-lg-7 col-md-7">
                    <div class="white_bg mt-0">
                        <div class="mb-4">
                            <select class="form-select form-control">
                                <option selected>Tenants</option>
                                <option >Shajib</option>
                                <option >Hasan</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <select class="form-select form-control">
                                <option selected>Report Period</option>
                                <option >Monthly</option>
                                <option >Quarterly</option>
                                <option >Annually</option>
                            </select>
                        </div>
                        <div class="submit_right">
                            <button type="submit" class="blue_btn"><font-awesome-icon icon="fa-solid fa-download" /> Download</button>
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