import React, { useState } from 'react'
import Burger from './Burger'

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
function MobileNav({ children, displayNoneSec = 0.5 }) {
  const [direction, setDirection] = useState('reverse')
  const [navDisplayNone, setNavDisplayNone] = useState('d-none')
  function changeDirection() {
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
      <Burger onClick={changeDirection} direction={direction} />
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