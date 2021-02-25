import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/pages/home';
import About from './components/pages/about/About';
import Skills from './components/pages/skills/Skills';
import Work from './components/pages/work/Work';
import Contact from './components/pages/contact/Contact';


function App() {

  const [theme, setTheme] = useState(true);
  // const [lang, setLang] = useState('es');

  theme ? console.log('theme: ', theme, '\n light') : console.log('theme: ', theme, '\n dark')

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar theme={theme} setTheme={setTheme} />
      <Switch>
        <Route exact path='/' component={Home} theme={theme} />
        <Route exact path='/about' component={About} theme={theme} />
        <Route exact path='/skills' component={Skills} theme={theme} />
        <Route exact path='/work' component={Work} theme={theme} />
        <Route exact path='/contact' component={Contact} theme={theme} />
      </Switch>
    </Router>
  );
}

export default App;
