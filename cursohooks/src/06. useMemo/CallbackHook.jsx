import React, { useCallback, useState } from 'react';
import '../02. useEffect/effects.css';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
        (num) => {
            setCounter(count => count + num);
        },
        [setCounter],
    )

    return (
        <div>
            <h1>useCallback hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment}/>
        </div>
    )
}

export default CallbackHook
// utilidad.-mandar una funcion a un componente hijo