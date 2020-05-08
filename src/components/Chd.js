import React, { Children, isValidElement, cloneElement } from 'react';

const Child = ({ doSomething, value }) => (
  <div onClick={() => doSomething(value)}>Click Me</div>
);

function Parent({ children }) {
  function doSomething(value) {
    console.log('doSomething called by child with value:', value);
  }

  const childrenWithProps = Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a TS error too.
    if (isValidElement(child)) {
      return cloneElement(child, { doSomething })
    }
    return child;
  });

  return <div>{childrenWithProps}</div>
};

function Chd() {
  return <Parent>
    <Child value="1" />
    <Child value="2" />
  </Parent>
}

export default Chd