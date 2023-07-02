import React from 'react';
import './ItemBox.css';


const ItemBox = ({name, text}) => {
    return (
        <div className="item-container">
            <div className="item-name"> {name} </div>
            <a className="item-text"> {text} </a>
        </div>
    );
};

export default ItemBox;
