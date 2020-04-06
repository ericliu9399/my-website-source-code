import React from 'react';
import template from './landingPage.pug';
import Header from '../../components/header'
import { Link } from 'react-router-dom'
import './landingPage.sass'

function landingPage() {
  return (
    <>
      <Header>
        <Link to="/">home</Link>
      </Header>
      {template.call(this)}
    </>
  )
}
export default landingPage