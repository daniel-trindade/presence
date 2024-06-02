import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Pages
import Home from '../Components/pages/Home';
import Signup from '../Components/pages/Signup';
import Login from '../Components/pages/Login';
import List from '../Components/pages/List';



function Private({ Item }) {

  const tokken = true //localStorage.getItem("firebase_id_token")

  if(tokken){
    console.log("tokken autenticado")
    return <Item/>
  }else{
    console.log("Não autenticado. Redirecionado")
    return <Login/>
  }
  
}

function Paths(){
  
  return(
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='*' element={<Login/>}/>
          <Route exact path='/home' element={<Private Item={Home}/>}/>
          <Route exact path='/list' element={<Private Item={List}/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </>

  )
}

export default Paths