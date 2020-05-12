import React from 'react'

function SectionTitle({ title, id }) {
  return <>
    <h2
      id={id}
      className="text-center pt-1 pt-sm-5"
    >
      {title}
    </h2>

  </>
}

export default SectionTitle