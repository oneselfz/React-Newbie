import React from 'react';
import { withState, withHandlers} from 'recompose';
import { compose, map,toPairs, isEqual} from 'lodash/fp';
import BackGround from './components/BackGround'
import './App_Background.css';
import Title from "./components/Title";

const App_Background = ({color,buttons,onClickSetColorRed,onClickSetColorGreen,onClickSetColorBlue}) => (
    <div className="center">
        <Title>Back Ground APPz</Title>
        <BackGround>
        </BackGround>
    </div>
);


export default compose(
    withState('cssInit','setCssInit','center'),
    withState('color','setColor','red center'),
    withState('buttons','setButtons',['red','green','blue']),
    withHandlers({
        onClickSetColorRed: ({color,setColor,cssInit}) => () =>{
            const center = 'center';
            console.log('in red');
            setColor(`red ${cssInit}`);
        },
        onClickSetColorGreen: ({color,setColor,cssInit}) => () =>{
            const center = 'center';
            setColor(`green ${cssInit}`);
        },
        onClickSetColorBlue: ({color,setColor,cssInit}) => () =>{
            const center = 'center';
            setColor(`blue ${cssInit}`);
        },
    }),
)(App_Background);
