import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Pages
import Home from '../Components/pages/Home';
import Signup from '../Components/pages/Signup';
import Login from '../Components/pages/Login';
import List from '../Components/pages/List';
import Reports from '../Components/pages/Reports';
import Menager from '../Components/pages/Menager';
import NavBar from '../Components/layout/NavBar';
import Footer from '../Components/layout/Footer'
import PersonalInfo from '../Components/pages/PersonalInfo';
import Container from '../Components/layout/Container';



function Private({ Item }) {

  const tokken = sessionStorage.getItem("firebase_id_token")

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
        <NavBar/>
        <Container>
          <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route path='*' element={<Login/>}/>
            <Route exact path='/home' element={<Private Item={Home}/>}/>
            <Route exact path='/list' element={<Private Item={List}/>}/>
            <Route exact path='/menager' element={<Private Item={Menager}/>}/>
            <Route exact path='/reports' element={<Private Item={Reports}/>}/>
            <Route exact path='/personalinfo' element={<Private Item={PersonalInfo}/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </Container>
        <Footer/>
      </Router>
    </>

  )
}

export default Paths