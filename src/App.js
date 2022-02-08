import React,{useState} from 'react';
import Greeting from './components/Greetings';

const [body,setBody] = useState({})
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>d2React</h1>
        <Greeting body/>
      </header>
    </div>
  );
}

export default App;
