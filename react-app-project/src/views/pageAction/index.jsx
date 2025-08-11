import React from 'react'
import { useNavigate, useLocation } from 'react-router'
import { NavBar } from './navBar/index.jsx'
import './index.less'

const findList = [
  {
    name: '常见的样式实现',
    key: 'realizeStyle'
  },
  {
    name: '页面滑动功能的实现',
    key: 'side'
  },
  {
    name: 'h5页面实现上拉刷新和下拉加载功能',
    key: 'refresh'
  },
  {
    name: '封装一个导航栏',
    key: 'navBar'
  }
]

const Index = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const toRouter = ({ key, name }) => {
    navigate(`/pageAction/${key}`, { state: { pageTitle: name } })
  }

  return (
    <div className="pageAction">
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
