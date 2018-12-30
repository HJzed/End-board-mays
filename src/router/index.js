import Vue from 'vue'
import Router from 'vue-router'
import Index from "../containers/Index"
import Bodybuild from "../containers/Bodybuild"
import Found from "../containers/Found"
import Mine from "../containers/Mine"

import Fodder from "../containers/Bodybuilds/Fodder"
import Trainer from "../containers/Bodybuilds/Trainer"
import Course from "../containers/Bodybuilds/Course"
import Train from "../containers/Bodybuilds/Train"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/bodybuild',
      name: 'Bodybuild',
      component: Bodybuild,
      redirect:"/bodybuild/train",
      children:[
        {
          path: 'train',
          name: 'Train',
          component: Train
        },
        {
          path: 'fodder',
          name: 'Fodder',
          component: Fodder
        },
        {
          path: 'course',
          name: 'Course',
          component: Course
        },
        {
          path: 'trainer',
          name: 'Trainer',
          component: Trainer
        }
      ]
    },
    {
      path: '/found',
      name: 'Found',
      component: Found
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
  ]
})
