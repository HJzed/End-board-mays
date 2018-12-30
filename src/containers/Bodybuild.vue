<template>
    <div>
        <TopNav />
        <router-view></router-view>
        <BottomNav />
    </div>
</template>

<script>

import TopNav from "../components/TopNav"
import BottomNav from "../components/BottomNav"

export default {
    name:"Bodybuild",
    components:{
        TopNav,
        BottomNav
    }
}
</script>

<style scoped>

</style>
