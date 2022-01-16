import React from 'react'
import { useForm } from '../Hooks/useForm';

const TodoAdd = ({handleAddTodo}) => {
    
    const [{description}, handleInputChange, reset] = useForm({
        description: '',
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(description.trim().length <= 3){
            alert('Debe ingresar un texto');
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        };
        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='description'
                    placeholder='Aprender...'
                    autoComplete="off"
                    className='form-control'
                    value={description}
                    onChange={handleInputChange}
                />
                <button
                    type='submit' 
                    className='btn btn-outline-primary mt-1' 
                    style={{width: '100%'}}>
                        Agregar
                </button>
            </form>
        </>
    )
}

export default TodoAdd
