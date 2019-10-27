import React from "react";
import Header from "./Header";
import Home from "./Home";
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import About from "./About";
import Work from "./Work";

//import '../css/main.css';

function Dashboard() {


  return (
    <React.Fragment>
      <Router>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/work' component={Work} />
      </Router>
    </React.Fragment>
  );
}

export default Dashboard;
