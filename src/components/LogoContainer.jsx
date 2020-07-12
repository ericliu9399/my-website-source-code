import React from 'react';

const ThreeLogo = ({
  Logo, sec, color, isFillPath,
}) => (
    <>
      <div className="logo">
        {Logo}
        {Logo}
        {Logo}
      </div>
      <style jsx>
        {`
.logo{
width: 50px;
height: 50px;
padding: 0px;
margin: 0px;
position: relative;
}
.logo :global(svg){
width: 50px;
height: 50px;
position: absolute;

filter: drop-shadow(0px 0px 25px ${color});
animation: breathLight ${sec}s infinite;
}
@keyframes breathLight{
50%{filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0));}
}
.logo :global(svg path){fill:${isFillPath ? color : ''};}
`}
      </style>
    </>

  );
const LogoContainer = ({
  Logo, content, sec = 1.5, color = 'white', isFillPath = false,
}) => (
    <>
      <div className="d-table">
        <div className="container d-flex flex-column align-items-center">
          <ThreeLogo Logo={Logo} sec={sec} color={color} isFillPath={isFillPath} />
          <p className="d-flex ">{content}</p>
        </div>
      </div>
    </>
  );

export default LogoContainer;
