import React from 'react'
/**
@param clsH string hamburger fold cross
 */
function Burger({ clsH = "hamburger", onClick }) {
  let bar = "position-absolute bg-white rounded-pill"
  return <>
    <div className="mobileNav">
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
    </div>
    <style jsx>{`
.mobileNav{
  z-index: 10;
  bottom: 30px;
  right: 150px;
	position: fixed;
}
`}</style>
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

export default Burger