import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/Store';
import Home from './components/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    return (
        <Provider store={store}>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
            <Footer/>
        </Provider>
    );
}

export default App;
