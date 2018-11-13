import React from 'react';
import { withState, withHandlers} from 'recompose';
import { compose,} from 'lodash/fp';
import PlayOX from './components/PlayOX'
import './App_Ox.css';
import Title from "./components/Title";

const App_Ox = ({color,buttons,onClickSetColorRed,onClickSetColorGreen,onClickSetColorBlue}) => (
    <div className="center">
        <Title>OX APPz</Title>
        <PlayOX>
        </PlayOX>
    </div>
);


export default compose(
    withState('cssInit','setCssInit','center'),
    withState('color','setColor','red center'),
    withState('buttons','setButtons',['red','green','blue']),
    withHandlers({
        onClickSetColorRed: ({color,setColor,cssInit}) => () =>{
            const center = 'center';
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
)(App_Ox);
