import React from 'react';
import { useCounter } from '../Hooks/useCounter';
import './Counter.css';

const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset } = useCounter();

    return (
        <div>
            <h1>Counter with hook {state}</h1>
            <hr/>
            <button onClick={increment} className='btn'>+1</button>
            <button onClick={reset} className='btn'>Reset</button>
            <button onClick={decrement} className='btn'>-1</button>
        </div>
    )
}

export default CounterWithCustomHook
