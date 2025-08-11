import { createBrowserRouter } from 'react-router-dom'
import Root from './root.jsx'
import ErrorPage from './error-page.jsx'
import { lazy } from 'react'
// 内置钩子
import UseState from '../views/builtInHook/useState/index.jsx'
import UseCallback from '../views/builtInHook/useCallback/index.jsx'
import UseContext from '../views/builtInHook/useContext/index.jsx'
import UseEffect from '../views/builtInHook/useEffect/index.jsx'
import UseLayoutEffect from '../views/builtInHook/useLayoutEffect/index.jsx'
import UseMemo from '../views/builtInHook/useMemo/index.jsx'
import UseReducer from '../views/builtInHook/useReducer/index.jsx'
import UseRef from '../views/builtInHook/useRef/index.jsx'
import UseImperativeHandle from '../views/builtInHook/useImperativeHandle/index.jsx'
import UseTransition from '../views/builtInHook/useTransition/index.jsx'
// 发现有趣
import FindInteresting from '../views/findInteresting/index.jsx'
import RecordBill from '../views/findInteresting/recordBill/index.jsx'
import AllBill from '../views/findInteresting/allBill/index.jsx'
import Statistics from '../views/findInteresting/allBill/statistics/index.jsx' // 统计
// 页面功能
import PageActionNavBar from '../views/pageAction/navBar/index.jsx'
const BuiltInHook = lazy(() => import('../views/builtInHook/index.jsx'))
// 进阶功能
const HighAction = lazy(() => import('../views/highAction/index.jsx'))
const CustomHooks = lazy(() => import('../views/highAction/customHooks/index.jsx'))
const CacheCom = lazy(() => import('../views/highAction/cacheCom/index.jsx')) // 缓存组件
const ReduxPages = lazy(() => import('../views/highAction/reduxCase/index.jsx')) // redux初体验
const MobxPages = lazy(() => import('../views/highAction/mobxCase/index.jsx')) // mobx初体验
const Hoc = lazy(() => import('../views/highAction/hoc/index.jsx')) // 高阶组件的使用
const SaveValue = lazy(() => import('../views/highAction/saveValue/index.jsx')) // 一个页面展示不同的值
const DevServer = lazy(() => import('../views/highAction/devServer/index.jsx')) // 代理请求
// 页面功能
const PageAction = lazy(() => import('../views/pageAction/index.jsx'))
const RealizeStyle = lazy(() => import('../views/pageAction/realizeStyle/index.jsx'))
const PageActionSide = lazy(() => import('../views/pageAction/slide/index.jsx'))
const PageActionRefresh = lazy(() => import('../views/pageAction/refresh/index.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // ---------------- 发现有趣 ----------------
      {
        path: 'findInteresting',
        element: <FindInteresting />
      },
      // ----------------  内置钩子 ----------------
      {
        path: 'builtInHook',
        element: <BuiltInHook />
      },
      {
        path: 'builtInHook/useTransition',
        element: <UseTransition />
      },
      {
        path: 'builtInHook/useState',
        element: <UseState />
      },
      {
        path: 'builtInHook/useCallback',
        element: <UseCallback />
      },
      {
        path: 'builtInHook/useContext',
        element: <UseContext />
      },
      {
        path: 'builtInHook/useEffect',
        element: <UseEffect />
      },
      {
        path: 'builtInHook/useLayoutEffect',
        element: <UseLayoutEffect />
      },
      {
        path: 'builtInHook/useMemo',
        element: <UseMemo />
      },
      {
        path: 'builtInHook/useReducer',
        element: <UseReducer />
      },
      {
        path: 'builtInHook/useRef',
        element: <UseRef />
      },
      {
        path: 'builtInHook/useImperativeHandle',
        element: <UseImperativeHandle />
      },
      // ----------------  进阶功能 ----------------
      {
        path: 'highAction',
        element: <HighAction />
      },
      {
        path: 'highAction/customHooks',
        element: <CustomHooks />
      },
      {
        path: 'highAction/cacheCom',
        element: <CacheCom />
      },
      {
        path: 'highAction/reduxPages',
        element: <ReduxPages />
      },
      {
        path: 'highAction/mobxPages',
        element: <MobxPages />
      },
      {
        path: 'highAction/hoc',
        element: <Hoc />
      },
      {
        path: 'highAction/saveValue',
        element: <SaveValue />
      },
      {
        path: 'highAction/devServer',
        element: <DevServer />
      },
      // ----------------  常见功能 ----------------
      {
        path: 'pageAction',
        element: <PageAction />
      },
      {
        path: 'pageAction/side',
        element: <PageActionSide />
      },
      {
        path: 'pageAction/realizeStyle',
        element: <RealizeStyle />
      },
      {
        path: 'pageAction/refresh',
        element: <PageActionRefresh />
      },
      {
        path: 'pageAction/navBar',
        element: <PageActionNavBar />
      }
    ]
  },
  // ---------------- 发现有趣 ----------------
  {
    path: 'findInteresting/recordBill',
    element: <RecordBill />
  },
  {
    path: 'findInteresting/allBill',
    element: <AllBill />
  },
  {
    path: 'findInteresting/allBill/statistics',
    element: <Statistics />
  }
])

export default router
