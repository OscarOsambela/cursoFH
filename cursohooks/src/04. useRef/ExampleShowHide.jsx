import React, { useState } from 'react';
import MutipleCustomHooks from '../03. Examples/MutipleCustomHooks';
import '../02. useEffect/effects.css';

const ExampleShowHide = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />
            {
                show && <MutipleCustomHooks />
            } 
            <button 
                className='btn btn-primary mt-5'
                onClick={()=> {setShow(!show)}}
            >
                Show / Hide
            </button>
        </div>
    )
}

export default ExampleShowHide
