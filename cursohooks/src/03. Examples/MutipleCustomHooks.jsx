import React from 'react'
import '../02. useEffect/effects.css';
import { useCounter } from '../Hooks/useCounter';
import { useFetch } from '../Hooks/useFetch';

const MutipleCustomHooks = () => {

    const {counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];

    return (
        <div>
            <h1>Breaking Quotes</h1>
            <hr />
            {
                loading 
                ? 
                (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                )
                :
                (
                    <blockquote className='blockquote text-end'>
                        <p className='mb-2'>{author}</p>
                        <footer className='blockquote-footer'>{quote}</footer>
                    </blockquote>
                )
            }
            <button 
                className={loading ? 'btn btn-secondary btn-lg disabled' : 'btn btn-primary' }
                onClick={increment}    
            >
                Siguiente quote 
            </button>
           
            
        </div>
    )
}

export default MutipleCustomHooks
