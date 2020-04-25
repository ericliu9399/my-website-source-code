import React from 'react'
import NextBtn from './NextBtn'

function Home({ nameCard }) {
  return (
    <section id="home">
      <div className="nameCard">
        <p>{nameCard[0]}</p>
        <h1>{nameCard[1]}</h1>
        <p>{nameCard[2]}</p>
      </div>
      <NextBtn href="#aboutMe" />
    </section>
  )
}

export default Home