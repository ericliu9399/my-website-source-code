import React from 'react';
import Project from '../components/Project';
import AboutMe from '../components/AboutMe';
import data from './contents/indexPageContentChinese.json';

const { home, aboutMe, contact } = data;
export default function ForPrint() {
  return (
    <>
      <div className="container">
        <AboutMe data={aboutMe} isPrint />
      </div>
      <Project />
      <style jsx>
        {`
:global(body){
background-color: white;
color: black;
}
:global(hr){
opacity: 0;
}
`}
      </style>
    </>
  );
}
