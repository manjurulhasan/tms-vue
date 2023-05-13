<template lang="">
    <div class="wrapper">
        <AsideView />
        <!--include Aside here-->
        <!--Sidebar Ends-->
        <div class="main_content">
            <HeaderView />
            <!--header part include here-->
            <section class="main_body">
                <div class="row">
                    <slot></slot>
                </div>
            </section>
        <!--main_body Ends-->
        </div>
    </div>
</template>
<script>
import { RouterLink} from 'vue-router'
import AsideView from './AsideView.vue';
import HeaderView from './HeaderView.vue';
export default{
    components: {
        AsideView,
        HeaderView
    },
}
</script>
<style lang="">
    
</style>