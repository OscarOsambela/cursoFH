import React from 'react';
import { useForm } from '../Hooks/useForm';
import './effects.css';

const FormWithCustomHook = () => {

    const [formValue, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formValue;

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValue);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Form with Custom Hook</h1>
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
            <div className='form-group'>
                <input 
                    type="text"
                    name="password"
                    className='form-control'
                    placeholder='*********'
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            <button type='submit'className='btn btn-primary'>Enviar</button>
        </form>
    )
}

export default FormWithCustomHook
