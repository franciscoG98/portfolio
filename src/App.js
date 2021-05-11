import React from "react";
// import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/pages/home';
import About from './components/pages/about/About';
import Skills from './components/pages/skills/Skills';
import Work from './components/pages/work/Work';

// cambiar esta verga
import Footer from './components/Footer/Footer';


// borrar resume quien deja esa info online?????

function App() {

  // const [theme, setTheme] = useState('light');

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home}  />
        <Route exact path='/about' component={About}  />
        <Route exact path='/skills' component={Skills}  />
        <Route exact path='/work' component={Work}  />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
