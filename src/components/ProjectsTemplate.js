import React, { useRef, useState, useMemo, createRef, useEffect } from 'react'
import { Link } from "react-router-dom"
import './ProjectsTemplate.sass'
import ProjectsTemplateContentChinese from './ProjectsTemplateContentChinese.json'
import ProjectsTemplateContentEnglish from './ProjectsTemplateContentEnglish.json'
import dataArray from './ProjectsTemplateData.json'

function ProjectsTemplate({ language }) {
  const divRef = useRef(null)
  const [divStyle, setDivStyle] = useState(null)
  const [imgStyle, setImgStyle] = useState({})

  let content
  if (language === "chinese") content = ProjectsTemplateContentChinese
  if (language === "english") content = ProjectsTemplateContentEnglish


  let { projectArray, toSrc, toProject } = content



  const FeatureItem = ({ contentListItem, dataListItem, toSrc, toProject }) => {
    const { listTitle } = contentListItem || {}
    const { srcA, projectLink, projectA, listItem } = dataListItem || {}
    return (
      <div className=".FeatureItem">
        {listTitle && <p>{listTitle}</p>}
        {srcA && <><a href={srcA}>{toSrc}</a><br /></>}
        {projectLink && <><Link to={projectLink}>{toProject}</Link><br /></>}
        {projectA && <><a href={projectA}>{toProject}</a><br /></>}
        <ul>
          {listItem.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    )
  }
  const Feature = ({ contentList, dataList, toSrc, toProject }) => {
    const length = Math.max(dataList.length, contentList.length)
    const array = Array.from({ length: length })
    return (
      <div className="feature">
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
  const Content = ({ title, summary }) => {
    return (
      <div className="content">
        <h2>{title}</h2>
        <p>{summary}</p>
      </div>
    )
  }
  // const refs = useMemo(() =>
  // Array.from({ length: projectArray.length }).map(() => createRef())
  // , [projectArray.length])
  const Preview = ({ preview }) => {
    const { path } = preview
    let divRef
    useEffect(() => { divRef = createRef() }, [])
    const { imgStyle, setImgStyle } = useState({})
    function moveToMiddle({ target: img, divRef }) {
      // console.log(key)
      let img_width = img.offsetWidth
      let div_width = divRef.current.offsetWidth
      // // console.log('img_width', img.offsetWidth)
      // // console.log('div_width', divRef.current ? divRef.current.offsetWidth : 0)
      // if (img_width > div_width) {
      //   let imgOffset = (img_width - div_width) / 2
      //   setImgStyle({ "right": `-${imgOffset}px` })
      // }
    }
    return (
      <div className="preview" ref={divRef}>
        <img src={path} alt="" style={imgStyle} onLoad={(t) => { moveToMiddle(t, divRef) }} />
      </div>
    )
  }
  return projectArray.map((item, key) => {
    const { title, summary, list: contentList } = item
    const { preview, list: dataList, subContainerStyle } = dataArray[key]
    return (
      <div className="project" key={key}>
        <div className="sub_container" style={subContainerStyle}>
          <Content title={title} summary={summary} />
          <Feature
            contentList={contentList}
            dataList={dataList}
            toSrc={toSrc}
            toProject={toProject}
          />
        </div>
        <Preview preview={preview} />
      </div>
    )
  })
}

export default ProjectsTemplate