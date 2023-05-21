<template lang="">
    <Layout>
        <div class="col-lg-12 col-md-12">
            <TopTitle>
                <div class="left_part">
                    <h2 class="arrow_icon icon_gap">Support</h2>
                </div>
            </TopTitle>
            <div class="row">
                <div class="col-lg-7 col-md-7">
                    <div class="white_bg mt-0">
                        <div class="mb-3">
                            <select class="form-select">
                                <option selected>Reason for Support</option>
                                <option >Bug</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" rows="6" placeholder="Write more details here"></textarea>
                        </div>
                        <div class="submit_right">
                            <button type="submit" class="blue_btn">Submit</button>
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