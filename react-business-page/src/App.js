import React from "react";

import Nav from "./Nav.js";
import Section from "./Section.js";
import OrderedList from "./OrderedList";
import Body from "./Body";
import Footer from "./Footer";

function App() {
    return (
        <div>
            <Nav />
            <Body />
            <Section />
            <OrderedList />
            <Footer />
        </div>
    )
}

export default App;