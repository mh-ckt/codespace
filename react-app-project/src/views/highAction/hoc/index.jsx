import React from 'react'
import DataList from './dataList.jsx'
import { useLocation } from 'react-router'
import { NavBar } from '../../pageAction/navBar/index.jsx'
import './index.less'

const Index = () => {
  const location = useLocation()
  return (
    <div className="hoc">
      <NavBar>{location?.state?.pageTitle}</NavBar>
      <DataList />
    </div>
  )
}

export default Index
