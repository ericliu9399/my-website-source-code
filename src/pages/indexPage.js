import React, { useEffect } from "react"
import Header from "../components/header.js"
import Hamburger from "../components/hamburger"
import "./indexPage.sass"
import Formspree from "../components/formspree"
import BgImg from "../images/home_bg.svg"
import { Link } from "react-router-dom"
import myphoto from "../images/myphoto.png"
import ReactLogo from '../images/skill/React2.svg'
import JavascriptLogo from '../images/skill/Javascript.svg'
import NodejsLogo from '../images/skill/nodejs-icon.svg'
import NextBtn from '../components/nextBtn'
import LogoContainer from '../components/logoContainer'

function IndexPage() {
  useEffect(() => {
    fetch("http://localhost:3000/start")
    // .then(res => res.text())
    // .then(text => console.log(text))
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
            <h1>Eric Liu x {/* Michael Liu | James Liu | William Liu*/}</h1>
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
            <a href="#home" id="react" ><LogoContainer Logo={<ReactLogo />} /><p>React.js</p></a>
            <a href="#home" id="javascript" ><LogoContainer Logo={<JavascriptLogo />} /><p>Javascript</p></a>
            <a href="#home" id="express" ><LogoContainer Logo={<NodejsLogo />} /><p>Express.js</p></a>
          </div>
          <NextBtn href="#projects" />
        </section>
        <section id="projects">
          <h2 className="section_title">Side projects</h2>
          <div className="project">
            <h2>Message Board </h2>
            <p>
              前後端分離的簡易留言板,前後端分別部屬在github與heroku。
            </p>
            <ul>
              <li>前端<a href="/">觀看原始碼</a>
                <ul>
                  <li>React.js </li>
                  <li>Gatsby.js <span>前端框架</span></li>
                  <li>Sass <span>預處理器</span></li>
                </ul>
              </li>
              <li>後端<a href="/">觀看原始碼</a>
                <ul>
                  <li>node.js <span>runtime</span></li>
                  <li>express.js <span>後端框架</span></li>
                  <li>fs <span>資料讀寫</span></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="project">
            <h2>Personal website </h2>
            <p>
              用Gatsby.js製作的個人網站。
            </p>
            <a href="/">觀看原始碼</a>
            <ul>
              <li>React.js </li>
              <li>Gatsby.js <span>前端框架</span></li>
              <li>RWD</li>
              <li>Sass <span>預處理器</span></li>
            </ul>
          </div>
          <div className="project">
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
          </div>
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
