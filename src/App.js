import './App.css';

import Container from './Components/layout/Container';
import Paths from './routes/Paths';

function App() {

  return (
    <div className="app-wrapper">
      <div className="content-wrapper">
        <Container>
          <Paths/>
        </Container>
      </div>
    </div>
  );
}

export default App;
