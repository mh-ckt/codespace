import React from 'react'
import './index.less'
import { useLocation } from 'react-router'
import { NavBar } from '../../pageAction/navBar/index.jsx'

import Counter from './counter.jsx'
import TodoList from './todoList.jsx'

const Index = () => {
  const location = useLocation()
  return (
    <div className="index">
      <NavBar>{location?.state?.pageTitle}</NavBar>
      <Counter />
      <TodoList />
    </div>
  )
}

export default Index
