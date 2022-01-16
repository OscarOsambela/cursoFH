import React, { useState } from 'react'
import { useCounter } from '../Hooks/useCounter'
import Small from './Small';
import '../02. useEffect/effects.css';

const Memorize = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Memorize</h1>
            <h2>Counter: <Small value={counter}/></h2>
            <hr />
            <button className='btn btn-primary' onClick={increment}>+1</button>
            <button className='btn btn-outline-primary ms-3' onClick={()=> setShow(!show)}>Show / Hide {JSON.stringify(show)}</button>
        </div>
    )
}

export default Memorize

// useEffect es para disparar efectos secundarios... por ejemplo, una variable cambia... quieres cancelar una subscripción, quieres crear un listener... eso lo puedes hacer con un useEffect
// Un useMemo, es para memorizar un valor, digamos que tienes un proceso pesado que tomo tiempo calcular, entonces lo memorizas, y únicamente lo volverás a calcular si los parámetros o argumentos cambian