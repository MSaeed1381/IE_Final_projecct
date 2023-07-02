import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import './Button.css';


const Button = ({ text, path, onclick}) => {
    if (onclick){
        return (
            <Link to={path} >
                {text}
            </Link>
        );
    } else {
        return (
            <Link >
                {text}
            </Link>
        );
    }

};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};


export default Button;
