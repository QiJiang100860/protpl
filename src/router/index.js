import Vue from 'vue'
import VueRouter from 'vue-router'
import PFrame from '@/views/PFrame/'
import sPage from "./sPage.js"
import oPage from "./oPage.js"
Vue.use(VueRouter)
const _import = file => () => import('@/views/' + file + '.vue')
const routes = [
  ...oPage.routers,
  ...sPage.routers,
  {
    path: '/home',
    redirect: 'home/index',
    component: PFrame,
    isMeau: 1,
    show: true,
    meta: { title: "首页" },
    children: [
      { path: "index", component: _import("home/index"), name: "home" }
    ]
  },
  {
    path: '/system',
    component: PFrame,
    redirect: '/system/permission',
    isMeau: 1,
    show: true,
    meta: {
      title: '系统管理',
      icon: 'xitongguanli'
    },
    children: [
      { path: 'permission', component: _import('system/permission'), name: 'system_permission', meta: { title: '系统权限' } },
      { path: 'roles', component: _import('system/roles'), name: 'system_roles', meta: { title: '系统角色' } },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
