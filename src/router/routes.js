
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

// Всегда оставляйте это как последнее
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]
export default routes

