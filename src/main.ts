import { createApp } from 'vue'

import router from './router' // 路由
import pluginRegister from './plugins' // 插件
import 'virtual:windi.css' // windicss
import '@/assets/fonts/index.css' // 字体文件
import NaiveConfig from './NaiveConfig.vue'

createApp(NaiveConfig).use(router).use(pluginRegister).mount('#app')
