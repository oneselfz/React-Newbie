import React from 'react';
import './Button_Negative.css';

const Button_Negative = ({children,onClickNegative,...otherProps}) =>{
    return (
        <button onClick={onClickNegative} {...otherProps}>
            {children}
        </button>
    );
};

export default Button_Negative;
