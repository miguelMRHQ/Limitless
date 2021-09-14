import React from "react";
// App CSS
import "./App.css";
// BootStrap
import "bootstrap/dist/css/bootstrap.min.css";
// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// Components
import NavMenu from "./components/NavMenu";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route exact path="/home" component={Homepage} />
        </Switch>
        <Switch>
          <Route exact path="/about" component={AboutPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
