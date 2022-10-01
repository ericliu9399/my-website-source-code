import React, { useState } from 'react';

function Time({ content, onClick }) {
  return (
    <>
      <li className="time d-flex align-items-center">
        <div className="circle rounded-circle bg-white" onClick={onClick} />
        <div className="content">{content}</div>
      </li>
      {/* <style jsx>
        {`
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
`}
      </style> */}
    </>
  );
}

function Branch({ title, children, isPrint }) {
  return (
    <>
      <li className="branch">
        <h5>{title}</h5>
        <div className="content">
          {children}
        </div>
      </li>
      {/* <style jsx>
        {`
li{
list-style-type: none;
}
h5{
padding: 5px 30px;
background: ${isPrint === false ? '#666' : '#0EE0E6'};
border-radius: 500px 0px;
}
.content{
        padding: 0px 30px;
}
`}
      </style> */}
    </>
  );
}
function TimeLine({ isPrint = false }) {
  const [reverse, setReverse] = useState('');
  const TimeWithReverse = ({ content }) => (
    <Time
      content={content}
      onClick={() => {
        reverse === 'flex-column-reverse' ? setReverse('') : setReverse('flex-column-reverse');
      }}
    />
  );
  return (
    <>
      <ul className={`timeline d-flex flex-column ${reverse}`}>
        <TimeWithReverse content="至今" />
        <Branch isPrint={isPrint} title="自學前端">
          <p>購買了hahow的線上課程，從 html、javascript、css開始自學，今年開始接觸 react 與 bootstrap 並且製作了個人網頁，目前仍在努力學習中。</p>
        </Branch>
        <TimeWithReverse content="2019年10月" />
        <Branch isPrint={isPrint} title="自學python">
          <p>
            開始自學 python，期間用 python製作了
            <a href="https://github.com/edinliu/python-simple-translator">簡易翻譯機</a>
            。其ui介面是用tkinter這個python函式庫製作的。在製作這個ui介面的過程，感受到做一個ui介面對使用者而言非常重要，而用python製作ui介面在外觀上相對於網頁來說是缺乏靈活性的，而網頁css則可以對ui進行外觀的設定，且透過瀏覽器，可以輕易地運行在各種有瀏覽器的裝置中，而且javascript npm 模組的生態系也非常豐富，覺得學習javascript未來非常光明，於是就開始自學前端。
          </p>
        </Branch>
        <TimeWithReverse content="2019年4月" />
        <Branch isPrint={isPrint} title="五股職訓局學習PLC機電整合">
          <p>PLC是工業用的可程式控制器，從事PLC工作必須接觸硬體方面。在學習過程中，我發覺我對機械、硬體方面興趣缺缺，想製作可以與人互動的程式，由於當時人工智慧與python非常熱門，我認為學習python一定不會錯，於是開始自學python。</p>
        </Branch>
        <TimeWithReverse content="2018年9月" />
        <Branch isPrint={isPrint} title="離職之後">
          <p>這段期間考取了汽車駕照，並報名了五股職訓局的機電整合課程。</p>
        </Branch>
        <TimeWithReverse content="2018年5月" />
        <Branch isPrint={isPrint} title="於宏堃科技擔任機構工程師">
          <p>大學畢業後第一份工作是擔任機構工程師。工作內容是設計機台的機構。期間有一次我與負責程式的同事共同討論，並解決機構方面的問題後，發現寫程式不用花錢就能解決問題，便開始喜歡程式。</p>
        </Branch>
        <TimeWithReverse content="2017年11月" />
      </ul>
      {/* <style jsx>
        {`
li{
list-style-type: none;
}
.time{
background:#B0E0E6;
}
.timeline{
border-left: solid 5px white;
margin: 0px;
padding: 0px;
width: fit-content;
}
`}
      </style> */}
    </>
  );
}

export default TimeLine;
