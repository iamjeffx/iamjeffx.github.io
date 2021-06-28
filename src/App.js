import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/NavBar/navbar"
import Home from "./components/Home/home"
import Portfolio from "./components/Portfolio/portfolio"
import Contact from "./components/Contact/contact"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar></Navbar>
          <Home></Home>
        </Route>
        <Route path="/portfolio">
          <Navbar></Navbar>
          <Portfolio></Portfolio>
        </Route>
        <Route path="/contact">
          <Navbar></Navbar>
          <Contact></Contact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
