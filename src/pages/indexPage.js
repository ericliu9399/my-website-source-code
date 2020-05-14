import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
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
import ProjectData from './contents/ProjectsUrlData.json'

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
  if (language === "chinese") content = ProjectCht
  if (language === "english") content = ProjectEng
  const dataArray = ProjectData
  return (
    <>
      <Header>
        <a href="#home" className="nav-link pr-1">home</a>
        <a href="#aboutMe" className="nav-link pr-1">about me</a>
        <a href="#projects" className="nav-link pr-1">projects</a>
        <a href="#contact" className="nav-link pr-1">contact</a>
        <Link to="/message_board" className="nav-link pr-1">message board</Link>
        <a href="/landing_page.html" className="nav-link pr-1">landing page</a>
        <LanguageSelect
          switchLangMethod={setLanguage}
          language={["chinese", "english"]}
          currentLanguage={language}
          key="LanguageSelect"
        />
      </Header>
      <div id="BgImg"><BgImg /></div>
      <main className="container">
        <Home nameCard={home.nameCard} />
        <div className="bgDiv" />
        <AboutMe data={aboutMe} />
        <Project content={content} dataArray={dataArray} />
        <Contact data={contact} />
      </main>
      <Hamburger>
        <a href="#home" className="btn btn-primary">home</a>
        <a href="#aboutMe" className="btn btn-primary">about me</a>
        <a href="#projects" className="btn btn-primary">projects</a>
        <a href="#contact" className="btn btn-primary">contact</a>
        <Link to="/message_board" className="btn btn-primary">message board</Link>
        <a href="/landing_page.html" className="btn btn-primary">landing page</a>
        <LanguageSelect
          className="btn btn-primary"
          switchLangMethod={setLanguage}
          language={["chinese", "english"]}
          currentLanguage={language}
          key="LanguageSelect"
        />
      </Hamburger>
      <style jsx>{`
:global(section){
overflow: hidden;
}
main{
min-height:100vh;
}
#BgImg{
  z-index: -1;
  position: absolute;
  top: 0px;
  right: 0px;
}
`}</style>
    </>
  )
}

export default IndexPage
