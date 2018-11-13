import React from 'react';
import './Button.css';

const Button = ({children,onClickAddTodo,...otherProps}) =>{
    return (
            <button onClick={onClickAddTodo} {...otherProps}>
                {children}
            </button>
    );
};

export default Button;
