import React from 'react';
import { withState, withHandlers} from 'recompose';
import { compose, map,toPairs, isEqual, toInteger} from 'lodash/fp';
import './PlayOX.css';
import RowOX from './RowOX';

const PlayOX = ({items,setItems,flagOX,setFlagOX,onClickButton,onClickButtonClear}) =>(
    <div className="">
        {compose(
            map(([key,item]) =>
                (<RowOX key={key} index={toInteger(key)} items={items} setItems={setItems}
                        rowItems={item} flagOX={flagOX} setFlagOX={setFlagOX} ></RowOX>)),
            toPairs,
        )(items)}
        <button onClick={onClickButtonClear}>Clear</button>
    </div>
);

export default compose(
    withState('items','setItems',[['-','-','-'],['-','-','-'],['-','-','-']]),
    withState('flagOX','setFlagOX','x'),
    withState('currentIndex','setCurrentIndex',-1),
    withHandlers({
        onClickButtonClear: ({items,setItems,setFlagOX}) => () =>{
            items = [['-','-','-'],['-','-','-'],['-','-','-']];
            setItems([...items]);
            setFlagOX('x');
        }
    }),
)(PlayOX);
