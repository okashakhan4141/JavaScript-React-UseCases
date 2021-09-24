import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// for use case: 4
const HelloWorld = () => {
  useEffect(() => {
    console.log("Mount - 'Toggle Button'");

    return () => {
      console.log("Unmount - 'Toggle Button'");
    };
  });

  return <h3>Hello World!!!</h3>;
};

const App = () => {
  // useEffect() takes in two arguments, one is a function, the second is an optional dependency array.

  // ***** USE CASE: 1 *****
  /*
  In this case, useEffect() is called whenever something is rendered on the page.
  It's a really expensive use of useEffect() as it would use extra resources on useless events/renders.
  It isn't used normally.
  */
  useEffect(() => {
    console.log("useEffect() is called on every event/render.");
  });

  // ***** USE CASE: 2 *****
  /*
  In this case, useEffect() is called at initialization time - when web page loads/reloads - on first render/mount only.
  An empty array is passed as 2nd argument for this purpose.
  Alternate to componentDidMount() in class component.
  */
  useEffect(() => {
    console.log("useEffect() is called initially - when page loads/reloads.");
  }, []);

  // ***** USE CASE: 3 *****
  /*  
  In this case, useEffect() is called at initialization time - when web page loads/reloads - on first render/mount only.
  And whenever there a change in dependency array.
  A dependency array is passed as 2nd argument for this purpose.
  Alternate to componentDidUpdate() in class component.
  */

  const [text, setText] = useState("");

  useEffect(() => {
    console.log(`Updated name: ${text}`);
  }, [text]);

  // ***** USE CASE: 4 *****
  /*
  In this case, useEffect() behaves same as use case no. 3, except it handles the unmounting stage of the lifecycle.
  An empty array is passed as 2nd argument for this purpose.
  */

  // see HelloWorld function component

  const [showText, setTextState] = useState(true);

  //........................................................................................
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Welcome to React </h1>

        {/* for use case 3 */}
        <input
          value={text}
          onChange={(x) => setText(x.target.value)}
          placeholder="enter any text here..."
        ></input>
        {/* -------------- */}

        {/* for use case 4 */}
        <button id="my-toggle" onClick={() => setTextState(!showText)}>
          <h4>Mount/Unmount</h4>
        </button>
        {showText && <HelloWorld />}
        {/* -------------- */}
      </header>
    </div>
  );
};
//........................................................................................

export default App;