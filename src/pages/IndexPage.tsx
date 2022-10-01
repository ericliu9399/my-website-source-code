import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BgImg from '../images/home_bg.svg';
import apiUrl from '../lib/apiUrl';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import LanguageSelect from '../components/LanguageSelect';
import Project from '../components/Project';
import AboutMe from '../components/AboutMe';
import Home from '../components/Home';
import Contact from '../components/Contact';
import ContentEnglish from './contents/indexPageContentEnglish.json';
import ContentChinese from './contents/indexPageContentChinese.json';
import ProjectCht from './contents/ProjectsContentChinese.json';
import ProjectEng from './contents/ProjectsContentEnglish.json';
import ProjectData from './contents/ProjectsUrlData.json';

function IndexPage() {
  useEffect(() => {
    fetch(`${apiUrl}start`)
      .then((res) => res.text())
      .then((text) => console.log(text));
  }, []);
  const [language, setLanguage] = useState('chinese');
  let content;
  if (language === 'chinese') content = ContentChinese;
  if (language === 'english') content = ContentEnglish;
  const { home, aboutMe, contact } = content;
  if (language === 'chinese') content = ProjectCht;
  if (language === 'english') content = ProjectEng;
  const dataArray = ProjectData;
  return (
    <>
      <Header>
        <a href="#home" className="nav-link pr-1">home</a>
        <a href="#aboutMe" className="nav-link pr-1">about me</a>
        <a href="#projects" className="nav-link pr-1">projects</a>
        <a href="#contact" className="nav-link pr-1">contact</a>
        <a href="https://edinliu.blogspot.com/" className="nav-link pr-1">blog</a>
        <Link to="/message_board.html" className="nav-link pr-1">留言板</Link>
        <Link to="/for_print.html" className="nav-link pr-1">列印</Link>
        <div className="pl-3 pr-3">
          <LanguageSelect
            switchLangMethod={setLanguage}
            language={['chinese', 'english']}
            currentLanguage={language}
            key="LanguageSelect"
          />
        </div>
      </Header>
      <div id="BgImg"><BgImg /></div>
      <main className="container">
        <Home nameCard={home.nameCard} />
        <div className="bgDiv" />
        <AboutMe data={aboutMe} />
        <Project content={content} dataArray={dataArray} />
        <Contact data={contact} />
      </main>
      <MobileNav>
        <a href="#home" className="btn btn-primary">home</a>
        <a href="#aboutMe" className="btn btn-primary">about me</a>
        <a href="#projects" className="btn btn-primary">projects</a>
        <a href="#contact" className="btn btn-primary">contact</a>
        <Link to="/message_board.html" className="btn btn-primary">留言板</Link>
        <Link to="/for_print.html" className="btn btn-primary">列印</Link>
        <button
          type="button"
          className="btn btn-primary d-flex justify-content-center"
        >
          <LanguageSelect
            switchLangMethod={setLanguage}
            language={['chinese', 'english']}
            currentLanguage={language}
            key="LanguageSelect"
          />
        </button>
      </MobileNav>
      <style jsx>
        {`
main{
min-height:100vh;
}
#BgImg{
  z-index: -1;
  position: absolute;
  top: 0px;
  right: 0px;
}
`}
      </style>
    </>
  );
}

export default IndexPage;
