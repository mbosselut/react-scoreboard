import React from 'react';
import './button.css';

const Button = props => {
    return (
        <div className={props.className}>
            <p>This button will not do anything</p>
            <button onClick={props.onClick}>{props.name}</button>
        </div>
    )
}

export default Button;