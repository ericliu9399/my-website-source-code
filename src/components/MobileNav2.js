import React, { useState } from 'react'
import {
  mobileNav,
  navShow
} from './MobileNav2.module.sass'
function Burger({ clsH, onClick }) {
  let bar = "position-absolute bg-white rounded-pill"
  return <>
    <button
      className={
        clsH +
        " rounded-circle btn btn-primary"
      }
      onClick={onClick}
    >
      <div className={bar} id="bar1" />
      <div className={bar} id="bar2" />
      <div className={bar} id="bar3" />
    </button>
    {/* default */}
    <style jsx>{`
.hamburger {
	z-index: 10;
	width: 15vw;
	height: 15vw;
	opacity: 0.5;
}
#bar1, #bar2, #bar3 {
	width: 50%;
	height: 10%;
	top: 50%;
	left: 50%;
	transition-duration: 0.2s;
	opacity: 1;
	animation: BarBreathLight 2s infinite;
  z-index: 60;
}
{/* @keyframes BarBreathLight {
	30% {
		opacity: 0;
	}
} */}
.hamburger #bar1 {
	transform: translateX(-50%) translateY(-250%);
}
.hamburger #bar2 {
	transform: translateX(-50%) translateY(-50%);
}
.hamburger #bar3 {
	transform: translateX(-50%) translateY(150%);
}
`}</style>
    {/* click */}
    <style jsx>{`
.fold {
	opacity: 1;
}
.fold #bar1, .fold #bar2 {
	transform: translateX(-50%) translateY(150%);
}
.fold #bar3 {
	opacity: 0;
}
`}</style>
    {/* cross */}
    <style jsx>{`
.cross #bar1, .cross #bar2, .cross #bar3 {
	width: 70%;
}
.cross #bar1 {
	transform: translateX(-50%) translateY(0%) rotate(-45deg);
}
.cross #bar2 {
	transform: translateX(-50%) translateY(0%) rotate(45deg);
}
`}</style>
  </>
}
function Hamburger({ links }) {
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
      setID_Nav(navShow)
    }, 10)
  }
  return (
    <div
      className={mobileNav}
    >
      {isNavShow && links && <nav id={idNav}>
        {links.map((item, key) => {
          return (
            <button key={key}>{item}</button>
          )
        })}
      </nav>}
      <Burger
        clsH={clsH}
        onClick={hamburgerOnclick}
      />
    </div>
  )
}
export default Hamburger