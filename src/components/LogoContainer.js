import React from 'react'
import style from './LogoContainer.module.sass'

const LogoContainer = ({ Logo, dropShadowColor }) => {
  return (<div
    className={style.container}
  >
    {Logo}
    {Logo}
    {Logo}
  </div>)
}

export default LogoContainer