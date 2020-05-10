import React from 'react'
import { cv, rv, rh } from '../lib/bsAlign'
import NextBtn from '../components/NextBtn'
// function Box({ children }) {
//   return (
//     <>
//       <div className="box">{children}</div>
//       <style jsx>{`
// .box{
// height: 100px;
// width: 100px;
// background: #633;
// padding: 10px;
// border-radius: 20px;
// font-size: 30px;
// }
// `}</style>
//     </>
//   )
// }

function BsGrid() {

  // const allPy = 3
  // const colPy = "pt-" + allPy
  // const rowPy = "pb-" + allPy
  // const aa = ["col-2", cv.center].join(" ")
  // const bb = "col-2"
  // const cc = ["col-2", cv.end].join(" ")



  return (
    <>
      <section className="container">
        <div className={["row", rh.center].join(' ')}>
          <div className={["col-12", cv.center, "h-100"].join(' ')}>
            <p>Hi,I am</p>
            <h1>Edin Liu</h1>
            <p>front end developer</p>
          </div>
          {/* <div className={bb}><Box>{bb}</Box></div>
          <div className={cc}><Box>{cc}</Box></div>
          <div className={cc}><Box>{cc}</Box></div> */}
          {/* <div className={`${cc} ${colPy}`}><Box>{cc}</Box></div> */}
        </div>
        <div className={["row"].join(' ')}><NextBtn /></div>
      </section>
      <style jsx>
        {`
.container{
border: solid 5px blue;
height: 100vh;
}
.row{
border: solid 5px red;
}
[class^="col-"], [class*=" col-"]{
border: solid 5px grey;
}
`}</style>
    </>
  )
}
export default BsGrid