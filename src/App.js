import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/pages';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';


function App() {

  const [theme, setTheme] = useState(true);

  theme ? console.log('theme: ', theme, '\n light') : console.log('theme: ', theme, '\n dark')

  return (
    <Router>
      <NavBar theme={theme} setTheme={setTheme} />
      <Switch>
        <Route exact path='/portfolio' component={Home}/>
        <Route path='/portfolio/about' component={About}/>
        <Route path='/portfolio/skills' component={Skills}/>
        <Route path='/portfolio/work' component={Work}/>
        <Route path='/portfolio/contact' component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
