import './App.css';

//Pages
import Home from './Components/pages/Home';
import Login from './Components/pages/Login';
import Signup from './Components/pages/Signup';

//Imports
import NavBar from './Components/layout/NavBar';
import Footer from './Components/layout/Footer';
import Container from './Components/layout/Container';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const Private = ({Item}) => {
    const signed = false;

    if(signed !== true){
      return Item = <Login/>
    }else{
      return Item = <Home/>
    }
  }

  return (
    <>
      <NavBar/>
      <Container>
      <Router>
          <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route path='*' element={<Login/>}/>
            <Route exact path='/home' element={<Private Item={Home}/>}/>
            <Route path='/signup' element={<Signup/>}/>
          
          </Routes>
        </Router>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
