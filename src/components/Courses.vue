<template>
    <div class="courses">
        <ul class="course-nav">
            <li v-on:click="show1">
                难易程度
                <i class="iconfont" v-if="up1">&#xe62c;</i>
                <i class="iconfont" v-if="down1">&#xe62e;</i>
            </li>
            <li v-on:click="show2">
                不限器材
                <i class="iconfont" v-if="up2">&#xe62c;</i>
                <i class="iconfont" v-if="down2">&#xe62e;</i>
            </li>
            <li v-on:click="show3">
                不限部位
                <i class="iconfont" v-if="up3">&#xe62c;</i>
                <i class="iconfont" v-if="down3">&#xe62e;</i>
            </li>
        </ul>
        <div v-if="difficultyPart" class="part">
            <Difficulty />
        </div>
        <div v-if="apparatusPart" class="part">
            <Apparatus />
        </div>
        <div v-if="showPart" class="part">
            <Part />
        </div> 
        <router-link to="/" v-for="(item,index) in courseData" :key="index">
            <div class="courses-img">
                <img :src="item.img" alt="">
                <div class="courses-title">
                    <h3>{{item.title}}</h3>
                    <div class="courses-title1">
                        <span>{{item.time}}</span>
                        <span>燃脂{{item.hot}}/千卡</span>
                    </div>
                    <div class="courses-title2"> 
                        <span>{{item.L1}}</span>
                        <span>{{item.buwei}}</span>
                    </div>
                </div>
                <p>已有{{item.numbers}}人参与</p>
            </div>
        </router-link>
    </div>
</template>

<script>

import Part from "./CourseHidden/Part"
import Apparatus from "./CourseHidden/Apparatus"
import Difficulty from "./CourseHidden/Difficulty"

export default {
    name:"Courses",
    data(){
        return{
            courseData:[],
            showPart:false,
            apparatusPart:false,
            difficultyPart:false,
            up1:true,
            down1:false,
            up2:true,
            down2:false,
            up3:true,
            down3:false
        }
    },
    components:{
        Part,
        Apparatus,
        Difficulty
    },
    methods: {
        show1(){
            this.difficultyPart = !this.difficultyPart,
            this.up1 = !this.up1,
            this.down1 = !this.down1
        },
        show2(){
            this.apparatusPart = !this.apparatusPart,
            this.up2 = !this.up2,
            this.down2 = !this.down2
        },
        show3(){
            this.showPart = !this.showPart,
            this.up3 = !this.up3,
            this.down3 = !this.down3
        }
    },
    mounted() {
        this.$axios.get(this.HOST1)
        .then(res => {
            this.courseData = res.data
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>

<style scoped>

.part{
    position: absolute;
    top: 95px;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 800;
}
.courses{
    margin-top: 50px;
    margin-bottom: 60px;
}
.course-nav{
    width: 100%;
    height: 45px;
    display: flex;
}
.course-nav li{
    float: left;
    flex: 1;
    list-style: none;
    line-height: 45px;
    text-align: center;
}
.courses-img{
    width: 100%;
    height: 160px;
    padding-top: 10px;
    background: #fff;
    position: relative;
}
.courses-img img{
    width: 96%;
    height: 100%;
    margin-left: 2%;
}
a{
    color: rgba(255,255,255,0.9)
}
.courses-title{
    position: absolute;
    top: 30px;
    left: 30px;
}
.courses-title>h3{
    font-size: 20px;
    margin-bottom: 10px;
}
.courses-title1{
    font-size: 14px;
    margin-bottom: 10px;
}
.courses-title1>span:first-child,.courses-title2>span:first-child{
    margin-right: 15px;
}
.courses-title2{
    font-size: 14px;
}
.courses-img p{
    position: absolute;
    right: 20px;
    bottom: 10px;
    font-size: 14px;
}

</style>
