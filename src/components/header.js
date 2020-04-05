import React from "react"
import styles from "./header.module.sass"


export default ({ children }) => {
  return (
    <header className={styles.header}>
      <nav>
        {children}
      </nav >
    </header>
  )
}