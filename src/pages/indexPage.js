import React, { useEffect } from "react"
import Header from "../components/header.js"
import Hamburger from "../components/hamburger"
import "./indexPage.sass"
import Formspree from "../components/formspree"
import BgImg from "../images/home_bg.svg"
import { Link } from "react-router-dom"
import myphoto from "../images/myphoto.png"
import ReactLogo from '../images/skill/React.svg'
import JavascriptLogo from '../images/skill/Javascript.svg'
import NodejsLogo from '../images/skill/nodejs-icon.svg'


export default () => {
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
    </>
  )
  return (
    <>
      <Header>
        {links}
      </Header>
      <main>
        <section id="home">
          <img src={BgImg} alt="" />
          <div className="name_card">
            <p>Hello, i’m</p>
            <h1>Eric Liu {/* Michael Liu | James Liu | William Liu*/}</h1>
            <p>CREATIVE FRONT-END WEB DEVELOPER</p>
          </div>
          <div className="favorite">
            <h2>Things I love</h2>
            <div className="container">
              <div className="sub_div">
                <div className="icon">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" className="svg-inline--fa fa-code fa-w-20 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" /></svg>
                </div>
                <h4>FrontEnd</h4>
                <p>I'm more front end focused and love to work with Reactjs as well as pure HTML, CSS.</p>
              </div>
              <div className="sub_div">
                <div
                  className="icon"
                >
                  {/* xmlns="http://www.w3.org/2000/svg" */}
                  {/* <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="js" className="svg-inline--fa fa-js fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" /></svg> */}
                </div>
                <h4>Javascript</h4>
                <p>I just extremely love javascript, I can’t even express how much I love javascript with just a few lines.</p>
              </div>
              <div className="sub_div">
                <div className="icon">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paint-brush" className="svg-inline--fa fa-paint-brush fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z" /></svg>
                </div>
                <h4>Creative Coding</h4>
                <p>I love creative coding because I do both coding &amp; designing. making beautiful art with code is very satisfying to me.</p>
              </div>
            </div>
          </div>
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
            <a href="#home"><ReactLogo id="react" /><p>React.js</p></a>
            <a href="#home"><JavascriptLogo id="javascript" /><p>Javascript</p></a>
            <a href="#home"><NodejsLogo id="express" /><p>Express.js</p></a>

          </div>
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
