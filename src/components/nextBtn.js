import React from "react"
import NextIcon from '../images/next.svg'
import style from './nextBtn.sass'

export default ({href}) => <a className="next" href={href}>
  <NextIcon id="n1" />
  <NextIcon id="n2" />
  <NextIcon id="n3" />
</a>