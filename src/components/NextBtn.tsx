import React from 'react';

const NextBtn = ({
  width = '20vmin', height = '20vmin', href = '#', key,
}) => (
    <>
      <div className="d-block">
        <a href={href} key={key}>
          <svg className="n1" viewBox="0 0 477.175 477.175"><path d="M248.1 360.731l225.1-225.1c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-215.5 215.5-215.5-215.5c-5.3-5.3-13.8-5.3-19.1 0-2.6 2.6-4 6.1-4 9.5 0 3.4 1.3 6.9 4 9.5l225.1 225.1c5.2 5.3 13.8 5.3 19 .1z" /></svg>
          <svg className="n2" viewBox="0 0 477.175 477.175"><path d="M248.1 360.731l225.1-225.1c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-215.5 215.5-215.5-215.5c-5.3-5.3-13.8-5.3-19.1 0-2.6 2.6-4 6.1-4 9.5 0 3.4 1.3 6.9 4 9.5l225.1 225.1c5.2 5.3 13.8 5.3 19 .1z" /></svg>
          <svg className="n3" viewBox="0 0 477.175 477.175"><path d="M248.1 360.731l225.1-225.1c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-215.5 215.5-215.5-215.5c-5.3-5.3-13.8-5.3-19.1 0-2.6 2.6-4 6.1-4 9.5 0 3.4 1.3 6.9 4 9.5l225.1 225.1c5.2 5.3 13.8 5.3 19 .1z" /></svg>
        </a>
      </div>
      {/* <style jsx>
        {`
.d-block{
height: 20vmin;
width: 20vmin;
}
svg{
height: 20vmin;
width: 20vmin;
fill: white;
filter: drop-shadow(0px 0px 20px rgba(255,0,0,0));
position: absolute;
animation: breathLight2 2s infinite;
@keyframes breathLight2 {
	50% {
		filter: drop-shadow(0px 0px 20px red);
	}
}}
.n1{
transition-duration: 1.5s;
}
.n2{
transition-duration: 1s;
}
.n3{
transition-duration: 0.5s;
}
a:hover .n1{
transform: translateY(-50px);
}
a:hover .n2{
transform: translateY(-25px);
}
a:hover .n3{
transform: translateY(0px);
}
`}
      </style> */}
    </>
  );
export default NextBtn;
