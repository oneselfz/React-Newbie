import React from 'react';
import './Board.css';

const Board = ({children}) => (
    <div className="number">
        <div>
            {children}
        </div>
    </div>
);

export default Board;
