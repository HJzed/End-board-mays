// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
Vue.prototype.$axios = Axios;
Vue.prototype.HOST = "/trainer_api";
Vue.prototype.HOST1 = "/course_api";
Vue.prototype.HOST2 = "/fodder_api";
Vue.prototype.HOST3 = "/part_api";
Vue.prototype.HOST4 = "/apparatus_api";
Vue.prototype.HOST5 = "/difficulty_api";

import "./assets/fontcss/iconfont.css"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
