import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { createHtmlPlugin } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import svgLoader from 'vite-svg-loader'

const envPrefix = 'TEMPLATE_'
// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), envPrefix) }
  const { TEMPLATE_DEV_PORT } = process.env

  return {
    envPrefix,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      vue({
        include: [/\.vue$/],
      }),

      createHtmlPlugin({
        minify: true,
        entry: 'src/main.ts',
      }),

      AutoImport({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core',
          '@vueuse/head',
        ],
        dts: 'src/auto-imports.d.ts',
      }),

      Components({
        extensions: ['vue'],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: 'src/components.d.ts',
        resolvers: [
          NaiveUiResolver(),
        ],
      }),
      WindiCSS(),
      svgLoader(),
    ],
    server: {
      host: true,
      port: Number(TEMPLATE_DEV_PORT),
      proxy: {

      },
    },
  }
})
