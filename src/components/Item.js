import React from 'react';
import './Item.css';

const Item = ({children}) => (
    <div className="item">
        {console.log('in here')}
        {children}
    </div>
);

export default Item;
