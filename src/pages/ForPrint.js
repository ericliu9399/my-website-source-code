import Project from '../components/Project'
import React from 'react'

export default function ForPrint() {
  return <>
    <div className="bg">
      <Project />
    </div>
    <style jsx>{`
:global(body){
background-color: white;
color: black;
}
:global(hr){
opacity: 0;
}
`}</style>
  </>
}