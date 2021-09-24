import './App.css';
import CompDidMountNUpdate from './CompDidMountNUpdate';
import UseEffectWithCondition from './UseEffectWithCondition';
import CompDidMount from './CompDidMount';
import ComponentWillUnMount from './CompWillUnMount';

function App() {
  return (
    <div className="App">
      <CompDidMountNUpdate />
      <UseEffectWithCondition />
      <CompDidMount />
      <ComponentWillUnMount />
    </div>
  );
}

export default App;
