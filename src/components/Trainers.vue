<template>
    <div class="trainer">
        <h3>专属教练任性约</h3>
        <ul>
            <router-link 
                to="/"
                v-for="(item,index) in trainData"
                :key="index"
            >
                <li class="trainer-li">
                    <div class="trainer-img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="trainer-title">
                        <p>{{item.name}}</p>
                        <p>{{item.title}}</p>
                    </div>
                    <span>预约</span>
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>

export default {
    name:"Trainer",
    data(){
        return{
            trainData:{}
        }
    },
    mounted() {
        this.$axios.get(this.HOST)
        .then(res => {
            this.trainData = res.data
        })
        .catch(error => {
            console.log(error)
        })
    },
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
    margin-bottom: 2px;
}
a{
    color: #000;
    text-decoration: none;
}

.trainer-li{
    width: 100%;
    height: 90px;
    margin-bottom: 10px;
    background: #fff;
    list-style: none;
}
.trainer-li>div{
    float: left;
    margin-top: 10px;
}
.trainer-img img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    float: left;
    margin-left: 5px;
    margin-right: 10px;
}
.trainer-title{
    float: left;
    width: 55%;
    height: 70px;
}
.trainer-title>p:first-child{
    width: 100%;
    height: 50%;
    line-height: 35px;
}
.trainer-title>p:last-child{
    width: 100%;
    height: 50%;
    line-height: 35px;
    font-size: 14px;
}
.trainer-li>span{
    display: inline-block;
    text-align: center;
    line-height: 30px;
    width: 80px;
    height: 30px;
    background: #FED906;
    border-radius: 30px;
    margin-top: 30px;
}

</style>
