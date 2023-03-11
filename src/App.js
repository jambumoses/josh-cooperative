import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./HomePage";
import Footer from "./components/Footer";
import "./assets/css/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/index" component={HomePage} />

          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />

          {/* 404 */}
          <Route path="*" component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
