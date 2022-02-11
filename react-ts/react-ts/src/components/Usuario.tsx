import { useState } from "react";

interface User{
    uid: string,
    name: string
}

const Usuario = () => {

  const [user, setUser] = useState<User>();
    
  const login = () =>{
      setUser({
          uid: 'O1234M',
          name: 'Oscar Osambela'
      })
  }  
  
  return (
    <div className="mt-5">
        <h3>Usuario: useState</h3>
        <button className="btn btn-outline-primary" onClick={login}>Login</button>
        {
            (!user) ?
            <pre>No hay usuario</pre>
            :
            <pre>{JSON.stringify(user)}</pre>
        }
        
    </div>

  ) 
    
};

export default Usuario;
