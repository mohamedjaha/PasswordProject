import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Features from './components/Features-Box/Features';
import Password from './components/password/password';
import PasswordGenerator from './components/PasswordGenerator';
import tente from './PasswordGeneretor/tente.jpg';
import castle from './PasswordGeneretor/castle.jpg';
import house from './PasswordGeneretor/house.jpg';


import { useState } from 'react';

const App = () => {
  const[useLettre,setUseLettre] = useState(false);
  const[useNombre,setUseNombre] = useState(false);
  const[useSymbole,setUseSymbole] = useState(false);
  const[Remember,setRemember] = useState(false);
  const[Length,setLength] = useState(0);
  const[PasswordVariable,setPassword] = useState({ password: "", type: "" });

    let pic = "";
    if(PasswordVariable.type==="weak")
    {
        pic=tente;
    }
    else
    {
        if(PasswordVariable.type==="good")
        {
            pic=house;
        }
        else
        {
            pic=castle;
        }
    }



  return (
    <div >
      <Navbar />
      <Password PasswordVariable={PasswordVariable.password} />
      <div className='picture' >
      <Features 
        useLettre={useLettre}
        setUseLettre={setUseLettre}
        useNombre={useNombre}
        setUseNombre={setUseNombre}
        useSymbole={useSymbole}
        setUseSymbole={setUseSymbole}
        Remember={Remember}
        setRemember={setRemember}
        Length={Length}
        setLength={setLength}
      />
      </div>
      <div className='picture' >
      <img src={pic} />
      <caption>{PasswordVariable.type}</caption>
    </div>
      <PasswordGenerator 
      PasswordVariable={PasswordVariable}
      setPassword={setPassword}
      useLettre={useLettre}
      useNombre={useNombre}
      useSymbole={useSymbole}
      Remember={Remember}
      Length={Length}
      /> 
      
      <Footer/>

    </div>
    
  );
}

export default App;
