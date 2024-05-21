import './App.css';

//Pages
import Home from './Components/pages/Home';
import Login from './Components/pages/Login';


import NavBar from './Components/layout/NavBar';
import Footer from './Components/layout/Footer';
import Container from './Components/layout/Container';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar/>
      <Container>
      <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </Router>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
