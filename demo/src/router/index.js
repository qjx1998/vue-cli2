import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('@/components/HelloWorld')
const About = () => import('@/components/About')
const Shop = () => import('@/components/Shop')

Vue.use(Router)


const router = new Router({
  routes: [
    {path: '/',  component: HelloWorld,
      meta: {
        title : "您好"
      }
    },
    {
      path: '/About', component: About,
      meta: {
        title: "关于"
      }
    },
    {
      path: '/Shop', component: Shop,
      meta: {
        title: "商店"
      }
    }
  ]
})

router.beforeEach( (to,from,next) => {
  console.log(to)
  document.title = to.matched[0].meta.title;
  next();
})

export default router;

