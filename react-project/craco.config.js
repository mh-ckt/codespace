const CracoLessPlugin = require('craco-less')
const path = require('path')
const CracoCSSModules = require('craco-css-modules')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 'primary-color': '#1DA57A' }, // 示例：全局变量
            javascriptEnabled: true, // 允许在LESS文件中使用JavaScript表达式
            module: true // 使用模块化
          }
        }
      }
    },
    { plugin: CracoCSSModules }
  ],
  devServer: {
    port: 9999,
    hot: true,
    client: {
      overlay: false
    }
    // 配置代理解决跨域
    // proxy: {
    //   '/': {
    //     target: process.env.REACT_APP_URL, // https://xxx.com
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/': ''
    //     }
    //   }
    // }
  },
  webpack: {
    //配置别名
    alias: {
      //约定@表示的src路径
      '@': path.resolve(__dirname, 'src')
    }
  }
}
