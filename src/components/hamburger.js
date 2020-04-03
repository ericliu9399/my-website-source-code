import React, { useState } from 'react'
import './hamburger.sass'

function Hamburger({ children }) {
  const [clsH, setClsH] = useState("hamburger")//hamburger class
  const [clsN, setClsN] = useState("")//navbar class
  let timer
  function hamburgerOn() {
    console.log("on")
    clearTimeout(timer)
    setClsH("hamburger hamburger_click")
    setClsN("nav_hide")
    timer = setTimeout(() => {
      setClsH("hamburger hamburger_click hamburger_cross")
    }, 210)
  }
  function hamburgerOff() {
    console.log("off")
    clearTimeout(timer)
    setClsH("hamburger hamburger_click")
    setClsN("")
    timer = setTimeout(() => {
      setClsH("hamburger")
    }, 210)
  }
  function hamburgerOnclick() {
    clsH === "hamburger" ? hamburgerOn() : hamburgerOff()
  }
  return (
    <div className="mobile_nav">
      <nav className={clsN}>
        {children}
      </nav>
      <div className={clsH} onClick={hamburgerOnclick}>
        <div className="bar bar1" />
        <div className="bar bar2" />
        <div className="bar bar3" />
      </div>
    </div>
  )
}

export default Hamburger