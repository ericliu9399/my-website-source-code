import React, { useEffect, useState } from "react"
import Header from "../components/Header.js"
import Hamburger from "../components/Hamburger"
import "./IndexPage.sass"
import BgImg from "../images/home_bg.svg"
import { Link } from "react-router-dom"
import apiUrl from '../lib/apiUrl'
import ContentEnglish from './indexPageContentEnglish.json'
import ContentChinese from './indexPageContentChinese.json'
import LanguageSelect from '../components/LanguageSelect'
import Project from '../components/Project.js'
import AboutMe from '../components/AboutMe'
import Home from '../components/Home'
import Contact from '../components/Contact'

function IndexPage() {
  useEffect(() => {
    fetch(apiUrl + "start")
      .then(res => res.text())
      .then(text => console.log(text))
  }, [])
  const [language, setLanguage] = useState("chinese")
  let content
  if (language === "chinese") content = ContentChinese
  if (language === "english") content = ContentEnglish
  const { home, aboutMe, project, contact } = content
  const links = (
    <>
      <a href="#home">home</a>
      <a href="#aboutMe">about me</a>
      <a href="#projects">projects</a>
      <a href="#contact">contact</a>
      <Link to="/message_board">message board</Link>
      <a href="/landing_page.html">landing page</a>
      <LanguageSelect
        switchLangMethod={setLanguage}
        language={["chinese", "english"]}
        currentLanguage={language}
      />
    </>
  )
  if (language === "chinese") content = require('./ProjectsTemplateContentChinese.json')
  if (language === "english") content = require('./ProjectsTemplateContentEnglish.json')
  const dataArray = require('./ProjectsTemplateData.json')
  return (
    <>
      <Header>
        {links}
      </Header>
      <BgImg id="BgImg" />
      <main id="indexPage">
        <Home nameCard={home.nameCard} />
        <div className="bgDiv" />
        <AboutMe data={aboutMe} />
        <Project content={content} dataArray={dataArray} />
        <Contact data={contact} />
      </main>
      <Hamburger>
        {links}
      </Hamburger>
    </>
  )
}

export default IndexPage
