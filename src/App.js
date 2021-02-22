import './App.css';
import React, { useState } from 'react';
import NavBar from './components/Navbar';

function App() {

  const [theme, setTheme] = useState(true);

  theme ? console.log('theme: ', theme, '\n light') : console.log('theme: ', theme, '\n dark')

  return (
    <>
      <NavBar theme={theme} setTheme={setTheme} />
    </>
  );
}

export default App;
