import React from 'react'
import { NavBar } from 'antd-mobile'
import styles from './index.less'
import { useNavigate } from 'react-router-dom'

const Bar = props => {
  const navigate = useNavigate()
  const { title } = props.title
  const back = () => {
    navigate(-1)
  }
  return (
    <div>
      <NavBar
        className={styles.container}
        style={{
          '--height': '36px',
          '--border-bottom': '1px #eee solid'
        }}
        onBack={back}
      >
        {title}
      </NavBar>
    </div>
  )
}

export default Bar
