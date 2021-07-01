import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/home';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Work from './pages/work/Work';




function App() {

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
