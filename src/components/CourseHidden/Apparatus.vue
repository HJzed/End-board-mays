<template>
    <div>
        <span 
            v-for="(item,index) in apparatusData"
            :key="index"
            v-on:click="addClassFun(index)" v-bind:class='{class1:index==qwerqwre}'
        >
            {{ item.name }}
        </span>
    </div>
</template>

<script>
export default {
    name:"Apparatus",
    data(){
        return{
            apparatusData:[],
            qwerqwre:"0"
        }
    },
    methods: {
        addClassFun: function(index) {
            this.qwerqwre = index;
        }
    },
    mounted() {
        this.$axios.get(this.HOST4)
        .then(res => {
            this.apparatusData = res.data
        })
        .catch(error => {
            console.log(error)
        })
    },
}
</script>

<style scoped>

div{
    width: 100%;
    height: 90px;
}
span{
    display: inline-block;
    width: 20%;
    height: 24px;
    border: 1px solid #DDDDDD;
    border-radius: 24px;
    margin-left: 4%;
    margin-top: 3%;
    text-align: center;
    line-height: 24px;
    font-size: 14px;
}
a{
    color: #000;
}
.class1{
    background: #FDD806;
    border: 1px solid #FDD806;
}

</style>
