import React from 'react'
import { useCounter } from '../../hook/useCounter'

const CustomHook = () => {
    const {state, increment, decrement, reset} = useCounter(100);

    return (
        <div className="container">
            <h1>Counter with hook: {state}</h1>
            <button onClick={()=> increment(5)} className="btn btn-success"> +1 </button>
            <button onClick={reset} className="btn"> Reset </button>
            <button onClick={decrement} className="btn btn-warning"> -1 </button>
            <hr/><hr/>  
        </div>
    )
}

export default CustomHook
