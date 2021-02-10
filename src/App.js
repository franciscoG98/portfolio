import {useState} from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Theme from './components/Theme';

function App() {

  const [mode, setMode] = useState(false);
  

  return (
    <div className="App">
        <Welcome mode={mode}/>
        <Theme />
    </div>
  );
}

export default App;
