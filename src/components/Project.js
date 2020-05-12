import React from 'react'
import { Link } from "react-router-dom"
import SectionTitle from './SectionTitle'

function FeatureItem({ contentListItem, dataListItem, toSrc, toProject }) {
  const { listTitle } = contentListItem || {}
  const { srcA, projectLink, projectA, listItem } = dataListItem || {}
  const ToSrc = () => <a href={srcA}>
    <button className="btn btn-primary m-1">{toSrc}</button>
  </a>
  const ToProjectLink = () => <Link to={projectLink}>
    <button className="btn btn-secondary m-1">{toProject}</button>
  </Link>
  const ToProjectAnchor = () => <a href={projectA}>
    <button className="btn btn-secondary m-1">{toProject}</button>
  </a>
  return (
    <div className="mr-3">
      {listTitle && <p>{listTitle}</p>}
      {srcA && <ToSrc />}
      {projectLink && <ToProjectLink />}
      {projectA && <ToProjectAnchor />}
      <ul>
        {listItem.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}
function Feature({ contentList, dataList, toSrc, toProject }) {
  const length = Math.max(dataList.length, contentList.length)
  const array = Array.from({ length: length })
  return (
    <div className="d-flex flex-row justify-content-start">
      {array.map((item, key) => {
        return (
          <FeatureItem
            contentListItem={contentList[key]}
            dataListItem={dataList[key]}
            toSrc={toSrc}
            toProject={toProject}
            key={JSON.stringify(dataList[key])}
          />
        )
      })}
    </div>
  )
}
function Content({ title, summary }) {
  return (
    <div className="styles">
      <h2>{title}</h2>
      <p>{summary}</p>
    </div>
  )
}
function Preview({ preview }) {
  const { path } = preview
  return (
    <>
      <div className="w-100">
        <img className="w-100 round box-shadow" src={path} alt="" />
      </div>
      <style jsx>{`
.round{
border-radius: 30px;
}
.box-shadow{
box-shadow: 5px 5px 30px rgba(255,255,255,0.5);
}
`}</style>
    </>
  )
}
function ProjectItemUpper({ subContainerStyle, title, summary, contentList, dataList, toSrc, toProject }) {
  return (
    <div className="d-flex flex-column" style={subContainerStyle}>
      <Content title={title} summary={summary} />
      <Feature
        contentList={contentList}
        dataList={dataList}
        toSrc={toSrc}
        toProject={toProject}
      />
    </div>
  )
}
function ProjectItem({ subContainerStyle, title, summary, contentList, dataList, toSrc, toProject, preview }) {
  return (
    <div className="d-flex flex-column flex-lg-row pb-2 pb-5" >
      <ProjectItemUpper subContainerStyle={subContainerStyle}
        title={title}
        summary={summary}
        contentList={contentList}
        dataList={dataList}
        toSrc={toSrc}
        toProject={toProject}
      />
      <Preview preview={preview} />
    </div>
  )
}
function ProjectItemArray({ projectArray, toProject, toSrc, dataArray }) {
  return projectArray.map((item, key) => {
    const { title, summary, list: contentList } = item
    const { preview, list: dataList, subContainerStyle } = dataArray[key]
    return (
      <ProjectItem
        key={JSON.stringify(dataList)}
        subContainerStyle={subContainerStyle}
        title={title}
        summary={summary}
        contentList={contentList}
        dataList={dataList}
        toSrc={toSrc}
        toProject={toProject}
        preview={preview}
      />
    )
  })
}
function Project({ content, dataArray }) {

  const { projectArray, title: sectionTitle, toProject, toSrc } = content
  return (
    <>
      <section className="container" id="projects">
        <div className="">
          <SectionTitle title={sectionTitle} />
          <ProjectItemArray
            projectArray={projectArray}
            toProject={toProject}
            toSrc={toSrc}
            dataArray={dataArray}
          />
        </div>
      </section>
    </>
  )
}

export default Project