import './App.css';
import Home from './Components/pages/Home';
import NavBar from './Components/layout/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
