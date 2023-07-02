import React from 'react';
import { useState } from "react";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import './adminMainPage.css'

const AdminMainPage = () => {
    const [selected, setSelected] = useState("0");

    return (
        <div className="app">
            <Header />
            <div className="app-content">
                <Sidebar items={['مشاهده لیست دانشجویان', 'مشاهده لیست اساتید', 'مشاهده لیست مدیران']} setSelected={setSelected}/>
                <Content selected={selected} />
            </div>
        </div>
    );
};

export default AdminMainPage;
