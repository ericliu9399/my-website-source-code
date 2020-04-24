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
  // const mergeArray = projectArray.map((item1, key1) => {
  //   const { title, summary, contentList } = item1
  //   const { preview, subContainerStyle, dataList } = dataArray[key1]
  //   const mergeList = contentList.map((item2, key2) => {
  //     const { listTitle } = item2
  //     const { srcA, projectLink, listItem } = dataList[key2]
  //   })
  // })

  // const refs = useMemo(() =>
  //   Array.from({ length: projectArray.length }).map(() => createRef())
  //   , [projectArray.length])

  // const { title, summary, list: contentList } = item1
  // const { preview, list: dataList, subContainerStyle } = dataArray[key1]


  return projectArray.map((item1, key1) => {
    return (
      <div className="project" key={key1}>

        <div className="preview">
        </div>
      </div>
    )
  })
}
//
export default ProjectsTemplate