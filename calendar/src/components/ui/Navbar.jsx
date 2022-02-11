import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar navbar-dark bg-dark mb-4 px-2'>
      <span className='navbar-brand'>
          Oscar
      </span>
      <button className='btn btn-outline-danger'>
          <i className='fas fa-sign-out'></i>
           Salir
      </button>
    </div>
  )
};

export default Navbar;
