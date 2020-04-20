import React from 'react'
import { Link } from "react-router-dom"
import './ProjectsTemplate.sass'
import ProjectsTemplateContentChinese from './ProjectsTemplateContentChinese.json'
import ProjectsTemplateContentEnglish from './ProjectsTemplateContentEnglish.json'

function ProjectsTemplate({ language }) {
  let data
  if (language === "chinese") data = ProjectsTemplateContentChinese
  if (language === "english") data = ProjectsTemplateContentEnglish
  const { projectArray } = data
  return (projectArray?.map(project => (
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
      <div className="preview" style={project.preview?.previewDivStyle}>
        <img src={project.preview?.path} alt="" style={project.preview?.previewImgStyle} />
      </div>
    </div>
  ))
  ) || null
}

export default ProjectsTemplate