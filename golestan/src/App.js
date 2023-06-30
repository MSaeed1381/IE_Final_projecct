import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import React, { Component }  from 'react';
import AdminMainPage from "./pages/adminMainPage";

function App() {
  return (
    <div className="App">
        {/*<Login></Login>*/}
        <AdminMainPage></AdminMainPage>
    </div>
  );
}

export default App;
