import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  //UseEffects takes in two arguments, one is a function, the second is an optional dependency array

  //Use Case: 1 --> On every rendor // very expensive, we don't usually use this

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
  });

  //Use Case: 2 --> On first render/mount only, alternate to component did mount for class components

  useEffect(() => {}, []); // The dependency list is empty sio it tells react that only run this on the first render.

  //Use Case: 3 --> On first render and whenever a dependency changes, alternate to componentdidupdate

  useEffect(() => {
    console.log(`The name was changed: ${name}`);
  }, [name]);

  //Use Case: 4 --> Follows the same rule, except this handles the unmounting stage of the lifecycle.

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  });

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  return (
    <div className="App">
      <center>
        <h1>The UseEffect Hook</h1>
        <h2>The width of the Window is: {windowWidth}</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a name"
        ></input>
      </center>
    </div>
  );
}

export default App;
