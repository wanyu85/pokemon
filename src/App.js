import "./scss/App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Types from "./pages/Types";
import styled from "styled-components";
import News from "./pages/News";
import Product from "./pages/Product";
import Pokemon from "./pages/Pokemon";
import PostProvider from "./pages/PostProvider";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <PostProvider>
                <Header />
                <Home />
                <News />
                <Product />
                <Types />
                <Pokemon />
            </PostProvider>
        </BrowserRouter>
    );
}

export default App;
