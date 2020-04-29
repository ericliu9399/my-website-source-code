import React from "react"
import styles from "./Header.module.sass"


function Header({ links }) {
  return (
    <header className={styles.header}>
      <nav>
        {links}
      </nav >
    </header>
  )
}

export default Header