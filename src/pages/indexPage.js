import React, { useEffect } from "react"
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

function IndexPage() {
  useEffect(() => {
    fetch(apiUrl + "start")
      .then(res => res.text())
      .then(text => console.log(text))
  }, [])
  const links = (
    <>
      <a href="#home">home</a>
      <a href="#about_me">about me</a>
      <a href="#projects">projects</a>
      <a href="#contact">contact</a>
      <Link to="/message_board">message board</Link>
      {/* <a href="./landing_page.html">landing page</a> */}
    </>
  )

  return (
    <>
      <Header>
        {links}
      </Header>
      <main id="indexPage">
        <section id="home">
          <BgImg id="BgImg" />
          <div className="name_card">
            <p>Hello, i’m</p>
            <h1>Eric Liu{/* Michael Liu | James Liu | William Liu*/}</h1>
            <p>CREATIVE FRONT-END WEB DEVELOPER</p>
          </div>
          <NextBtn href="#about_me" />
        </section>
        <section id="about_me">
          <h2 className="section_title">About me</h2>
          <div className="bg_div" />
          <div className="container">
            <img src={myphoto} alt="" />
            <p>Hi, I'm Eric Liu, a passionate self-taught frontEnd web developer from Taiwan.<br />I tend to make use of modern web technologies to build websites that looks great,<br />feels fantastic, and functions correctly. I am especially focusing on Reactjs.<br /><br />I also do Graphic and UI designing. Since I love both programming and designing,<br />I'm also interested in creating programmatic designs and creative coding projects.</p>
          </div>
          <h2 className="sub_title">My Skillsets</h2>
          <div className="skill_container">
            <a href="#react_link" id="react" ><LogoContainer Logo={<ReactLogo />} /><p>React.js</p></a>
            <a href="#javascript_link" id="javascript" ><LogoContainer Logo={<JavascriptLogo />} /><p>Javascript</p></a>
            <a href="#express_link" id="express" ><LogoContainer Logo={<NodejsLogo />} /><p>Express.js</p></a>
            <a href="#webpack_link" id="webpack"><LogoContainer Logo={<WebpackLogo />} />Webpack</a>
            <a href="#gulp_link" id="gulp"><LogoContainer Logo={<GulpLogo />} />Gulp</a>
            <a href="#sass_link" id="sass"><LogoContainer Logo={<SassLogo />} />Sass</a>
            <a href="#pug_link" id="pug"><LogoContainer Logo={<PugLogo />} />Pug</a>
            <a href="#react_router_link" id="react_router"><LogoContainer Logo={<ReactRouterLogo />} />React Router</a>
          </div>
          <NextBtn href="#projects" />
        </section>
        <section id="projects">
          <h2 className="section_title">Side projects</h2>
          <div className="linkTo">
            <div className="to" id="react_link"></div>
            <div className="to" id="sass_link"></div>
            <div className="to" id="express_link"></div>
            <div className="to" id="webpack_link"></div>
            <div className="to" id="javascript_link"></div>
          </div>
          <div className="project">
            <h2>Message Board </h2>
            <p>
              前後端分離的簡易留言板,前後端分別部屬在github與heroku。
            </p>
            <ul>
              <li>前端
                <a href="https://github.com/syyui15926/syyui15926.github.io/blob/master/src/pages/messageBoard.js">觀看原始碼</a>
                <Link to="/message_board">前往作品</Link>
                <ul>
                  <li>React.js </li>
                  <li>Javascript </li>
                  <li>Sass</li>
                  <li>Webpack</li>
                </ul>
              </li>
              <li>後端<a href="/">觀看原始碼</a>
                <ul>
                  <li>express.js</li>
                  <li>Javascript </li>
                  <li>fs</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="project">
            <h2>Personal website </h2>
            <p>
              這個網頁是用React.js製作的個人網站。
            </p>
            <a href="/">觀看原始碼</a>
            <ul>
              <li>React.js </li>
              <li>Javascript </li>
              <li>Sass</li>
              <li>Webpack</li>
              <li>RWD</li>
            </ul>
          </div>
          {/* <div className="project">
            <h2>Landing Page </h2>
            <p>
              與設計師合作的,我負責程式的部分
            </p>
            <a href="/">觀看原始碼</a>
            <ul>
              <li>React.js </li>
              <li>Gatsby.js <span>前端框架</span></li>
              <li>Sass <span>預處理器</span></li>
              <li>SVG Animation</li>
            </ul>
          </div> */}
        </section>
        <section id="contact">
          <h2 className="section_title">Get In Touch</h2>
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
