import React from "react"
import NextIcon from '../images/next.svg'
import styles from './NextBtn.module.sass'

const NextBtn = ({ href }) => <div className={styles.nextContainer}>
  <a className={styles.next} href={href}>
    <NextIcon id={styles.n1} />
    <NextIcon id={styles.n2} />
    <NextIcon id={styles.n3} />
  </a>
</div>

export default NextBtn