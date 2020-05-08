import React from 'react'
import styles from './SectionTitle.module.sass'

function SectionTitle({ title, id }) {
  return <h2 id={id} className={styles.SectionTitle}>{title}</h2>
}

export default SectionTitle