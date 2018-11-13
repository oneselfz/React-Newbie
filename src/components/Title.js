import React from 'react';
import './Title.css';

const Title = ({text,children}) => (
    <div className="title">
        <div>
            {text}
        </div>
        <div>
            {children}
        </div>
    </div>
);

export default Title;
