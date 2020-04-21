import React, { useRef, useState, useMemo, createRef } from 'react'
import { Link } from "react-router-dom"
import './ProjectsTemplate.sass'
import ProjectsTemplateContentChinese from './ProjectsTemplateContentChinese.json'
import ProjectsTemplateContentEnglish from './ProjectsTemplateContentEnglish.json'

function ProjectsTemplate({ language }) {
  const divRef = useRef(null)
  const [divStyle, setDivStyle] = useState(null)
  const [imgStyle, setImgStyle] = useState({})
  let data
  if (language === "chinese") data = ProjectsTemplateContentChinese
  if (language === "english") data = ProjectsTemplateContentEnglish

  const { projectArray } = data
  const refs = useMemo(() =>
    Array.from({ length: projectArray.length }).map(() => createRef())
    , [])
  function onImgLoad({ target: img }, divRef, key) {

    console.log(key)
    let img_width = img.offsetWidth
    let div_width = divRef.current.offsetWidth
    console.log('img_width', img.offsetWidth)
    console.log('div_width', divRef.current ? divRef.current.offsetWidth : 0)
    if (img_width > div_width) {
      let imgOffset = (img_width - div_width) / 2
      let newImgStyle = JSON.parse(JSON.stringify(imgStyle))
      newImgStyle[key] = { "right": `-${imgOffset}px` }
      setImgStyle(newImgStyle)
    }
  }
  return (projectArray?.map((project, key) => {
    let divRef = refs[key]
    return (
      <div
        className="project"
        key={project.title}
      >
        <div className="sub_container" style={project.subContainerStyle}>
          <div className="content">
            <h2>{project.title}</h2>
            <p>
              {project.summary}
            </p>
          </div>
          <ul id="ul_row">
            {project.list.map(l => (
              <li className="li_column" key={JSON.stringify(l)}>{l.listTitle}
                {l.srcA && <a href={l.srcA}>{data.toSrc}</a>}
                {l.projectA && <a href={l.projectA}>{data.toProject}</a>}
                {l.projectLink && <Link to={l.projectLink}>{data.toProject}</Link>}
                <ul>
                  {l.listItem.map(i => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </li>
            )
            )}
          </ul>
        </div>
        <div ref={divRef} className="preview">
          <img src={project.preview?.path}
            alt="" style={imgStyle[key]}
            onLoad={(e) => {
              onImgLoad(e, divRef, key)
            }} />
        </div>
      </div>
    )
  })
  ) || null
}
//
export default ProjectsTemplate