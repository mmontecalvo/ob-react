import React from 'react';
import useCounter from '../hooks/useCounter';

function Counter() {
    const counter = useCounter();

    return (
        <div>
            <button type="button" onClick={() => counter.decrement()} >-</button>
            <h1>{counter.value}</h1>
            <button type="button" onClick={() => counter.increment()} >+</button>
            <button type="button" onClick={() => counter.reset()} >Clear</button>
        </div>
    )
}

export default Counter
