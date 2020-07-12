import React, { useState, useEffect } from 'react';

function Burger({ direction, onClick }) {
  const diameter = 15;
  const transitionDuration = 0.5;

  const [change, setChange] = useState({
    offset: { bar1: -200, bar2: 0, bar3: 200 },
    rotate: { bar1: 0, bar2: 0 },
    width: { bar1: 50, bar2: 50, bar3: 50 },
    opacity: { bar3: 1 },
  });
  const init = () => {
    setChange({
      offset: { bar1: -200, bar2: 0, bar3: 200 },
      rotate: { bar1: 0, bar2: 0 },
      width: { bar1: 50, bar2: 50, bar3: 50 },
      opacity: { bar3: 1 },
    });
  };
  const fold = () => {
    setChange({
      offset: { bar1: 200, bar2: 200, bar3: 200 },
      rotate: { bar1: 0, bar2: 0 },
      width: { bar1: 50, bar2: 50, bar3: 50 },
      opacity: { bar3: 0 },
    });
  };
  const cross = () => {
    setChange({
      offset: { bar1: 0, bar2: 0, bar3: 200 },
      rotate: { bar1: 45, bar2: -45 },
      width: { bar1: 70, bar2: 70, bar3: 50 },
      opacity: { bar3: 0 },
    });
  };
  const animationNormal = () => {
    fold();
    setTimeout(cross, transitionDuration * 1000);
  };
  const animationReverse = () => {
    fold();
    setTimeout(init, transitionDuration * 1000);
  };
  useEffect(() => {
    if (direction === 'normal') animationNormal();
    else animationReverse();
  }, [direction]);

  const {
    offset, rotate, width, opacity,
  } = change;
  return (
    <>
      <button className="burger bg-primary" onClick={onClick}>
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </button>
      {/* static */}
      <style jsx>
        {`
.burger{
width: ${diameter}vmin;
height: ${diameter}vmin;
border-radius: 50%;
position: relative;
}
.bar1,.bar2,.bar3{
height: 10%;
background: rgba(255,255,255,1);
position: absolute;
top: 50%;
left: 50%;
border-radius: 500px;
transition-duration: ${transitionDuration}s;
animation: barBreathLight 2s infinite;
}
@keyframes barBreathLight{
30%{background: rgba(255,255,255,0.5);}
}
`}
      </style>
      {/* dynamic */}
      <style jsx>
        {`
.bar1{
width: ${width.bar1}%;
transform: translate(-50%,${-50 + offset.bar1}%) rotate(${rotate.bar1}deg);
}
.bar2{
width: ${width.bar2}%;
transform: translate(-50%,${-50 + offset.bar2}%) rotate(${rotate.bar2}deg);
}
.bar3{
width: ${width.bar3}%;
transform: translate(-50%,${-50 + offset.bar3}%);
opacity: ${opacity.bar3};
}
`}
      </style>
    </>
  );
}
export default Burger;
