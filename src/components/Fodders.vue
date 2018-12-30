<template>
    <div class="fodders">
        <h3>音乐库</h3>
        <div class="fodders-title">
            <router-link 
                to="/"
                v-for="(item,index) in fodderData"
                :key="index"
            >
                <div class="fodders-titles">
                    <img :src="item.img" alt="">
                    <span>{{item.state}}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"Fodders",
    data(){
        return{
            fodderData:[]
        }
    },
    mounted() {
        this.$axios.get(this.HOST2)
        .then(res => {
            this.fodderData = res.data
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>

<style scoped>

.fodders{
    margin-top: 50px;
    margin-bottom: 60px;
    overflow: hidden;
    background: #fff;
}

h3{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    font-weight: normal;
    margin-left: 5px;
}
a{
    color: #000;
}
.fodders-title{
    width: 70%;
    margin-left: 15%;
}
.fodders-titles{
    float: left;
    width: 40%;
    height: 150px;
    margin-right: 20%;
    margin-bottom: 25px;
}
.fodders-title>a:nth-child(2n)>div{
    margin-right: 0;
}
.fodders-title div img{
    width: 100%;
    height: 100px;
    margin-bottom: 5px;
}

</style>
