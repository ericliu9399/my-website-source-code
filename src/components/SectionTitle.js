import React from 'react'

function SectionTitle({ title, id, isPrint = false }) {
  const smPt = 4
  const pt = isPrint ? 0 : 2
  return <>
    <div className={`pt-${pt} pt-sm-${smPt}`}>
      <div className={`pt-${pt} pt-sm-${smPt}`}>
        <h2
          id={id}
          className={`text-center pt-${pt} pt-sm-${smPt}`}
        >
          {title}
        </h2>
      </div>
    </div>
  </>
}

export default SectionTitle