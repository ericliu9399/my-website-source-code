import React, { useState } from 'react'

function Hamburger({ children }) {
  const barOffset = 200
  const barWidth = 65
  const barHeight = 9
  const hamburgerDiameter = 15//15
  const [direction, setDirection] = useState('reverse')
  const [animationClass, setAnimationClass] = useState(['', '', ''])
  function handleClick() {
    direction === 'normal' ? setDirection('reverse') : setDirection('normal')
    setAnimationClass(['bar1Animation', 'bar2Animation', 'bar3Animation'])
  }
  return <>
    <div className="mobile_nav d-flex flex-column align-items-end p-3 d-lg-none">
      <div className="btn-group-vertical pb-3">
        {children}
      </div>
      <button
        className={"hamburger btn btn-primary"}
        onClick={handleClick}
      >
        <div className={"bar bar1Offset rounded-pill " + animationClass[0]} />
        <div className={"bar rounded-pill " + animationClass[1]} />
        <div className={"bar bar3Offset rounded-pill " + animationClass[2]} />
      </button>
    </div>
    <style jsx>{`
.btn-group-vertical :global(*){
min-height: 10vmin;
min-width: 20vmin;
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 5px;
border-radius: 20px;
}
.mobile_nav{
position: fixed;
bottom: 30px;
right: 10px;
}
.hamburger{
padding: 0px;
width: ${hamburgerDiameter}vw;
height: ${hamburgerDiameter}vw;
border-radius: 50%;
}
.bar{
width: ${barWidth}%;
height: ${barHeight}%;
background-color: white;
position: relative;
margin-left: auto;
margin-right: auto;
}
.bar1Offset{
transform: translateY(${100 - barOffset}%);
}
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
.bar3Offset{
transform: translateY(${-100 + barOffset}%);
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
export default Hamburger