<template>
    <div>
        <Trainers />
    </div>
</template>

<script>

import Trainers from "../../components/Trainers"

export default {
    name:"Trainer",
    components:{
        Trainers
    }
}
</script>

<style scoped>

.trainer{
    margin-top: 50px;
    margin-bottom: 60px;
}
h3{
    display: inline-block;
    text-align: center;
    font-weight: normal;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #fff;
    margin-bottom: 1px;
}

</style>
