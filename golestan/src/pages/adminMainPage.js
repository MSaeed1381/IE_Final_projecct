import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import './adminMainPage.css'

const AdminMainPage = () => {
    return (
        <div className="app">
            <Header />
            <div className="app-content">
                <Sidebar />
                <Content />
            </div>
        </div>
    );
};

export default AdminMainPage;
