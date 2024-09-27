import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
import defaultLayout from '@/layouts/default.vue'
import authenticatedLayout from '@/layouts/authenticated.vue'
import Home from '@/pages/Home.vue'
import Login from '@/pages/auth/Login.vue'
import NotFound from '@/pages/NotFound.vue'
import { useAuthentication } from '@/hooks/routes/auth'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: authenticatedLayout,
    children: [
      {
        path: '',
        component: Home,
        meta: { title: 'Todo' }
      }
    ],
    ...useAuthentication()
  },
  {
    path: '/auth',
    name: 'Auth',
    component: defaultLayout,
    children: [
      {
        path: 'Login',
        component: Login
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: { title: 'Not Found' } // You can customize the title as needed
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})
