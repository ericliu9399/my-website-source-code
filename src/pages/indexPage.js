import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./IndexPage.sass"
import BgImg from "../images/home_bg.svg"
import apiUrl from '../lib/apiUrl'
import Header from "../components/Header.js"
import Hamburger from "../components/Hamburger"
import LanguageSelect from '../components/LanguageSelect'
import Project from '../components/Project.js'
import AboutMe from '../components/AboutMe'
import Home from '../components/Home'
import Contact from '../components/Contact'
import ContentEnglish from './contents/indexPageContentEnglish.json'
import ContentChinese from './contents/indexPageContentChinese.json'
import ProjectCht from './contents/ProjectsContentChinese.json'
import ProjectEng from './contents/ProjectsContentEnglish.json'
import ProjectData from './contents/ProjectsData.json'

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
  const { home, aboutMe, contact } = content
  const links = [
    <a href="#home" key="home">home</a>,
    <a href="#aboutMe" key="about me">about me</a>,
    <a href="#projects" key="projects">projects</a>,
    <a href="#contact" key="contact">contact</a>,
    <Link to="/message_board" key="message board">message board</Link>,
    <a href="/landing_page.html" key="landing page">landing page</a>,
    <LanguageSelect
      switchLangMethod={setLanguage}
      language={["chinese", "english"]}
      currentLanguage={language}
      key="LanguageSelect"
    />
  ]

  if (language === "chinese") content = ProjectCht
  if (language === "english") content = ProjectEng
  const dataArray = ProjectData
  return (
    <>
      <Header links={links} />
      <BgImg id="BgImg" />
      <main id="indexPage">
        <Home nameCard={home.nameCard} />
        <div className="bgDiv" />
        <AboutMe data={aboutMe} />
        <Project content={content} dataArray={dataArray} />
        <Contact data={contact} />
      </main>
      <Hamburger links={links} />
    </>
  )
}

export default IndexPage
