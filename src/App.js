import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Choose} from "./Choose/Choose";
import {Footer} from "./Footer/Footer";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Restaurant} from "./Restaurant/Restaurant";

function App() {
    return (
        <div>
                <Header/>
                <Router>
                    <Route path='/' exact component={Choose}/>
                    <Route path='/restaurant' component={Restaurant}/>
                </Router>
                <Footer/>
        </div>
    );
}
export default App;
