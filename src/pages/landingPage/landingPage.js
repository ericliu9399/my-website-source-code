import React from 'react';
import Header from '../../components/header'
import { Link } from 'react-router-dom'
import MagicCube from './images/magic_cube.svg'
import styles from './landingPage.module.sass'

function landingPage() {
  return (
    <div className={styles.landingPage}>
      <Header>
        <Link to="/">home</Link>
      </Header>
      <MagicCube className={styles.magicCube}/>
    </div>
  )
}
export default landingPage