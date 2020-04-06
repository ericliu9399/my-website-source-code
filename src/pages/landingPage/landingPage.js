import React from 'react';
import template from './landingPage.pug';
import Header from '../../components/header'
import { Link } from 'react-router-dom'
import './landingPage.sass'
import MagicCube from './images/magic_cube.svg'
import styles from './landingPage.module.sass'

function landingPage() {
  return (
    <div className={styles.landingPage}>
      <Header>
        <Link to="/">home</Link>
      </Header>
      {template.call(this, {
        MagicCube
      })}
    </div>
  )
}
export default landingPage