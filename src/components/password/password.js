import React from 'react';
import './password.css';
const Password = ({PasswordVariable}) => {
  return (
    <div>
      <input value={PasswordVariable} type='text' readOnly ></input>
      <button>Copier</button>
    </div>
  )
}

export default Password
