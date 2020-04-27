import React, { useState } from 'react'
import {
  bar1,
  bar2,
  bar3,
  hamburger,
  mobileNav,
  hamburgerClick,
  hamburgerCross,
  navShow
} from './Hamburger.module.sass'

function Hamburger({ children }) {
  const [clsH, setClsH] = useState(hamburger)//hamburger class
  const [idNav, setID_Nav] = useState("")//navbar class
  const [isNavShow, setIsNavShow] = useState(false)
  let timer
  function hamburgerOn() {
    clearTimeout(timer)
    setClsH(`${hamburger} ${hamburgerClick}`)
    navFadeIn()
    timer = setTimeout(() => {
      setClsH(`${hamburger} ${hamburgerClick} ${hamburgerCross}`)
    }, 210)
  }
  function hamburgerOff() {
    clearTimeout(timer)
    setClsH(`${hamburger} ${hamburgerClick}`)
    setTimeout(() => {
      setID_Nav("")
    }, 10)
    timer = setTimeout(() => {
      setClsH(hamburger)
      setIsNavShow(false)
    }, 210)
  }
  function hamburgerOnclick() {
    clsH === hamburger ? hamburgerOn() : hamburgerOff()
  }
  function navFadeIn() {
    setIsNavShow(true)
    setTimeout(() => {
      setID_Nav(navShow)
    }, 10)
  }
  return (
    <div
      className={mobileNav}
      onClick={() => {
        hamburgerOnclick()
      }}
    >
      {isNavShow && <nav id={idNav}>
        {children}
      </nav>}
      <div className={clsH}>
        <div id={bar1} />
        <div id={bar2} />
        <div id={bar3} />
      </div>
    </div>
  )
}
export default Hamburger