const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [{path: '', component: () => import('pages/Index.vue')}]
  },
  {
    path: '/button1',
    component: () => import('layouts/MyLayout.vue'),
    children: [{path: '', component: () => import('pages/Button1.vue')}]
  },
  {
    path: '/button2',
    component: () => import('layouts/MyLayout.vue'),
    children: [{path: '', component: () => import('pages/Button2.vue')}]
  },
  {
    path: '/button3',
    component: () => import('layouts/MyLayout.vue'),
    children: [{path: '', component: () => import('pages/Button3.vue')}]
  },
  {
    path: '/button4',
    component: () => import('layouts/MyLayout.vue'),
    children: [{path: '', component: () => import('pages/Button4.vue')}]
  },
  {
    path: '/button-bar',
    component: () => import('layouts/MyLayout.vue'),
    children: [{path: '', component: () => import('pages/ButtonBar.vue')}]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
