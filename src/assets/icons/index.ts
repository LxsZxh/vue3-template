import type { DefineComponent } from 'vue'
import { defineComponent } from 'vue'

const modules = import.meta.globEager('./*.svg')

const iconComponents: Record<string, DefineComponent> = {} // 保存需要注册的组件

for (const path in modules) {
  const fileName = path.split('/').pop()?.split('.').shift()
  if (fileName) {
    // 根据SVG的文件名生成对应的Vue组件名
    const iconName = `icon-${fileName}`

    iconComponents[iconName] = defineComponent({
      name: iconName, // 组件名
      ...modules[path], // 解构上面打印的对象，主要是为了拿到render方法
    })
  }
}

export default iconComponents
