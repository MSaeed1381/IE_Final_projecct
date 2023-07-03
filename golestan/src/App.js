import './App.css';
import Login from './pages/Login'
import React, { Component }  from 'react';
import ReactDOM from "react-dom/client";
import AdminMainPage from "./pages/adminMainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as PropTypes from "prop-types";



function App() {
        return (
            <BrowserRouter>
                <Routes>
                        <Route index element={<Login />} />
                        <Route path="admin" element={<AdminMainPage />} />

                </Routes>
            </BrowserRouter>
        );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
