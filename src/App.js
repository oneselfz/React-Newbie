import React from 'react';
import { withState, withHandlers} from 'recompose';
import { compose, map,toPairs} from 'lodash/fp';
import Title from './components/Title';
import Item from './components/Item'
import './App.css';
import Button from "./components/Button";

const App = ({title,items,onClickAddTodo}) => (
    <div className="App">
        <Title>{title}</Title>
        {compose(
            map(([key,item]) => (<Item key={key}>{item}</Item>)),
            toPairs,
        )(items)}
        <Button onClick={onClickAddTodo}>add</Button>
    </div>
);


export default compose(
    withState('title','setTitle','Hello Todo Appz State Less'),
    withState('items','setItems',['item1','item2']),
    withHandlers({
            onClickAddTodo: ({items,setItems}) => () =>{
                setItems([...items,'items']);
            }
        }),
)(App);
