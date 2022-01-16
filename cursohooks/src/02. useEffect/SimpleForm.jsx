import React, { useEffect, useState } from 'react';
import './effects.css';
import Message from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const {name, email} = formState;

    useEffect(()=>{
        console.log('hate');
    }, []);

    const handleInputChange = ({target}) =>{
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <div>
            <h1>UseEffect</h1>
            <hr />
            <div className='form-group'>
                <input 
                    type="text"
                    name="name"
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className='form-group'>
                <input 
                    type="text"
                    name="email"
                    className='form-control'
                    placeholder='Tu email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            {
                name.length > 3 && <Message/>
            }
        </div>
    )
}

export default SimpleForm
