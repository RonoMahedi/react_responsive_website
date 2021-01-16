import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";

import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import Shop from "./components/Shop";

function App() {
    return (
        <div>
            <Header />
            <About />
            <Shop/>
            <Menu />
            <Clients />
            <Prices />
        </div>
    );
}

export default App;