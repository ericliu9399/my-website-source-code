import React from "react"
import styles from "./Header.module.sass"


function Header({ children }) {
  return (
    <header className={styles.header}>
      <nav>
        {children}
      </nav >
    </header>
  )
}

export default Header