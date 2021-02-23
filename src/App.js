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
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/skills' component={Skills}/>
        <Route path='/work' component={Work}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
