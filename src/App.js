import './App.css';
import React, { useState } from 'react';
import Theme from './components/Theme';



function App() {

  const [theme, setTheme] = useState(true);

  theme ? console.log('theme: ', theme, '\n light') : console.log('theme: ', theme, '\n dark')

  return (
    <>
      <Theme theme={theme} setTheme={setTheme} />

    </>
  );
}

export default App;
