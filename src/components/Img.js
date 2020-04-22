import React, { useEffect, useState } from 'react'

function Img({ src }) {
  useEffect(() => {
    fetch(src)
      .then(res => res.blob())
      .then(img => URL.createObjectURL(img))
      .then(url => setImgSrc(url))
  }, [])
  const [imgSrc, setImgSrc] = useState("")
  return <img src={imgSrc}></img>
}

export default Img