import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "1",
  description: "1",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '工程化实践',
        items: [
          { text: '代码提交校验及提交规范', link: '/issue-tracker/code-submission' },
          { text: 'react中全局配置less', link: '/issue-tracker/configure-less' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'react文档',
        items: [
          { text: 'useState', link: '/react/use-state' },
          { text: 'useRef', link: '/react/use-ref' },
          { text: 'useCallback', link: '/react/use-callback' },
          { text: 'useContext', link: '/react/use-context' },
          { text: 'useEffect', link: '/react/use-effect' },
          { text: 'useLayoutEffect', link: '/react/use-layout-effect' },
          { text: 'useMemo', link: '/react/use-memo' },
          { text: 'useReducer', link: '/react/use-reducer' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
