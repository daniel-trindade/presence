import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Pages
import Home from '../Components/pages/Home';
import Signup from '../Components/pages/Signup';
import Login from '../Components/pages/Login';

function Paths(){

  const Private = ({Item}) => {
    const signed = false;

    if(signed !== true){
      return Item = <Login/>
    }else{
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

      