import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Choose } from "./components/Choose/Choose";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Restaurant } from "./components/Restaurant/Restaurant";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Route path="/" exact component={Choose} />
        <Route path="/restaurant" component={Restaurant} />
      </Router>
      <Footer />
    </div>
  );
}
export default App;
