import React from "react";
import Accueil from "../Pages/Accueil";
import Contact from "../Pages/Contact";
import CGU from "../Pages/CGU";
import "../App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TripListScreen from "../NewLifeTripListScreen/tripListScreen";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/voyage" component={TripListScreen} />

        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cgu" component={CGU} />
      </Router>
    </QueryClientProvider>
  );
}
