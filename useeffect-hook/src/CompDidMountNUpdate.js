import React, { useEffect, useState } from 'react';

/*
 * UseEffect is hook that allows you to perform side effects
 * In class components, you can use side effect function:
 * e.g: ComponentDidMount etc.
 * In functional components, this can be achieved by useEffect
 * UseEffect has 2 arguments
 * 1. A callback function in which you write what shoud a function do on side effect
 * 2. 2nd parameter is an array [] basically used to tune the useEffect hook
 * (More in coming components!)
 */

function CompDidMountNUpdate() {
  const [count, setCount] = useState(0);

  const updateCount = () => setCount(count + 1);
  const resetCount = () => setCount(0);

  // Similar to componentDidMount and componentDidUpdate
  // this will be called after every single render! -> Performance prob
  useEffect(() => {
    let counter = document.getElementById('displayCount').innerText;

    // checking for initial default value
    // saperating Mount and Update
    if (counter === 'Counter') {
      console.log(`Component 1 Mounted`);
      document.getElementById('displayCount').innerText = 0;
    } else {
      console.log(`Component 1 Updated`);
      document.getElementById('displayCount').innerText = count;
    }
  });

  return (
    <div>
      <p>
        C1: ComponentDidMount() and ComponentDidUpdate() using UseEffect hook!
      </p>
      <h1 id="displayCount">Counter</h1>
      <button onClick={updateCount}>Count++</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default CompDidMountNUpdate;
