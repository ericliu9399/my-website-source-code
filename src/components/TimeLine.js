import React, { useState } from 'react'

function Time({ content, onClick }) {
  return <>
    <li className="time d-flex align-items-center">
      <div className="circle rounded-circle bg-white" onClick={onClick} />
      <div className="content">{content}</div>
    </li>
    <style jsx>{`
.time{
margin: 10px 0px;
position: relative;
}
.circle{
height: 30px;
width: 30px;
transform: translateX(-18px);
}
li{
list-style-type: none;
}
.circle{
cursor: pointer;
}
`}</style>
  </>
}

function Branch({ title, children }) {
  return <>
    <li className="branch">
      <h5>{title}</h5>
      <div className="content">
        {children}
      </div>
    </li>
    <style jsx>{`
li{
list-style-type: none;
}
h5{
padding: 5px 30px;
background: #666;
border-radius: 500px 0px;
}
.content{
padding: 0px 30px;
}
`}</style>
  </>
}
function TimeLine() {
  const [reverse, setReverse] = useState("")
  const TimeWithReverse = ({ content }) => <Time content={content} onClick={() => {
    reverse === "flex-column-reverse" ? setReverse("") : setReverse("flex-column-reverse")
  }} />
  return <>
    <ul className={"timeline d-flex flex-column " + reverse}>
      <TimeWithReverse content="至今" />
      <Branch title="自學前端" >
        <p>購買了hahow的線上課程，從 html、javascript、css開始自學，今年開始接觸 react 並且製作了個人網頁，未來目標是成為全端工程師。</p>
      </Branch>
      <TimeWithReverse content="2019年10月" />
      <Branch title="自學python">
        <p>開始自學 python，期間用 python製作了簡易翻譯機、股票小程式。後來發現比較喜歡前端，因為可以製作漂亮的介面，於是就開始自學前端。</p>
      </Branch>
      <TimeWithReverse content="2019年4月" />
      <Branch title="五股職訓局學習PLC機電整合">
        <p>PLC是工業用的可程式控制器，從事PLC工作必須接觸硬體方面。在學習過程中，我發覺我對機械、硬體興趣缺缺，只喜歡軟體的部分，於是開始研究 python。</p>
      </Branch>
      <TimeWithReverse content="2018年9月" />
      <TimeWithReverse content="2018年5月" />
      <Branch title="於宏堃科技擔任機構工程師">
        <p>大學畢業後第一份工作是擔任機構工程師。工作內容是設計機台的機構。期間有一次機構設計不良，我與負責程式的同事共同討論，並解決問題後，發現寫程式不用花錢就能解決問題，便開始喜歡程式。</p>
      </Branch>
      <TimeWithReverse content="2017年11月" />
    </ul>
    <style jsx>{`
li{
list-style-type: none;
}
.time{
background: #666;
}
.timeline{
border-left: solid 5px white;
margin: 0px;
padding: 0px;
width: fit-content;
}
`}</style>
  </>
}

export default TimeLine