import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/pages/home';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';


function App() {

  const [theme, setTheme] = useState(true);

  theme ? console.log('theme: ', theme, '\n light') : console.log('theme: ', theme, '\n dark')

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar theme={theme} setTheme={setTheme} />
      <Switch>
        <Route exact path='/portfolio' component={Home} theme={theme} />
        <Route exact path='/portfolio/about' component={About} theme={theme} />
        <Route exact path='/portfolio/skills' component={Skills} theme={theme} />
        <Route exact path='/portfolio/work' component={Work} theme={theme} />
        <Route exact path='/portfolio/contact' component={Contact} theme={theme} />
      </Switch>
    </Router>
  );
}

export default App;
