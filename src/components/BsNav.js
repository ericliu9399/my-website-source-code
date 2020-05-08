import React, { Children, isValidElement, cloneElement } from 'react';
import './BsNav.css'


function BsNav({ children }) {

  const childrenWithProps = Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a TS error too.
    if (isValidElement(child)) {
      return cloneElement(child, { className: "nav-link" })
    }
    return child;
  });

  return <>
    <ul className="nav justify-content-end">
      {
        childrenWithProps.map(child => (
          <li
            className="nav-item">{child}
          </li>)
        )
      }
    </ul>
    <style jsx>{`
.nav{
width: 100%;
}
`}</style>
  </>
};
export default BsNav
