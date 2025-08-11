import { Outlet } from 'react-router-dom'
import './root.less'
import { useNavigate, useLocation } from 'react-router-dom'
import { MailFill, MessageFill, CheckCircleFill, SmileFill } from 'antd-mobile-icons'
import { useEffect, useState } from 'react'

export default function Root() {
  const navigate = useNavigate()
  const location = useLocation()
  const [click, setClick] = useState(false)
  const gotoPage = (value, title) => {
    navigate(value, { state: { pageTitle: title } })
    setClick(value)
  }

  useEffect(() => {
    let value = location.pathname.split('/')[1]
    setClick(`/${value}`)
  }, [location.pathname])

  return (
    <div className="root">
      <div className="detail">
        <Outlet />
      </div>
      <div className="sidebar">
        <div
          onClick={() => {
            gotoPage('/highAction', '进阶功能')
          }}
          style={{ color: click === '/highAction' ? '#000' : '#cbcaca' }}
        >
          <MailFill fontSize={24} />
          <span>进阶功能</span>
        </div>
        <div
          onClick={() => {
            gotoPage('/pageAction', '页面功能')
          }}
          style={{ color: click === '/pageAction' ? '#000' : '#cbcaca' }}
        >
          <MessageFill fontSize={24} />
          <span>页面功能</span>
        </div>
        <div
          onClick={() => {
            gotoPage('/builtInHook', '内置钩子')
          }}
          style={{ color: click === '/builtInHook' ? '#000' : '#cbcaca' }}
        >
          <CheckCircleFill fontSize={24} />
          <span>内置钩子</span>
        </div>
        <div
          onClick={() => {
            gotoPage('/findInteresting', '发现有趣')
          }}
          style={{ color: click === '/findInteresting' ? '#000' : '#cbcaca' }}
        >
          <SmileFill fontSize={24} />
          <span>发现有趣</span>
        </div>
      </div>
    </div>
  )
}
