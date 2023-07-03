import React from 'react';
import './ItemBox.css';


const ItemBox = ({name, text, index, setItems, items}) => {
    return (
        <div className="item-container">
            <div className="item-name"> {name} </div>
            <a className="item-text" onClick={() => {
                items = items.filter((item, i) => index !== i);
                console.log(items);
            }}> {text} </a>
        </div>
    );
};

export default ItemBox;
