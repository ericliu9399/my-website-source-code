import React, { useState } from 'react'

function Nav({ children, navDisplayNone, direction, displayNoneSec = 0.5 }) {
  return <>
    <div className={"btn-group-vertical pb-3 navDisplayNoneAnimation " + navDisplayNone}>
      {children}
    </div>
    <style jsx>{`
.navDisplayNoneAnimation{
transform: translateY(-5%);
opacity: 0;
animation: navDisplayNoneAnimation ${displayNoneSec}s;
animation-direction: ${direction};
animation-fill-mode: forwards;
}
@keyframes navDisplayNoneAnimation {
  100% {transform: translateY(0%);opacity: 1;}
}
.btn-group-vertical :global(*){
min-height: 10vmin;
min-width: 20vmin;
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 5px;
border-radius: 20px;
}
.btn-group-vertical{
transition-duration: 1s;
}
`}</style>
  </>
}

function Hamburger({ handleClick, direction }) {
  const barOffset = 200
  const barWidth = 65
  const barHeight = 9
  const hamburgerDiameter = 15
  return <>
    <button
      className={"hamburger btn btn-primary"}
      onClick={handleClick}
    >
      <div className={"bar bar1Offset rounded-pill bar1Animation"} />
      <div className={"bar rounded-pill bar2Animation"} />
      <div className={"bar bar3Offset rounded-pill bar3Animation"} />
    </button>
    <style jsx>{`
.hamburger{
padding: 0px;
width: ${hamburgerDiameter}vw;
height: ${hamburgerDiameter}vw;
border-radius: 50%;
}
.bar3Offset{
transform: translateY(${-100 + barOffset}%);
}
.bar1Offset{
transform: translateY(${100 - barOffset}%);
}
.bar{
width: ${barWidth}%;
height: ${barHeight}%;
background-color: white;
position: relative;
margin-left: auto;
margin-right: auto;
}
`}</style>
    {/* 動畫 */}
    <style jsx>{`
.bar1Animation{
animation: bar1 0.5s;
animation-fill-mode: forwards;
animation-play-state: running;
animation-direction: ${direction};
}
@keyframes bar1 {
  50%  {transform: translateY(${100 + barOffset}%);}
  100% {transform: translateY(${100}%) rotate(45deg);width: 80%;}
}
.bar2Animation{
animation: bar2 0.5s;
animation-fill-mode: forwards;
animation-play-state: running;
animation-direction: ${direction};
}
@keyframes bar2 {
  50%  {transform: translateY(${barOffset}%);}
  100% {transform: translateY(${barOffset}%);opacity: 0;}
}
.bar3Animation{
animation: bar3 0.5s;
animation-fill-mode: forwards;
animation-play-state: running;
animation-direction: ${direction};
}
@keyframes bar3 {
  50%  {transform: translateY(${-100 + barOffset}%);}
  100% {transform: translateY(${-100}%) rotate(-45deg);width: 80%;}
}
`}</style>
  </>
}
function MobileNav({ children, displayNoneSec = 0.5 }) {
  const [direction, setDirection] = useState('reverse')
  const [navDisplayNone, setNavDisplayNone] = useState('d-none')
  function handleClick() {
    if (direction === 'normal') {
      setDirection('reverse')
      setTimeout(() => { setNavDisplayNone('d-none') }, displayNoneSec * 1000)
    }
    else {
      setDirection('normal')
      setNavDisplayNone('')
    }
  }
  return <>
    <div className="mobile_nav d-flex flex-column align-items-end p-3 d-lg-none">
      <Nav direction={direction} navDisplayNone={navDisplayNone} displayNoneSec={displayNoneSec}>{children}</Nav>
      <Hamburger handleClick={handleClick} direction={direction} />
      <Burger direction={direction} handleClick={handleClick} />
    </div>
    <style jsx>{`
.mobile_nav{
position: fixed;
bottom: 30px;
right: 10px;
}
`}</style>
  </>
}
export default MobileNav