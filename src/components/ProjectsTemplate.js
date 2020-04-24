import React, { useRef, useState, useMemo, createRef } from 'react'
import { Link } from "react-router-dom"
import './ProjectsTemplate.sass'
import ProjectsTemplateContentChinese from './ProjectsTemplateContentChinese.json'
import ProjectsTemplateContentEnglish from './ProjectsTemplateContentEnglish.json'
import dataArray from './ProjectsTemplateData.json'

function ProjectsTemplate({ language }) {
  const divRef = useRef(null)
  const [divStyle, setDivStyle] = useState(null)
  const [imgStyle, setImgStyle] = useState({})
  function onImgLoad({ target: img }, divRef, key) {
    // console.log(key)
    let img_width = img.offsetWidth
    let div_width = divRef.current.offsetWidth
    // console.log('img_width', img.offsetWidth)
    // console.log('div_width', divRef.current ? divRef.current.offsetWidth : 0)
    if (img_width > div_width) {
      let imgOffset = (img_width - div_width) / 2
      let newImgStyle = JSON.parse(JSON.stringify(imgStyle))
      newImgStyle[key] = { "right": `-${imgOffset}px` }
      setImgStyle(newImgStyle)
    }
  }
  let content
  if (language === "chinese") content = ProjectsTemplateContentChinese
  if (language === "english") content = ProjectsTemplateContentEnglish


  let { projectArray, toSrc, toProject } = content
  const refs = useMemo(() =>
    Array.from({ length: projectArray.length }).map(() => createRef())
    , [projectArray.length])
  return projectArray.map((item1, key1) => {
    const { title, summary, list: contentList } = item1
    const { preview, list: dataList, subContainerStyle } = dataArray[key1]
    return (
      <div className="project" key={key1}>
        <div className="sub_container">
          <div className="content">
            <h2>{title}</h2>
            <p>{summary}</p>
          </div>
          <div className="feature">
            {dataList?.map((item2, key2) => {
              const { listTitle } = contentList ? contentList[key2] : {}
              const { srcA, projectA, projectLink, listItem } = item2
              return (
                <ul>
                  {listTitle}
                  {srcA && <p>srcA</p>}
                  {projectA && <p>projectA</p>}
                  {projectLink && <p>projectLink</p>}
                  {listItem && <p>listItem</p>}
                </ul>
              )
            })}
          </div>
        </div>
        <div className="preview">
        </div>
      </div>
    )
  })
}
//
export default ProjectsTemplate