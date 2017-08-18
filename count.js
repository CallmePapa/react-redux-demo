/**
 * Created by weiqiujuan on 17-8-17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {store } from 'react-redux';

const  Counter =({value})=>(
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
);


const reducer =(state=0,action)=>{
        switch(action.type){
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
}
};

const store = createStore(reducer);

const render =()=>{
    ReactDOM.render(
        <Counter value={store.getState()}
                 onIncrement={() => store.dispatch({type: 'INCREMENT'})}
                 onDecrement={() => store.dispatch({type: 'DECREMENT'})}
        />,
        document.getElementById('root')
    );
}

render();
store.subscribe(render);
