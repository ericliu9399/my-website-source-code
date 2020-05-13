import React from 'react'
import NextBtn from './NextBtn'

function Home({ nameCard }) {
  return (
    <>
      <section className="vh-100 d-flex flex-column" id="home">
        <div className="nameCard position-relative">
          <p>{nameCard[0]}</p>
          <h2>{nameCard[1]}</h2>
          <p>{nameCard[2]}</p>
        </div>
        <div className="flex-grow-1">
        </div>
        <div className="d-flex justify-content-center">
          <NextBtn href="#aboutMe" />
        </div>
      </section>
      <style jsx>{`
.nameCard.position-relative{
top: 50vh;
transform: translateY(-50%);
}
`}</style>
    </>
  )
}
export default Home