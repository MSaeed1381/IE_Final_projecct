import React from 'react';
import './Sidebar.css';

const Sidebar = ({items, setSelected}) => {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    {items.map((item, index) => (
                        <li onClick={()=>{setSelected(index+"")}}>{item}</li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
