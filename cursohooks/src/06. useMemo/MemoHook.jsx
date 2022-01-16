import React, { useState, useMemo} from 'react'
import { useCounter } from '../Hooks/useCounter'
import { procesoPesado } from '../helpers/procesoPesado';
import '../02. useEffect/effects.css';

const MemoHook = () => {

    const {counter, increment} = useCounter(200);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <h2>Counter: <small>{counter}</small></h2>
            <hr />
            <p>{memoProcesoPesado}
            </p>
            <button className='btn btn-primary' onClick={increment}>+1</button>
            <button className='btn btn-outline-primary ms-3' onClick={()=> setShow(!show)}>Show / Hide {JSON.stringify(show)}</button>
        </div>
    )
}

export default MemoHook

