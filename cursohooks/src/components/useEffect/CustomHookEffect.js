import React from 'react'
import { useForm } from '../../hook/useForm';

const CustomHookEffect = () => {
        const [formState, handleInputChange, handleSubmit] = useForm({
            name: '',
            email: '',
            password: '',
        });
    
        const { name, email, password } = formState;
    

        return (
            <form onSubmit={ handleSubmit }>
                <h1>useEffect with Hook</h1>
                <hr />
    
                <div className="form-group">
                    <input 
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Tu nombre"
                        autoComplete="off"
                        value={ name }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="email@gmail.com"
                        autoComplete="off"
                        value={ email }
                        onChange={ handleInputChange }
                    />
                </div> 
                <div className="form-group">
                    <input 
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="contraseña"
                        autoComplete="off"
                        value={ password }
                        onChange={ handleInputChange }
                    />
                </div>   
                <button type="submit" className="btn btn-primary">Enviar</button>
                <hr/><hr/> 
            </form>
    )
}

export default CustomHookEffect
