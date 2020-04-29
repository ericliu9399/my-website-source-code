import React from 'react'
import styles from './Button.module.sass'

function Button({ children }) {
  return (
    <button className={styles.btn}>{children}</button>
  )
}

export default Button