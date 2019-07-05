import React, {useState} from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Choose} from "./components/Choose/Choose";
import {Footer} from "./components/Footer/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Restaurant} from "./components/Restaurant/Restaurant";
import ScrollToTop from "./components/scroll"
import {Basket} from "./components/Basket/Basket";

function App() {

    //  constructor(props) {
    //      super(props);
    //      this.state = {
    //          toggle: false
    //      };
    //      this.onClickBasket = this.onClickBasket.bind(this)
    //  }
    //

    // function useState() {
    //     this.setState({toggle: !this.state.toggle});
    // };
    const [clickBasket, setBasket] = useState(false);


// render() {

    return (
        <>
            <Header open={setBasket}/>
            {clickBasket && <Basket/>}
            <Router>
                <ScrollToTop>

                    <Route path="/" exact component={Choose}/>
                    <Route path="/restaurant" component={Restaurant}/>

                </ScrollToTop>
            </Router>
            <Footer/>
        </>
    )
        ;
}

// }
export default App;
