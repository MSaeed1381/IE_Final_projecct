import React, {useState} from 'react';
import './Sidebar.css';

const Sidebar = ({items, setSelected}) => {
    let [active, setActive] = useState(0);
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    {items.map((item, index) => (
                        <li className={index === active ? "active" : "" } onClick={()=>{
                            setSelected(index+"");
                            setActive(index);
                            }
                        }>{item}</li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
