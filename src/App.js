import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Components/Navigation";

export default function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}
