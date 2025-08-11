import React from 'react'
import { useNavigate, useLocation } from 'react-router'
import './index.less'
import { NavBar } from '../pageAction/navBar/index.jsx'

const findList = [
  {
    name: 'useState 是一个 React Hook，它允许你向组件添加一个 状态变量。',
    key: 'useState'
  },
  {
    name: 'useMemo 是一个 React Hook，它在每次重新渲染的时候能够缓存计算的结果',
    key: 'useMemo'
  },
  {
    name: 'useCallback 是一个允许你在多次渲染中缓存函数的 React Hook',
    key: 'useCallback'
  },
  {
    name: 'useContext 是一个 React Hook，可以让你读取和订阅组件中的 context',
    key: 'useContext'
  },
  {
    name: 'useEffect 是一个 React Hook，它允许你 将组件与外部系统同步',
    key: 'useEffect'
  },
  {
    name: 'useLayoutEffect 是 useEffect 的一个版本，在浏览器重新绘制屏幕之前触发',
    key: 'useLayoutEffect'
  },
  {
    name: 'useReducer 是一个 React Hook，它允许你向组件里面添加一个 reducer',
    key: 'useReducer'
  },
  {
    name: 'useRef 是一个 React Hook，它能帮助引用一个不需要渲染的值。',
    key: 'useRef'
  },
  {
    name: 'useImperativeHandle',
    key: 'useImperativeHandle'
  },
  {
    name: 'useTransition 是一个让你可以在后台渲染部分 UI 的 React Hook。',
    key: 'useTransition'
  }
]

const Index = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const toRouter = ({ key, name }) => {
    navigate(`/builtInHook/${key}`, { state: { pageTitle: name } })
  }

  return (
    <div className="builtInHook">
      <NavBar>{location?.state?.pageTitle}</NavBar>
      {findList.map((item, index) => {
        return (
          <p key={index} onClick={() => toRouter(item)}>
            {item.name}
          </p>
        )
      })}
    </div>
  )
}

export default Index
