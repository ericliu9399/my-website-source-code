import React from 'react'
import NextBtn from './NextBtn'

function Home({ nameCard }) {
  return (
    <>
      <section className="vh-100" id="home">
        <div className="d-flex flex-column h-100">
          <div className="flex-grow-1">
            <div className="d-flex flex-column justify-content-center h-100">
              <p>{nameCard[0]}</p>
              <h2>{nameCard[1]}</h2>
              <p>{nameCard[2]}</p>
            </div>
          </div>
        </div>
        <div className="position-absolute">
          <NextBtn href="#aboutMe" />
        </div>
      </section>
      <style jsx>{`
.position-absolute{
bottom: 0px;
left: 50%;
transform: translateX(-50%);
}
`}</style>
    </>
  )
}
export default Home