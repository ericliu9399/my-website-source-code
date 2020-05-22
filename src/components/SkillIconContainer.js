import React from 'react'
import ReactLogo from '../images/skill/React.svg'
import JavascriptLogo from '../images/skill/Javascript.svg'
import NodejsLogo from '../images/skill/nodejs-icon.svg'
import LogoContainer from '../components/LogoContainer'
import WebpackLogo from '../images/skill/Webpack.svg'
import GulpLogo from '../images/skill/Gulp.svg'
import SassLogo from '../images/skill/Sass.svg'
import PugLogo from '../images/skill/Pug.svg'
import ReactRouterLogo from '../images/skill/react-router.svg'
import StyleJsxLogo from '../images/skill/StyleJsx.svg'
import BootstrapLogo from '../images/skill/Bootstrap.svg'

function SkillIconContainer() {
  return (
    <div className="skillContainer d-flex flex-wrap justify-content-around">
      <LogoContainer id="react" sec={3} isFillPath={true} color="rgba(97, 218, 251, 1)" Logo={<ReactLogo />} content={"React.js"} />
      <LogoContainer id="styleJsx" sec={1} isFillPath={true} color="rgba(255, 255, 255, 0.5)" Logo={<StyleJsxLogo />} content={"Style Jsx"} />
      <LogoContainer id="reactRouter" sec={1.5} color="rgba(86, 216, 249, 1)" Logo={<ReactRouterLogo />} content={"React Router"} />
      <LogoContainer id="bootstrap" sec={1.5} isFillPath={true} color="rgba(226, 177, 255, 101)" Logo={<BootstrapLogo />} content={"Bootstrap 4"} />
      <LogoContainer id="javascript" sec={1.5} isFillPath={true} color="rgba(241, 218, 31, 0.6)" Logo={<JavascriptLogo />} content={"Javascript"} />
      <LogoContainer id="express" sec={2} color="rgba(140, 200, 75, 1)" Logo={<NodejsLogo />} content={"Express.js"} />
      <LogoContainer id="webpack" sec={4} color="rgba(141, 213, 249, 0.5)" Logo={<WebpackLogo />} content={"Webpack"} />
      <LogoContainer id="gulp" sec={2.5} color="rgba(224, 73, 73, 1)" Logo={<GulpLogo />} content={"Gulp"} />
      <LogoContainer id="sass" sec={1} color="rgba(212, 100, 152, 1)" Logo={<SassLogo />} content={"Sass"} />
      <LogoContainer id="pug" sec={2} color="rgba(237, 205, 166, 0.5)" Logo={<PugLogo />} content={"Pug"} />
    </div>
  )
}

export default SkillIconContainer