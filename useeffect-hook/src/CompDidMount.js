import React, { useEffect, useState } from 'react';

/*
 * if we pass empty array as a 2nd parameter,
 * UseEffect will behave as ComponentDidMounted
 * i.e: now it won't be called on updating or changes
 */

function CompDidMount() {
  const [text, setText] = useState(`You Can't Update this!`);

  const updateText = () => setText(`Updated`);

  useEffect(() => {
    console.log(`Component 3 Mounted`);
    document.getElementById('displayText').innerText = text;
  }, []);

  return (
    <div>
      <p>C3: Only ComponentDidMount() using UseEffect hook!</p>
      <h3 id="displayText">test</h3>
      <button onClick={updateText}>Update</button>
    </div>
  );
}

export default CompDidMount;
