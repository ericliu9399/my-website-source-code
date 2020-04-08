import React, { useState } from 'react'
import './hamburger.sass'

function Hamburger({ children }) {
  const [clsH, setClsH] = useState("hamburger")//hamburger class
  const [idNav, setID_Nav] = useState("")//navbar class
  let timer
  function hamburgerOn() {
    console.log("on")
    clearTimeout(timer)
    setClsH("hamburger hamburger_click")
    setID_Nav("nav_hide")
    timer = setTimeout(() => {
      setClsH("hamburger hamburger_click hamburger_cross")
    }, 210)
  }
  function hamburgerOff() {
    console.log("off")
    clearTimeout(timer)
    setClsH("hamburger hamburger_click")
    setID_Nav("")
    timer = setTimeout(() => {
      setClsH("hamburger")
    }, 210)
  }
  function hamburgerOnclick() {
    clsH === "hamburger" ? hamburgerOn() : hamburgerOff()
  }
  return (
    <div className="mobile_nav">
      <nav id={idNav}>
        {children}
      </nav>
      <div className={clsH} onClick={hamburgerOnclick}>
        <div className="bar" id="bar1"/>
        <div className="bar" id="bar2"/>
        <div className="bar" id="bar3"/>
      </div>
    </div>
  )
}

export default Hamburger