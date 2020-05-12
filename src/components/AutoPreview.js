import React from 'react'
/**
圖片高度與外框相等，寬度比外框長的時候，可以自動讓圖片置中
@param preview object {path} 圖片路徑
 */
function AutoPreview({ preview }) {
  const { path } = preview
  const [imgStyle, setImgStyle] = useState({})
  const divRef = useMemo(() => {
    // console.log("AutoPreview useMemo create divRef")
    return createRef()
  }, [])
  function moveToMiddle({ target: img }) {
    // console.log(key)
    let img_width = img.offsetWidth
    let div_width = divRef.current.offsetWidth
    // console.log(div_width)
    console.log('img_width', img.offsetWidth)
    console.log('div_width', divRef.current ? divRef.current.offsetWidth : 0)
    if (img_width > div_width) {
      let imgOffset = (img_width - div_width) / 2
      setImgStyle({ "right": `-${imgOffset}px` })
    }
  }
  return (
    <div className="w-100 h-100" ref={divRef}>
      <img
        className="h-100 rounded"
        src={path} alt=""
        style={imgStyle}
        onLoad={(t) => { moveToMiddle(t) }}
      />
    </div>
  )
}

export default AutoPreview