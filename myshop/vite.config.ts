import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite"
import Components  from 'unplugin-vue-components/vite'
import UnpluginSvgComponent from 'unplugin-svg-component/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnpluginSvgComponent({
      iconDir:["./src/assets/svg"],
      dts:true,
      dtsDir:'./src/types',
      prefix:"icon"
    }),
    AutoImport({
     imports:["vue","vue-router",'pinia'],
     dts:"./src/types/auto-imports.d.ts",
     dirs:['./src/**/*'],
     vueTemplate:true,
    }),
    Components({
      dirs:["./src/layout","./src/components","./src/views"],
      dts:"./src/types/components.d.ts"
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
