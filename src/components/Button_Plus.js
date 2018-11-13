import React from 'react';
import './Button_Plus.css';

const Button_Plus = ({children,onClickPlus,...otherProps}) =>{
    return (
        <button onClick={onClickPlus} {...otherProps}>
            {children}
        </button>
    );
};

export default Button_Plus;
