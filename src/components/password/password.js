import React from 'react';
import './password.css';            
import 'toastr/build/toastr.min.css'; 
import toastr from 'toastr';          
const myFunction = () => {

  var copyText = document.getElementById("copyText");


  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);
  toastr.success('Password copied to clipboard', 'Success!', {timeOut: 5000})
}

const Password = ({PasswordVariable}) => {
  return (
    <div>
      <input value={PasswordVariable} type='text' readOnly id='copyText' ></input>
      <button onClick={()=>myFunction()}>Copier</button>
    </div>
  )
}

export default Password
