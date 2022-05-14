import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import corteDamas from '../views/CorteDamasView.vue'
import InformaciondetalleView from '../views/InformacionDetalleView.vue'
import cortehombres from '../views/CorteHombresView.vue'
import informaciondetallemujerView from '../views/InformacionDetalleMujerView.vue'
import informaciondetallleHombreView from '../views/InformacionDetalleHombreView.vue'
import buscarservicios from '../views/BuscarServicios.vue'
import LoginView from '../views/LoginView.vue'
import registropersona from '../views/RegistroPersonaView.vue'

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
    path: '/buscarservicios',
    name: 'buscarservicios',
    component: buscarservicios
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registropersona',
    name: 'registropersona',
    component: registropersona
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
