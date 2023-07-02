import React from 'react';
import './ItemBox.css';


const ItemBox = ({name, text, index, setItems, items}) => {
    return (
        <div className="item-container">
            <div className="item-name"> {name} </div>
            <a className="item-text" onClick={() => {
                let x = items.filter((item, i) => index !== i);
                setItems(x);
                console.log(items);
            }}> {text} </a>
        </div>
    );
};

export default ItemBox;
