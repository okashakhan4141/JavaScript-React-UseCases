import React, { useEffect, useState } from 'react';
import UseEffectWithCondition from './UseEffectWithCondition';

function ComponentWillUnMount() {
  const [flag, setFlag] = useState(true);

  const updateFlag = () => setFlag(!flag);

  useEffect(() => {
    console.log(`Component 4 Mounted/Updated`);
  });

  return (
    <div>
      <p>C4: ComponentWillUnMount() using useEffect (Mount/Unmount C2)</p>
      <button onClick={updateFlag}>Toggle C2</button>

      {flag && <UseEffectWithCondition />}
    </div>
  );
}

export default ComponentWillUnMount;
