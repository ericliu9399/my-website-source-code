import React from 'react'
import SectionTitle from './SectionTitle'
import MarkdownViewer from './MarkdownViewer'

function Project({ content }) {

  const { title: sectionTitle } = content
  return (
    <>
      <section className="container" id="projects">
        <SectionTitle title={sectionTitle} />
        <MarkdownViewer url={"./readme.md"} />
      </section>
      <style jsx>{`
section{
min-height: 100vh;
}
section :global(img){
display: relative;
border-radius: 20px;
width: 50%;
margin: 40px;
margin-left: 25%;
}
@media all and (max-width: 768px){
section :global(img){
width: 100%;
margin: 10px;
}}
.container :global(.MarkdownViewer) :global(a){
padding: 20px;
font-size: 30px;
}
.container :global(.MarkdownViewer) :global(hr){
background: white;
margin: 40px;
}
.container :global(.MarkdownViewer) :global(.top-pannel){
display: none;
}
`}</style>
    </>
  )
}

export default Project