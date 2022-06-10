import type { App } from 'vue'
import iconComponents from '@/assets/icons/index'

export function iconsRegister(app: App) {
  // 注册icon组件
  for (const componentName in iconComponents)
    app.component(componentName, iconComponents[componentName])

  return app
}
