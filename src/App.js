import React, {useState} from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Choose} from "./components/Choose/Choose";
import {Footer} from "./components/Footer/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Restaurant} from "./components/Restaurant/Restaurant";
import ScrollToTop from "./components/scroll";
import {Basket} from "./components/Basket/Basket";

function App() {

    const [clickBasket, setBasket] = useState(false);

    return (
        <>
            <Router>
                <Header open={setBasket} />
                {clickBasket &&
                    <Basket close={setBasket}
                    />}

                <ScrollToTop>
                    <Route path="/" exact component={Choose}/>
                    <Route path="/restaurant" component={<Restaurant/>}/>
                </ScrollToTop>
            </Router>
            <Footer/>
        </>
    );
}

export default App;
