import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import corteDamas from '../views/CorteDamasView.vue'
import InformaciondetalleView from '../views/InformacionDetalleView.vue'
import cortehombres from '../views/CorteHombresView.vue'
import informaciondetallemujerView from '../views/InformacionDetalleMujerView.vue'
import informaciondetallleHombreView from '../views/InformacionDetalleHombreView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
  path: '/InformaciondetalleView',
  name: 'InformaciondetalleView',
  component: InformaciondetalleView
},
  {
    path: '/cortedamas',
    name: 'cortedamas',
    component: corteDamas
  },
  {
    path: '/cortehombres',
    name: 'cortehombres',
    component: cortehombres
  },
  {
    path: '/informaciondetallemujerView',
    name: 'informaciondetallemujerView',
    component: informaciondetallemujerView
  },
  {
    path: '/informaciondetallleHombreView',
    name: 'informaciondetallleHombreView',
    component: informaciondetallleHombreView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/componentServicios.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
