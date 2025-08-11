import React from 'react'
import ListDeliete from './listDelete.jsx'
import './index.less'
import { NavBar } from '../navBar/index.jsx'
import { useLocation } from 'react-router'

const Index = () => {
  const location = useLocation()
  return (
    <div className="slide">
      <NavBar>{location?.state?.pageTitle}</NavBar>
      <ListDeliete />
    </div>
  )
}

export default Index
