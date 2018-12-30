<template>
    <div class="top">
        <ul>
            <li>
                <router-link to="/bodybuild/train">
                    训练
                </router-link>
            </li>
            <li>
                <router-link to="/bodybuild/trainer">
                    教练
                </router-link>
            </li>
            <li>
                <router-link to="/bodybuild/course">
                    课程
                </router-link>
            </li>
            <li>
                <router-link to="/bodybuild/fodder">
                    素材
                </router-link>
            </li>
            <router-link to="/search">
                  <i class="iconfont">&#xe614;</i>
            </router-link>
        </ul>
    </div>
</template>

<script>

export default {
    name:"TopNav",
    data(){
        return{

        }
    }
}
</script>

<style scoped>

a{
    text-decoration: none;
    font-size: 18px;
    color: #fff;
}
i{
    display: inline-block;
    width: 36px;
    height: 50px;
    font-size: 24px;
    margin-top: 13px;
}
ul{
    display: flex;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #181818;
}
ul li{
    list-style-type: none;
    flex: 1;
    text-align: center;
    line-height: 50px;
    position: relative;
}
.router-link-active{
    color: #FDDF05;
}
.router-link-active::after{
    content:"";
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    top: 48px;
    left: 0;
    background: #FDDF05;
}

</style>
