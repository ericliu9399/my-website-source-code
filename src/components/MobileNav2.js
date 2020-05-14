import React, { useState } from 'react'
import Burger from './Burger'

function Nav({ isNavShow, links, idNav }) {

  return <>
    {isNavShow && links && <nav id={idNav}>
      {links.map((item, key) => {
        return (
          <button key={key}>{item}</button>
        )
      })}
    </nav>}
  </>
}

function MobileNav2({ links }) {
  const [idNav, setID_Nav] = useState("")//navbar class
  const [isNavShow, setIsNavShow] = useState(false)
  const [clsH, setClsH] = useState("hamburger")//hamburger class
  let timer
  function hamburgerOn() {
    clearTimeout(timer)
    setClsH("hamburger fold")
    navFadeIn()
    timer = setTimeout(() => {
      setClsH("hamburger fold cross")
    }, 210)
  }
  function hamburgerOff() {
    clearTimeout(timer)
    setClsH("hamburger fold")
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
      setID_Nav("navShow")
    }, 10)
  }
  return (
    <>
      <div
        className="mobileNav"
      >
        {/* <Nav isNavShow={isNavShow} links={links} idNav={idNav} /> */}
        <Burger
          clsH={clsH}
          onClick={hamburgerOnclick}
        />
      </div>
      <style jsx>{`
.mobileNav {
	z-index: 10;
	position: fixed;
	bottom: 50px;
	right: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 0;
}
.mobileNav nav {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: fit-content;
	transition-duration: 0.5s;
	opacity: 0;
}
.mobileNav nav button {
	width: 110px;
	max-height: 60px;
	padding: 10px;
}
`}</style>
    </>
  )
}
export default MobileNav2