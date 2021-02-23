import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar';

function App() {

  const [theme, setTheme] = useState(true);

  theme ? console.log('theme: ', theme, '\n light') : console.log('theme: ', theme, '\n dark')

  return (
    <Router>
      <NavBar theme={theme} setTheme={setTheme} />
    </Router>
  );
}

export default App;
