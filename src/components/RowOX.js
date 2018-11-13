import React from 'react';
import { withState, withHandlers} from 'recompose';
import { compose, map,toPairs, isEqual, toInteger} from 'lodash/fp';
import ButtonOX from './ButtonOX';
import './RowOX.css';

const RowOX = ({rowItems,items,setItems,flagOX,setFlagOX,index,onClickButton,...otherProps}) => (
    <div>
        {compose(
            map(([key,item]) =>
                (<ButtonOX key={key} flagOX={flagOX} setFlagOX={setFlagOX} items={items}
                           setItems={setItems} rowIndex={index} index={(toInteger(key))}>{item}</ButtonOX>)),
            toPairs,
        )(rowItems)}
    </div>
);


export default compose()(RowOX);
