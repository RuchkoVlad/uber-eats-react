import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Choose } from "./components/Choose/Choose";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Restaurant } from "./components/Restaurant/Restaurant";
import ScrollToTop from "./components/scroll";
import { Basket } from "./components/Basket/Basket";

function App() {
  const [clickBasket, setBasket] = useState(false);
  let [orders, setOrders] = useState([]);
  return (
    <>
      <Router>
        <Header open={setBasket} />
        {clickBasket && (
          <Basket close={setBasket} orders={orders} setOrders={setOrders} />
        )}
        <ScrollToTop>
          <Route path="/" exact component={Choose} />
          <Route
            path="/restaurant"
            exact
            component={() => (
              <Restaurant orders={orders} setOrders={setOrders} />
            )}
          />
        </ScrollToTop>
      </Router>
      <Footer />
    </>
  );
}

export default App;
