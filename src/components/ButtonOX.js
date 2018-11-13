import React from 'react';
import { withState, withHandlers} from 'recompose';
import { compose, map,toPairs, isEqual} from 'lodash/fp';
import './ButtonOX.css';

const ButtonOX = ({children,items,setItems,rowIndex,index,flagOX,setFlagOX,onClickButton}) =>{
    return (
        <button onClick={onClickButton}>
            {children}
        </button>
    );
};

export default compose(
    withHandlers({
        onClickButton: ({index,items,rowIndex,children,flagOX,setItems,setFlagOX}) => () =>{
            if(isEqual(children,'-')){
                if(isEqual(flagOX,'x')){
                    items[rowIndex][index] = 'O';
                    setItems([...items]);
                    setFlagOX('o');
                }else{
                    items[rowIndex][index] = 'X';
                    setItems([...items]);
                    setFlagOX('x');
                }
            }
        }
    }),
)(ButtonOX);