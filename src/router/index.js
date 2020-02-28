import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const Business= resolve =>{
  require.ensure(['../components/Menu/Business.vue'], ()=>{
    resolve(require('../components/Menu/Business.vue'))
  })
}

const Deserts= resolve =>{
  require.ensure(['../components/Menu/Deserts.vue'], ()=>{
    resolve(require('../components/Menu/Deserts.vue'))
  })
}

const First= resolve =>{
  require.ensure(['../components/Menu/First.vue'], ()=>{
    resolve(require('../components/Menu/First.vue'))
  })
}

const Wines= resolve =>{
  require.ensure(['../components/Menu/Wines.vue'], ()=>{
    resolve(require('../components/Menu/Wines.vue'))
  })
}

const Main= resolve =>{
  require.ensure(['../components/Menu/Main.vue'], ()=>{
    resolve(require('../components/Menu/Main.vue'))
  })
}

const Salads= resolve =>{
  require.ensure(['../components/Menu/Salads.vue'], ()=>{
    resolve(require('../components/Menu/Salads.vue'))
  })
}

const Comments= resolve =>{
  require.ensure(['../components/Comments.vue'], ()=>{
    resolve(require('../components/Comments.vue'))
  })
}

const Contact= resolve =>{
  require.ensure(['../components/Contact.vue'], ()=>{
    resolve(require('../components/Contact.vue'))
  })
}

const Story= resolve =>{
  require.ensure(['../components/Story.vue'], ()=>{
    resolve(require('../components/Story.vue'))
  })
}

const Choose= resolve =>{
  require.ensure(['../views/menuchoose.vue'], ()=>{
    resolve(require('../views/menuchoose.vue'))
  })
}

Vue.use(VueRouter)

const routes = [ //אני רוצה שהנתיב יטען לי מחדש כל פעם
  {             // מה שקרה שכל קטגוריה מעוצבת בדרך ובסגנון שלה ובנוסף זה לא אפשר להחליף קומפוננט בהשתנות הפארם
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/story',
    name:'story',
    component:Story
  },
  {
    path:'/comments', 
    name:'comments',
    component:Comments
  },
  {
    path:'/contact',
    name:'contact',
    component:Contact
  },
  {
    path:'/choose',
    name:'choose',
    component:Choose
  },
  {path:'/first',name:'first',component:First},
  {path:'/main',name:'main',component:Main},
  {path:'/salads',name:'salads',component:Salads},
  {path:'/business',name:'business',component:Business},
  {path:'/deserts',name:'deserts',component:Deserts},
  {path:'/wines',name:'wines',component:Wines},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
