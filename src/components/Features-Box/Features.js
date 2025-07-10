import React from 'react'
import './Features.css'
const  Features = ({
  useLettre,
  setUseLettre,
  useNombre,
  setUseNombre,
  useSymbole,
  setUseSymbole,
  Remember,
  setRemember,
  Length,
  setLength
}) => {
    

  return (
    <div className='Features-Box' >
      <h2> Features : </h2>
      <ul>
        <li onClick={()=>{setUseLettre(!useLettre)}}>use lettre</li> {useLettre===false?<p className='no-answer'>x</p> : <p className='yes-answer'>✔</p>}
        <li onClick={()=>{setUseNombre(!useNombre)}}>use nombre</li> {useNombre===false?<p className='no-answer'>x</p> : <p className='yes-answer'>✔</p>}
        <li onClick={()=>{setUseSymbole(!useSymbole)}}>use symbole</li> {useSymbole===false?<p className='no-answer'>x</p> : <p className='yes-answer'>✔</p>}
        <li onClick={()=>{setRemember(!Remember)}}>Easy to remember</li> {Remember===false?<p className='no-answer'>x</p> : <p className='yes-answer'>✔</p>}
      </ul>
      <button onClick={()=>{ if (Length>0){setLength(Length - 1 )}}}>-</button>
      <progress max="30" value={Length} > </progress>
      <button onClick={()=>{ if (Length<30){setLength(Length + 1 )}}}>+</button>
      <div className='count' >{Length}</div>
    </div>
  )
}

export default Features
