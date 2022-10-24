import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: 'content' },
    },
    {
      path: '/home',
      name: 'home',
      meta: { title: '首页' },
      component: () => import('@/pages/home/Index.vue'),
    },
    {
      path: '/content',
      name: 'content',
      meta: { title: '内容区' },
      component: () => import('@/pages/content/Index.vue'),
      children: [
        {
          path: '/echarts',
          name: 'echarts',
          meta: { title: '图表' },
          component: () => import('@/pages/content/echarts/Index.vue'),
        },
      ],
    },
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
