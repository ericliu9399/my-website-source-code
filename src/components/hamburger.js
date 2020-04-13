import React, { useState } from 'react'
import './Hamburger.sass'

function Hamburger({ children }) {
  const [clsH, setClsH] = useState("hamburger")//hamburger class
  const [idNav, setID_Nav] = useState("")//navbar class
  const [isNavShow, setIsNavShow] = useState(false)
  let timer
  function hamburgerOn() {
    clearTimeout(timer)
    setClsH("hamburger hamburger_click")
    navFadeIn()
    timer = setTimeout(() => {
      setClsH("hamburger hamburger_click hamburger_cross")
    }, 210)
  }
  function hamburgerOff() {
    clearTimeout(timer)
    setClsH("hamburger hamburger_click")
    setTimeout(() => {
      setID_Nav("")
    }, 10)
    timer = setTimeout(() => {
      setClsH("hamburger")
      setIsNavShow(false)
    }, 210)
  }
  function hamburgerOnclick() {
    clsH === "hamburger" ? hamburgerOn() : hamburgerOff()
  }
  function navFadeIn() {
    setIsNavShow(true)
    setTimeout(() => {
      setID_Nav("nav_show")
    }, 10)
  }
  return (
    <div
      className="mobile_nav"
      onClick={() => {
        hamburgerOnclick()
      }}
    >
      {isNavShow && <nav id={idNav}>
        {children}
      </nav>}
      <div className={clsH}>
        <div id="bar1" />
        <div id="bar2" />
        <div id="bar3" />
      </div>
    </div>
  )
}
export default Hamburger