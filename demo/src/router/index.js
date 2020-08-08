import Vue from 'vue'
import Router from 'vue-router'
const Cart = () => import('../view/cart/Cart')
const Category = () => import('../view/category/Category')
const Home = () => import('../view/home/Home')
const Profile = () => import('../view/profile/Profile')

Vue.use(Router)


const router = new Router({
  routes: [
    { path: '/', redirect: 'Home' },
    { path: '/Home', component: Home },
    { path: '/Category', component: Category },
    { path: '/Cart', component: Cart },
    { path: '/Profile', component: Profile },
  ]
})

// router.beforeEach( (to,from,next) => {
//   console.log(to)
//   document.title = to.matched[0].meta.title;
//   next();
// })

export default router;

