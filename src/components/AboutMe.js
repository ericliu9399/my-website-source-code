import React from 'react'
import NextBtn from './NextBtn'
import ReactLogo from '../images/skill/React.svg'
import JavascriptLogo from '../images/skill/Javascript.svg'
import NodejsLogo from '../images/skill/nodejs-icon.svg'
import LogoContainer from '../components/LogoContainer'
import WebpackLogo from '../images/skill/Webpack.svg'
import GulpLogo from '../images/skill/Gulp.svg'
import SassLogo from '../images/skill/Sass.svg'
import PugLogo from '../images/skill/Pug.svg'
import ReactRouterLogo from '../images/skill/react-router.svg'
import myphoto from '../images/myphoto.png'
import './AboutMe.sass'

function AboutMe({ data }) {
  const { title, content, subTitle } = data

  return (
    <section id="aboutMe">
      <h2 className="sectionTitle">{title}</h2>
      <div className="container">
        <img src={myphoto} alt="Edin Liu" />
        <p>
          {content}
        </p>
      </div>
      <h2 className="subTitle">{subTitle}</h2>
      <div className="skillContainer">
        <div id="react" ><LogoContainer Logo={<ReactLogo />} /><p>React.js</p></div>
        <div id="javascript" ><LogoContainer Logo={<JavascriptLogo />} /><p>Javascript</p></div>
        <div id="express" ><LogoContainer Logo={<NodejsLogo />} /><p>Express.js</p></div>
        <div id="webpack"><LogoContainer Logo={<WebpackLogo />} /><p>Webpack</p></div>
        <div id="gulp"><LogoContainer Logo={<GulpLogo />} /><p>Gulp</p></div>
        <div id="sass"><LogoContainer Logo={<SassLogo />} /><p>Sass</p></div>
        <div id="pug"><LogoContainer Logo={<PugLogo />} /><p>Pug</p></div>
        <div id="reactRouter"><LogoContainer Logo={<ReactRouterLogo />} /><p>React Router</p></div>
      </div>
      <NextBtn href="#projects" />
    </section>
  )
}

export default AboutMe