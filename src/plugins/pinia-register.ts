import { createPinia } from 'pinia'
import type { App } from 'vue'

export const piniaRegister = (app: App) => {
  const pinia = createPinia()
  app.use(pinia)
  return app
}
