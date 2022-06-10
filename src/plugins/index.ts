import type { App } from 'vue'
import { piniaRegister } from './pinia-register'
import { iconsRegister } from './icons-register'

const pluginRegister = (app: App) => {
  app.use(piniaRegister)
  app.use(iconsRegister)
  return app
}

export default pluginRegister
