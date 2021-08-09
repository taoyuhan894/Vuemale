import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')
const Profiy = () => import('views/profiy/Profiy.vue')
const Detail = () => import('views/detail/Detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '主页'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: '商品分类'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profiy',
    component: Profiy,
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/detail/:iid',
    component: Detail,
    meta: {
      title: '商品详情',
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach((to,from,next) => {
  document.title = to.matched[0].meta.title
  next()
})
export default router
