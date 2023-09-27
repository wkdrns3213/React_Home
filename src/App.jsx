// src/App.js

import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/Store';
import Home from './components/Home';
import Login from './components/Login';
import Board from './components/Board';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <Provider store={store}>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/board" element={<Board/>}/>
            </Routes>
            <Footer/>
        </Provider>
    );
}

export default App;
