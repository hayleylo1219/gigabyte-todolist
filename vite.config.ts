import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import svgLoader from 'vite-svg-loader'
import { resolve } from 'path'

// https://vite.dev/config/

export default defineConfig(async ({  mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  function pathResolve(dir: string) {
    return resolve(__dirname, '.', dir)
  }
  return {    
    base: env.VITE_BASE_URL ? env.VITE_BASE_URL : '/',
    build: {
      outDir: `dist`,
      assetsDir: 'static',
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo:any) => {
            if (assetInfo.name) {
              // 利用附檔名產生資料夾
              const info = assetInfo.name.split('.')
              let extType = info[info.length - 1]
              if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
                extType = 'media'
              } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
                extType = 'img'
              } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
                extType = 'fonts'
              }
              return `${extType}/[name]-[hash][extname]`
            }
            return ''
          },
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          manualChunks: (id: any) => { // 自己動手拆較大的檔案 (Chunk)
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          }
        },
      },
    },
    resolve: {
      alias: {
        '@': pathResolve('src'),
        '@assets': pathResolve('src/assets'),
        '@style': pathResolve('src/assets/style'),
        '@imgs': pathResolve('src/assets/imgs'),
        '@components': pathResolve('src/components'),
        '@layout': pathResolve('src/components/layout'),
        '@shared': pathResolve('src/components/shared'),
        '@pages': pathResolve('src/pages'),
        '@stores': pathResolve('src/stores'),
        '@plugins': pathResolve('src/plugins'),
      },
    },
    plugins: [
      vue(),
      svgLoader(),
      Components({ 
        // 從 `./src/components/` 路徑查找
            include: [/\.vue$/, /\.vue\?vue/],
            exclude: [/[/]node_modules[/]/, /[/].git[/]/, /[/].nuxt[/]/],
            dts: 'src/autoComponents.d.ts',
        }),
        createHtmlPlugin({
          inject: { // 允許在HTML文件中插入動態數據
            data: {
              ...env,
            },
          },
        }),
        splitVendorChunkPlugin(),
    ],
       // 代理服務設定 https://vite.dev/config/server-options#server-proxy
  //  server: {
  //   proxy: {
  //     '^/api': {
  //       // TEST: 後端測試機 :
  //       target: 'http://10.240.70.214:8084/gise-api/',
  //       // TEST: 本地後端專案 :
  //       // target: 'http://localhost:8080',
  //       ws: true,
  //       changeOrigin: true,
  //     },
  //   },
  // },
  }
})
