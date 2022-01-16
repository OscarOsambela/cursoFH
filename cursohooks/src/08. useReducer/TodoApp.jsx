import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import '../08. useReducer/styles.css';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const init = () =>{
    // return [{
    //     id: new Date().getTime(),
    //     description: 'Aprender useReducer',
    //     done: false
    // }]
    return JSON.parse(localStorage.getItem('todos')) || [];
}


const TodoApp = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleAddTodo = (newTodo) =>{
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    const handleDelete = (todoId) =>{
        alert(`¿Desea eliminar este item?`);
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }

    const handleToggle= (todoId) =>{
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    return (
        <div>
            <h1>Todo App ({todos.length})</h1> 
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <TodoList 
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
                    <div className='col'>
                        <TodoAdd 
                            handleAddTodo={handleAddTodo}
                        />
                    </div>
                </div>
        </div>
    )
}

export default TodoApp
