import React from 'react';

const Button = ({type, color, children}) => {
  return(
    <button type={type} className={`btn btn-${color}`}>
      {children}
    </button>
  )
}

export default Button;
