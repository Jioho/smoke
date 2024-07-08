import { VantResolver } from '@vant/auto-import-resolver'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import postCssPxToRem from 'postcss-pxtorem'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import vike from 'vike/plugin'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: env.VITE_BASE_PATH || '/',
    resolve: {
      alias: { '@': resolve(__dirname, 'src') }
    },
    css: {
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 37.5,
            propList: ['*'],
            selectorBlackList: ['-norem']
          })
        ]
      }
    },
    ssr: {
      noExternal: ['vant']
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [VantResolver()]
      }),
      Components({
        resolvers: [VantResolver()]
      }),
      vike({ prerender: true })
    ],
    server: {
      proxy: {
        '/api': {
          target: 'https://h5.zeqinkeji.cn',
          changeOrigin: true,
          secure: false,
          ws: true
        }
      }
    }
  }
})
