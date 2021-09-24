import React, { useEffect, useState } from 'react';

/*
 * passing 2nd parameter in UseEffect
 * 2nd parameter is basically an array []
 * in this array you can specify on which state variable change, useEffect should invoke
 * e.g: in given example useEffect will only be called on changing flag
 * if we remove the array, it will be invoked also on name change or on every change
 */

function UseEffectWithCondition() {
  const [name, setName] = useState('');
  const [flag, setFlag] = useState(false);

  const updateFlag = () => setFlag(!flag);

  useEffect(() => {
    console.log(`Component 2, Flag -> ${flag}`);

    return () => {
      console.log(`Unmounting C2`);
    };
  }, [flag]);

  return (
    <div>
      <p>C2: UseEffect With Conditionaly Run Effect (Chk Console)!</p>
      <input
        id="input"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={updateFlag}>Print</button>
    </div>
  );
}

export default UseEffectWithCondition;
