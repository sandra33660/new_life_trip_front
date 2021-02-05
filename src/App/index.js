import React from "react";
import Accueil from "../Pages/Accueil";
import Voyage from "../Pages/Voyage";
import Contact from "../Pages/Contact";
import CGU from "../Pages/CGU";
import "../App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Accueil} />
      <Route exact path="/voyage" component={Voyage} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/cgu" component={CGU} />
    </Router>
  );
}
