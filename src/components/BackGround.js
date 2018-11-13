import React from 'react';
import { withState, withHandlers} from 'recompose';
import { compose,} from 'lodash/fp';
import './BackGround.css';
import Button from "./Button";

const BackGround = ({color,onClickSetColorRed,onClickSetColorGreen,onClickSetColorBlue}) =>{
    return (
        <div className={color}>
            <Button onClick={onClickSetColorRed}>Red</Button>
            <Button onClick={onClickSetColorGreen}>Green</Button>
            <Button onClick={onClickSetColorBlue}>Blue</Button>
        </div>
    );
};

export default compose(
    withState('cssInit','setCssInit','test'),
    withState('color','setColor','red center'),
    withState('buttons','setButtons',['red','green','blue']),
    withHandlers({
        onClickSetColorRed: ({color,setColor,cssInit}) => () =>{
            setColor(`red ${cssInit}`);
        },
        onClickSetColorGreen: ({color,setColor,cssInit}) => () =>{
            setColor(`green ${cssInit}`);
        },
        onClickSetColorBlue: ({color,setColor,cssInit}) => () =>{
            setColor(`blue ${cssInit}`);
        },
    }),
)(BackGround);
