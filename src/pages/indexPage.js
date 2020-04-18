import React, { useEffect, useState } from "react"
import Header from "../components/Header.js"
import Hamburger from "../components/Hamburger"
import "./IndexPage.sass"
import Formspree from "../components/Formspree"
import BgImg from "../images/home_bg.svg"
import { Link } from "react-router-dom"
import myphoto from "../images/myphoto.png"
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

function IndexPage() {
  useEffect(() => {
    fetch(apiUrl + "start")
      .then(res => res.text())
      .then(text => console.log(text))
  }, [])
  const [content, setContent] = useState(ContentChinese)
  const { home, aboutMe, projects, contact } = content
  const links = (
    <>
      <a href="#home">home</a>
      <a href="#aboutMe">about me</a>
      <a href="#projects">projects</a>
      <a href="#contact">contact</a>
      <Link to="/message_board">message board</Link>
      <a href="landing_page.html">landing page</a>
      <LanguageSelect
        switchLangMethod={setContent}
        language={[ContentEnglish, ContentChinese]}
        currentLanguage={content}
      />
      {/* <a href="./landing_page.html">landing page</a> */}
    </>
  )
  return (
    <>
      <Header>
        {links}
      </Header>
      <BgImg id="BgImg" />
      <main id="indexPage">
        <section id="home">
          <div className="nameCard">
            <p>{home.nameCard[0]}</p>
            <h1>{home.nameCard[1]}{/* Michael Liu | James Liu | William Liu*/}</h1>
            <p>{home.nameCard[2]}</p>
          </div>
          <NextBtn href="#aboutMe" />
        </section>
        <div className="bgDiv" />
        <section id="aboutMe">
          <h2 className="sectionTitle">{aboutMe.title}</h2>
          <div className="container">
            <img src={myphoto} alt="" />
            <p>
              {aboutMe.content}
            </p>
          </div>
          <h2 className="subTitle">{aboutMe.subTitle}</h2>
          <div className="skillContainer">
            <a href="#react_link" id="react" ><LogoContainer Logo={<ReactLogo />} /><p>React.js</p></a>
            <a href="#javascript_link" id="javascript" ><LogoContainer Logo={<JavascriptLogo />} /><p>Javascript</p></a>
            <a href="#express_link" id="express" ><LogoContainer Logo={<NodejsLogo />} /><p>Express.js</p></a>
            <a href="#webpack_link" id="webpack"><LogoContainer Logo={<WebpackLogo />} />Webpack</a>
            <a href="#gulp_link" id="gulp"><LogoContainer Logo={<GulpLogo />} />Gulp</a>
            <a href="#sass_link" id="sass"><LogoContainer Logo={<SassLogo />} />Sass</a>
            <a href="#pug_link" id="pug"><LogoContainer Logo={<PugLogo />} />Pug</a>
            <a href="#reactRouter_link" id="reactRouter"><LogoContainer Logo={<ReactRouterLogo />} />React Router</a>
          </div>
          <NextBtn href="#projects" />
        </section>
        <section id="projects">
          <h2 className="sectionTitle">{projects.title}</h2>
          <div className="linkTo">
            <div className="to" id="react_link"></div>
            <div className="to" id="sass_link"></div>
            <div className="to" id="express_link"></div>
            <div className="to" id="webpack_link"></div>
            <div className="to" id="javascript_link"></div>
          </div>
          <ProjectsTemplate projects={projects} />
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
