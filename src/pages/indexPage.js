import React, { useEffect, useState } from "react"
import Header from "../components/Header.js"
import Hamburger from "../components/Hamburger"
import "./IndexPage.sass"
import Formspree from "../components/Formspree"
import BgImg from "../images/home_bg.svg"
import { Link } from "react-router-dom"
import ReactLogo from '../images/skill/React.svg'
import JavascriptLogo from '../images/skill/Javascript.svg'
import NodejsLogo from '../images/skill/nodejs-icon.svg'
import NextBtn from '../components/NextBtn'
import LogoContainer from '../components/LogoContainer'
import apiUrl from '../lib/apiUrl'
import WebpackLogo from '../images/skill/Webpack.svg'
import GulpLogo from '../images/skill/Gulp.svg'
import SassLogo from '../images/skill/Sass.svg'
import PugLogo from '../images/skill/Pug.svg'
import ReactRouterLogo from '../images/skill/react-router.svg'
import ContentEnglish from './indexPageContentEnglish.json'
import ContentChinese from './indexPageContentChinese.json'
import LanguageSelect from '../components/LanguageSelect'
import ProjectsTemplate from '../components/ProjectsTemplate.js'
import myphoto from '../images/myphoto.png'

function AboutMe({ data }) {
  const { title, content, subTitle } = data

  return (
    <section id="aboutMe">
      <h2 className="sectionTitle">{title}</h2>
      <div className="container">
        <img src={myphoto} alt="Eric Liu" />
        <p>
          {content}
        </p>
      </div>
      <h2 className="subTitle">{subTitle}</h2>
      <div className="skillContainer">
        <div id="react" ><LogoContainer Logo={<ReactLogo />} /><p>React.js</p></div>
        <div id="javascript" ><LogoContainer Logo={<JavascriptLogo />} /><p>Javascript</p></div>
        <div id="express" ><LogoContainer Logo={<NodejsLogo />} /><p>Express.js</p></div>
        <div id="webpack"><LogoContainer Logo={<WebpackLogo />} />Webpack</div>
        <div id="gulp"><LogoContainer Logo={<GulpLogo />} />Gulp</div>
        <div id="sass"><LogoContainer Logo={<SassLogo />} />Sass</div>
        <div id="pug"><LogoContainer Logo={<PugLogo />} />Pug</div>
        <div id="reactRouter"><LogoContainer Logo={<ReactRouterLogo />} />React Router</div>
      </div>
      <NextBtn href="#projects" />
    </section>
  )
}

function Home({ nameCard }) {
  return (
    <section id="home">
      <div className="nameCard">
        <p>{nameCard[0]}</p>
        <h1>{nameCard[1]}</h1>
        <p>{nameCard[2]}</p>
      </div>
      <NextBtn href="#aboutMe" />
    </section>
  )
}

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
        <section id="projects">
          <h2 className="sectionTitle">{project.title}</h2>
          <ProjectsTemplate language={language} />
        </section>
        <section id="contact">
          <h2 className="sectionTitle">{contact.title}</h2>
          <Formspree />
        </section>
      </main>
      <Hamburger>
        {links}
      </Hamburger>
    </>
  )
}

export default IndexPage
