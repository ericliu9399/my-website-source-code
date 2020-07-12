import React from 'react';
import Project from '../components/Project';

export default function ForPrint() {
  return (
    <>
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
