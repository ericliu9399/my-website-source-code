import React from "react"
import styles from "./Header.module.sass"


export default ({ children }) => {
  return (
    <header className={styles.header}>
      <nav>
        {children}
      </nav >
    </header>
  )
}