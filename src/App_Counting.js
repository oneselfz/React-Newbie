import React from 'react';
import { withState, withHandlers} from 'recompose';
import Board from './components/Board';
import { compose, map,toPairs, isEqual} from 'lodash/fp';
import Button_Plus from "./components/Button_Plus";
import Button_Negative from "./components/Button_Negative";
import './App_Counting.css';

const App_Counting = ({number,onClickPlus,onClickNegative}) => (
    <div>
        <Board>{number}</Board>
        <div className="block">
            <Button_Negative onClick={onClickNegative}>-</Button_Negative>
            <Button_Plus onClick={onClickPlus}>+</Button_Plus>
        </div>
    </div>
);


export default compose(
    withState('number','setNumber',1),
    withHandlers({
        onClickPlus: ({number,setNumber}) => () =>{
            setNumber(++number);
        },
        onClickNegative: ({number,setNumber}) => ()=> {
            setNumber(number > 0 ? --number : number);
        },
    }),
)(App_Counting);
