import './App.css';

import NavBar from './Components/layout/NavBar';
import Footer from './Components/layout/Footer';
import Container from './Components/layout/Container';
import Paths from './routes/Paths';


function App() {

  return (
    <>
      <NavBar/>
        <Container>
          <Paths/>
        </Container>
      <Footer/>
    </>
  );
}

export default App;
