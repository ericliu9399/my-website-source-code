import React from 'react'

function Header({ children }) {
  return (
    <>
      <nav className={
        "nav d-none d-md-flex align-items-center" +
        " justify-content-end pr-3 position-fixed"
      }>
        {children}
      </nav>
      <style jsx>{`
nav{
background: rgb(35,35,35);
height: 60px;
width: 100%;
z-index: 3;
}
nav :global(.nav-link){
color: white;
transition-duration: 0.2s;
}
nav :global(.nav-link):hover{
color: #c0c2e4;
}
`}</style>
    </>
  )
}
export default Header