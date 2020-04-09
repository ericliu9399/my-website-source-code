import React from "react"
import NextIcon from '../images/next.svg'
import './NextBtn.sass'

export default ({ href }) => <div className="nextContainer">
  <a className="next" href={href}>
    <NextIcon id="n1" />
    <NextIcon id="n2" />
    <NextIcon id="n3" />
  </a>
</div>
