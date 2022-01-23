import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { starGoogleLogin, startLoginEmailPassword } from '../../actions/auth' 
import { useForm } from '../../hooks/useForm'
import validator from 'validator';
import { removeError, setError } from '../../actions/ui'
import { useSelector } from 'react-redux'

const LoginScreen = () => {
    const dispatch = useDispatch();
    const {loading, msgError} = useSelector(state => state.ui);
    const [values, handleInputChange] = useForm({
        email: '',
        password: ''
    })      

    const {email, password} = values;

    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password))
        if(isFormValid()){
            dispatch(startLoginEmailPassword(email, password))
        }
    }

    const isFormValid = () => {
        
        if ( !validator.isEmail( email ) ) {
            dispatch( setError('Email is not valid') )
            return false;
        } else if ( password.length < 5 ) {
            dispatch( setError('Password should be at least 6 characters and match each other') )
            return false
        }
        
        dispatch( removeError() );
       return true;
    }

    const handleGoogleLogin = () =>{
        dispatch(starGoogleLogin());
    }

    return (
        <>
         <h3 className='auth__title'>Login</h3>
         <form onSubmit={handleLogin}>
            {
                 msgError && (
                    <div className='auth__alert-error'>
                        {msgError}
                    </div>
                 )
             }
             <input
                type="text"
                placeholder="email"
                name="email"
                className='auth__input'
                value={email}
                onChange={handleInputChange}
             />
             <input
                type="password"
                placeholder="password"
                name="password"
                className='auth__input'
                autoComplete='off'
                value={password}
                onChange={handleInputChange}
             />
             <button 
                className='btn btn-primary btn-block '
                type="submit"
                disabled={loading}
             >
                 Login
             </button>
             <div className='auth__social-networks'>
                 <p>Login with social networks</p>
                <div className="google-btn" onClick={handleGoogleLogin}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
             </div>
             <Link to="/auth/register" className='link'>
                 Create new account
             </Link>
         </form>   
        </>
    )
}

export default LoginScreen
