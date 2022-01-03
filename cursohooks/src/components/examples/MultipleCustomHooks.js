import React from 'react'
import { useCounter } from '../../hook/useCounter';
import { useFetch } from '../../hook/useFetch'

const MultipleCustomHooks = () => {
    const {state, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const {author, quote} = !!data && data[0];//si existe data entonces extrae la posicion 0 de la data
    
    return (
        <div className="container">
            <h1>Breaking Bad Api</h1>
            <hr/>

            {
                loading ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) : (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )
            }
            <button 
                className="btn btn-primary"
                onClick={increment(1)}
            >
                
            </button>
            
        </div>
    )
}

export default MultipleCustomHooks
