import React from 'react';
import Header from '../../components/header'
import { Link } from 'react-router-dom'
import './landingPage.sass'
import MagicCube from './images/magic_cube.svg'
import HandLeft from './images/hand_left.svg'
import Eye from './images/handy.svg'

function landingPage() {
  return (
    <div id="landingPage">
      <Header>
        <Link to="/">home</Link>
      </Header>
      {/* <MagicCube className="magicCube" /> */}
      <Eye />
    </div>
  )
}
export default landingPage