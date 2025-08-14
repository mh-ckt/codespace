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
