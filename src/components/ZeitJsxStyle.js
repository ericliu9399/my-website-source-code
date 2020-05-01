import React from 'react'
import css from 'styled-jsx/css'

const button = css`
p { 
color: hotpink; 
font-size: ${50}px;
}
`
function NewBtn() {
  return (
    <>
      <p>This is Style JSX</p>
      <p>This is Style JSX</p>
      <p>This is Style JSX</p>
      <p>This is Style JSX</p>
      <p>This is Style JSX</p>
      <style jsx>{`
      p {
        color: green;
      }
    `}</style>
      <style jsx>{button}</style>
    </>
  )
}
export default NewBtn

