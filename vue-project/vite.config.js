import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
// import less from 'vite-plugin-less'
// import vueDevTools from 'vite-plugin-vue-devtools'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4444,
    host: '0.0.0.0'
  },
  plugins: [
    vue(),
    //    vueDevTools(),
    AutoImport({
      resolvers: [VantResolver()]
    }),
    // less({
    //   javascriptEnabled: true // 确保这里设置为 true
    // }),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/main.scss" as *;`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.ts', '.vue', '.mjs'] // 使用路径别名时想要省略的后缀名，可以自己增减
  }
})
