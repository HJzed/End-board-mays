<template>
    <div class="sports">
        <ul>
            <li>
                <router-link to="/index">
                    <i class="iconfont">&#xe629;</i>
                    首页
                </router-link>
            </li>
            <li>
                <router-link to="/bodybuild">
                    <i class="iconfont">&#xe883;</i>
                    健身
                </router-link>
            </li>
            <li>
                <router-link to="/found">
                    <i class="iconfont">&#xe609;</i>
                    发现
                </router-link>
            </li>
            <li>
                <router-link to="/mine">
                    <i class="iconfont">&#xe658;</i>
                    我的
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name:"BottomNav",
    data(){
        return{

        }
    }
}
</script>

<style scoped>

a{
    text-decoration: none;
    font-size: 15px;
    color: #8B8B8B;
}
i{
    display: block;
    font-size: 22px;
    margin-top: 5px;
}
ul{
    display: flex;
    height: 60px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #181818;

}
ul li{
    list-style-type: none;
    flex: 1;
    text-align: center;
}
.router-link-active{
    color: #FDDF05;
}

</style>
