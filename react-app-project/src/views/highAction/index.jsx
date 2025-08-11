import React from 'react'
import { NavBar } from '../pageAction/navBar/index.jsx'
import { useNavigate, useLocation } from 'react-router'
import './index.less'
const findList = [
  {
    name: 'redux初体验',
    key: 'reduxPages'
  },
  {
    name: 'mobx初体验',
    key: 'mobxPages'
  },
  {
    name: '在一个页面上同时展示更新前后的值',
    key: 'saveValue'
  },
  {
    name: '自定义组件的使用',
    key: 'customHooks'
  },
  {
    name: '高阶组件的使用',
    key: 'hoc'
  },
  {
    name: '缓存组件',
    key: 'cacheCom'
  },
  {
    name: '配置代理服务器',
    key: 'devServer'
  }
]

const Index = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const toRouter = ({ key, name }) => {
    navigate(`/highAction/${key}`, { state: { pageTitle: name } })
  }

  return (
    <div className="highAction">
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
