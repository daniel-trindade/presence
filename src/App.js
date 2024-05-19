import './App.css';
import Home from './Components/pages/Home';
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
          </Routes>
        </Router>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
