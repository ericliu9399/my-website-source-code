import React from 'react'
import styles from './LanguageSelect.module.sass'
import LangLogo from '../images/translate.svg'
import LogoContainer from './LogoContainer'

function LanguageSelect() {
  return (
    <div className={styles.LanguageSelect}>
      <LangLogo />
    </div>
  )
}
export default LanguageSelect