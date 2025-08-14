export default defineAppConfig({
  pages: ['pages/index/index', 'pages/category/category', 'pages/cart/cart', 'pages/my/my'],
  tabBar: {
    // custom: true, // 配置自定义的tarBar，默认的tarBar不需要设置，否则tabBar不会显示
    color: '#666', // 未选中文字颜色
    selectedColor: '#b4282d', // 选中文字颜色
    backgroundColor: '#fafafa', // 背景色
    borderStyle: 'black', // 边框颜色（black/white）
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'icons/custom.png',
        selectedIconPath: 'icons/custom.png'
      },
      {
        pagePath: 'pages/category/category',
        text: '分类',
        iconPath: 'icons/custom.png',
        selectedIconPath: 'icons/custom.png'
      },
      {
        pagePath: 'pages/cart/cart',
        text: '购物车',
        iconPath: 'icons/custom.png',
        selectedIconPath: 'icons/custom.png'
      },
      {
        pagePath: 'pages/my/my',
        text: '我的',
        iconPath: 'icons/custom.png',
        selectedIconPath: 'icons/custom.png'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
