import './App.css';

import NavBar from './Components/layout/NavBar';
import Footer from './Components/layout/Footer';
import Container from './Components/layout/Container';
import Paths from './routes/Paths';

function App() {

  return (
    <div className="app-wrapper">
      {/* <NavBar/> */}
      <div className="content-wrapper">
        <Container>
          <Paths/>
        </Container>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
