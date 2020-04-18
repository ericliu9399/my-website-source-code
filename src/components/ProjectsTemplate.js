import React from 'react'
import { Link } from "react-router-dom"
import './ProjectsTemplate.sass'

function ProjectsTemplate({ projects }) {
  const { projectArray } = projects
  return (projectArray?.map(project => (
    <div
      className="project"
      key={project.title}
    >
      <h2>{project.title}</h2>
      <p>
        {project.summary}
      </p>
      <div className="sub_container">
        <ul>
          {project.list.map(l => (
            <li key={JSON.stringify(l)}>{l.listTitle}
              {l.srcA && <a href={l.srcA}>{projects.toSrc}</a>}
              {l.projectA && <a href={l.projectA}>{projects.toProject}</a>}
              {l.projectLink && <Link to={l.projectLink}>{projects.toProject}</Link>}
              <ul>
                {l.listItem.map(i => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </li>
          )
          )}
        </ul>
        <div className="preview" style={project.preview?.previewDivStyle}>
          <img src={project.preview?.path} alt="" style={project.preview?.previewImgStyle} />
        </div>
      </div>
    </div>
  ))
  ) || null
}

export default ProjectsTemplate