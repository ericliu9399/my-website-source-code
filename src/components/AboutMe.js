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
import SectionTitle from './SectionTitle'
import StyleJsxLogo from '../images/skill/StyleJsx.svg'

function SkillContainer() {
  return (
    <div className="skillContainer d-flex flex-wrap justify-content-around">
      <LogoContainer id="react" sec={3} isFillPath={true} color="rgba(97, 218, 251, 1)" Logo={<ReactLogo />} content={"React.js"} />
      <LogoContainer id="styleJsx" sec={1} isFillPath={true} color="rgba(255, 255, 255, 0.5)" Logo={<StyleJsxLogo />} content={"Style Jsx"} />
      <LogoContainer id="reactRouter" sec={1.5} color="rgba(86, 216, 249, 1)" Logo={<ReactRouterLogo />} content={"React Router"} />
      <LogoContainer id="javascript" sec={1.5} isFillPath={true} color="rgba(241, 218, 31, 0.6)" Logo={<JavascriptLogo />} content={"Javascript"} />
      <LogoContainer id="express" sec={2} color="rgba(140, 200, 75, 1)" Logo={<NodejsLogo />} content={"Express.js"} />
      <LogoContainer id="webpack" sec={4} color="rgba(141, 213, 249, 0.5)" Logo={<WebpackLogo />} content={"Webpack"} />
      <LogoContainer id="gulp" sec={2.5} color="rgba(224, 73, 73, 1)" Logo={<GulpLogo />} content={"Gulp"} />
      <LogoContainer id="sass" sec={1} color="rgba(212, 100, 152, 1)" Logo={<SassLogo />} content={"Sass"} />
      <LogoContainer id="pug" sec={2} color="rgba(237, 205, 166, 0.5)" Logo={<PugLogo />} content={"Pug"} />
    </div>
  )
}

function AboutMe({ data }) {
  const { title, content, subTitle } = data

  return (
    <>
      <section className="min-vh-100 pt-sm-5 d-flex flex-column" id="aboutMe" >
        <SectionTitle title={title}></SectionTitle>
        <div className="flex-grow-1 d-flex flex-column">
          <div className={
            "d-flex flex-column flex-md-row align-items-center"
          }>
            <img src={myphoto} alt="Edin Liu" />
            <p className="p-5 w-100">
              {content}
            </p>
          </div>
          <h4 className="text-center pt-3 pb-5">{subTitle}</h4>
          <SkillContainer />
          <div className="d-flex justify-content-center">
            <NextBtn href="#projects" />
          </div>
        </div>
      </section>
      <style jsx>{`
img{
      width: auto;
      height: auto;
      max-width: 250px;
      max-height: 250px;
      border-radius: 50%;
}
p{
      line-height: 1.5rem;
}
`}</style>
    </>
  )
}

export default AboutMe