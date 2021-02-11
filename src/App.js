import {useState} from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Theme from './components/Theme';

function App() {

  const [theme, setTheme] = useState(false);

  // setTheme(true);
  

  return (
    <div className="App">
        <Theme />
        <Welcome theme={theme}/>
    </div>
  );
}

export default App;
