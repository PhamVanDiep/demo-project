import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "../structure/Header.js";
import Footer from "../structure/Footer.js";
import Body from "../structure/Body.js";

function Homepage() {
    return(
        <Router>
            <div>
                <Header />      
                <Body />
                <Footer />    
            </div>
        </Router>
    );
}

export default Homepage;