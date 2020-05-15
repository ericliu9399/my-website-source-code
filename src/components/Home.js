import React from 'react'
import NextBtn from './NextBtn'
import LanguageSelect from './LanguageSelect'

function Home({ nameCard }) {
  return (
    <>
      <section className="vh-100 d-flex flex-column" id="home">
        <div className="nameCard position-relative">
          <h5>{nameCard[0]}</h5>
          <h1>{nameCard[1]}</h1>
          <h5>{nameCard[2]}</h5>
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