import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Dashboard',
  //   component: () => import('../views/Dashboard.vue')
  // },
  {
    path: '/',
    name: 'Recibidos',
    component: () => import('../views/Recibidos/Recibidos.vue')
  },
  {
    path: '/oportunidades',
    name: 'Oportunidades',
    component: () => import('../views/Oportunidades/index.vue')
  },
  {
    path: '/descartados',
    name: 'Descartados',
    component: () => import('../views/Descartados/Descartados.vue')
  },
  {
    path: '/abogados',
    name: 'Abogados',
    component: () => import('../views/Mantenimiento/Abogados/index.vue')
  },
  {
    path: '/abogados/nuevo',
    name: 'AbogadosNuevo',
    component: () => import('../views/Mantenimiento/Abogados/FormAbogado.vue')
  },
  {
    path: '/abogados/deshabilitados',
    name: 'AbogadosDeshabilitados',
    component: () => import('../views/Mantenimiento/Abogados/ListDeshabilitados.vue')
  },
  {
    path: '/citas',
    name: 'Citas',
    component: () => import('../views/Mantenimiento/Citas/index.vue')
  },
  {
    path: '/citas/canceladas',
    name: 'CitaCanceladas',
    component: () => import('../views/Mantenimiento/Citas/ListCanceladas.vue')
  },
  {
    path: '/citas/confirmadas',
    name: 'CitasConfirmadas',
    component: () => import('../views/Mantenimiento/Citas/ListConfirmadas.vue')
  }
  // {
  //   path: '/ListEspecialidad',
  //   name: 'ListEspecialidad',
  //   component: () => import('../views/ListEspecialidad.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
