import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../Hooks/useCounter';
import { useFetch } from '../Hooks/useFetch';
import './layout.css';

const Layout = () => {
    const [boxSize, setBoxSize] = useState({});
    const {counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {quote} = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>Breaking Quotes</h1>
            <hr />
                <blockquote className='blockquote'>
                  <p 
                    ref={pTag}
                    className='mb-2'
                  >{quote}</p>
                </blockquote>
                <pre>{JSON.stringify(boxSize, null, 3)}</pre>
                <button 
                    className='btn btn-primary'
                    onClick={increment}    
                >
                    Siguiente quote 
                </button>
        </div>
    )
}

export default Layout

// preferir el uso de useEffect, el useLayoutEffect puede servir para obtener dimensiones del width u otro