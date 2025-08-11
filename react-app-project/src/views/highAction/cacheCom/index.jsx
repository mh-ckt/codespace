import React, { useState, useEffect } from 'react'
import SonOne from './sonOne.jsx'
import SonTwo from './sonTwo.jsx'
import { useLocation } from 'react-router'
import { NavBar } from '../../pageAction/navBar/index.jsx'

const Index = () => {
  const location = useLocation()
  const [tabValue, setTabValue] = useState('1')
  const [num, setNum] = useState(1)
  const changeTo = val => {
    setTabValue(val)
  }
  useEffect(() => {
    setTimeout(() => {
      setNum(a => a + 1)
    }, 500)
  }, [num])

  return (
    <div>
      <NavBar>{location?.state?.pageTitle}</NavBar>
      <h3>定时器：{num}</h3>
      <button
        onClick={() => {
          changeTo('1')
        }}
      >
        tab1
      </button>
      <button
        onClick={() => {
          changeTo('2')
        }}
      >
        tab2
      </button>
      {tabValue === '1' && <SonOne />}
      {tabValue === '2' && <SonTwo />}
    </div>
  )
}
export default Index
