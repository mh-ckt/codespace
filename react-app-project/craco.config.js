const CracoLessPlugin = require('craco-less')
const CracoCSSModules = require('craco-css-modules')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' }, // 示例：全局变量
            javascriptEnabled: true, // 允许在LESS文件中使用JavaScript表达式
            module: true
          }
        }
      }
    },
    { plugin: CracoCSSModules }
  ],
  devServer: {
    proxy: {
      // 下面的代理服务器是将前端请求路径 http://localhost:3000/api/user 通过代理去请求 http://localhost:8000/mh/user
      '/api': {
        target: 'http://localhost:8000', // 目标服务器地址
        changeOrigin: true, // 修改请求头中的 origin
        logLevel: 'debug',
        pathRewrite: { '^/api': '/mh' }, // 重写路径（将/api 前缀 换成/mh）
        secure: false // 开发环境用true  生产环境需设为 true
      }
    }
  }
}
