import React from 'react'
import styles from './LanguageSelect.module.sass'
import LangLogo from '../images/translate.svg'

function LanguageSelect({ switchLangMethod, language, currentLanguage }) {
  function onClick() {
    let index = language.findIndex((lang) => lang == currentLanguage)
    if (index === language.length - 1)
      index = 0
    else
      index++
    switchLangMethod(language[index])
  }
  return (
    <div
      className={styles.LanguageSelect}
      onClick={onClick}>
      <LangLogo />
    </div>
  )
}
export default LanguageSelect