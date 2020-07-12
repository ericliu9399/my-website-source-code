import React from 'react';
import NextBtn from './NextBtn';
import myphoto from '../images/myphoto.png';
import SectionTitle from './SectionTitle';
import TimeLine from './TimeLine';
import SkillIconContainer from './SkillIconContainer';

function AboutMe({ data, isPrint = false }) {
  const { title, content, subTitle } = data;
  return (
    <>
      <section className="min-vh-100 pt-sm-5 d-flex flex-column" id="aboutMe">
        <SectionTitle isPrint={isPrint} title={title} />
        <div className="flex-grow-1 d-flex flex-column">
          <div className="d-flex flex-column flex-md-row align-items-center">
            <img src={myphoto} alt="Edin Liu" />
            <p className="p-5 w-100">
              {content}
            </p>
          </div>
          <h4 className={`text-center pt-${isPrint ? 0 : 3} pb-${isPrint ? 0 : 5}`}>經歷</h4>
          <div className="d-flex justify-content-center">
            <TimeLine isPrint={isPrint} />
          </div>
          {!isPrint && <h4 className="text-center pt-3 pb-5">{subTitle}</h4>}
          {!isPrint && <SkillIconContainer />}
          {!isPrint && (
            <div className="d-flex justify-content-center">
              <NextBtn href="#projects" />
            </div>
          )}
        </div>
      </section>
      <hr style={{ pageBreakBefore: 'always' }} />
      <style jsx>
        {`
img{
width: auto;
height: auto;
max-width: 250px;
max-height: 250px;
border-radius: 50%;
}
p{
line-height: 1.5rem;
}
`}
      </style>
    </>
  );
}

export default AboutMe;
