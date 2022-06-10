import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: 'home', hash: '#index' },
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/home/Index.vue'),
    },
    /*  {
      path: '/content',
      name: 'content',
      component: () => import('@/pages/content/Index.vue'),
    }, */
  ],
})

/* router.beforeEach((to, from) => {
  if (from.hash && to.hash) return
  window.$loadingBar.start()
})
router.afterEach((to) => {
  const articleId = Number(to.query.articleId)
  if (to.name === 'content' && articleId) {
    // 调用+1 接口
    increaseClickCount(articleId)
  }

  // 滚动到面包屑的位置
  // window.scrollTo({ top: 98 + 300 })
  window.$loadingBar.finish()
})
 */
export default router
