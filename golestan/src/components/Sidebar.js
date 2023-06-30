import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
