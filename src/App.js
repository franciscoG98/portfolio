import './App.css';
import React, { useState } from 'react';
import Theme from './components/Theme';
import NavBar from './components/Navbar';

function App() {

  const [theme, setTheme] = useState(false);


  return (
    <>
      {
        theme ? (
          <h3>theme esta en falso</h3>
          ) : (
            <NavBar theme={theme} />
          )
      }
      <Theme theme={theme} setTheme={setTheme} />

    </>
  );
}

export default App;
