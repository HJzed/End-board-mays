<template>
    <div class="train-plan">
        <div class="plan">
            <h3>我的计划</h3>
            <img :src="plan" alt="">
        </div>
        <div class="record">
            <h3>训练记录</h3>
            <div class="records">
                <div class="record-left">
                    <div class="record-left1">人鱼线雕刻</div>
                    <div class="record-left2">
                        <span>难度</span>
                        <span>37千卡</span>
                    </div>
                </div>
                <div class="record-right">
                    3分钟
                </div>
            </div>
        </div>
        <div class="add-train">
            <h3>添加训练<i class="iconfont">&#xe641;</i></h3>
            <img :src="adds" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:"TrainPlan",
    data(){
        return{
            plan:require("../assets/img/训练01.jpg"),
            adds:require("../assets/img/训练02.jpg"),
            courseData:[]
        }
    },
    mounted() {
        this.$axios.get(this.HOST1)
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    },
}
</script>

<style scoped>

.train-plan{
    margin-top: 50px;
    margin-bottom: 60px;
}
.plan{
    width: 100%;
    background: #fff;
}
img{
    width: 94%;
    height: 160px;
    margin-left: 3%;
    margin-bottom: 10px;
}
h3{
    display: inline-block;
    text-align: center;
    font-weight: normal;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.record{
    margin-top: 10px;
    width: 100%;
    height: 140px;
    background: #fff;
}
.records{
    width: 100%;
    height: 80px;
    border-bottom: 2px solid #EFEFEF;
    border-top: 2px solid #EFEFEF;
}
.record-left{
    float: left;
    width: 150px;
    height: 100%;
}
.record-left1{
    width: 100%;
    height: 60%;
    line-height: 50px;
    margin-left: 5px;
}
.record-left2{
    width: 100%;
    height: 40%;
    margin-left: 5px;
    font-size: 14px;
    line-height: 30px;
}
.record-left2>span:last-child{
    float: right;
}
.record-right{
    float: right;
    line-height: 80px;
    margin-right: 5px;
}
h3 i{
    float: right;
    margin-right: 5px;
}
.add-train{
    width: 100%;
    background: #fff;
    margin-top: 10px;
}

</style>
