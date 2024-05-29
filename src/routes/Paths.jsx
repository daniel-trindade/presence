import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { useState } from 'react';

//Pages
import Home from '../Components/pages/Home';
import Signup from '../Components/pages/Signup';
import Login from '../Components/pages/Login';

function Paths(){
  
  const Private = ({Item}) => {

    const [signed, setSigned] = useState(false);

    if(signed !== true){
      console.log("User não logado")
      return Item = <Login/>
      
    }else{
      console.log("User não logado")
      return Item = <Home/>
      
    }
  }

  return(
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='*' element={<Login/>}/>
          <Route exact path='/home' element={<Private Item={Home}/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </>

  )
}

export default Paths

      