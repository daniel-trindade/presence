import './App.css';

import NavBar from './Components/layout/NavBar';
import Footer from './Components/layout/Footer';
import Container from './Components/layout/Container';
import Paths from './routes/Paths';

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCMnOWlWRedWhiPNBTQs-0ofVmSsf3ojzk",
  authDomain: "presence-39de3.firebaseapp.com",
  databaseURL: "https://presence-39de3-default-rtdb.firebaseio.com",
  projectId: "presence-39de3",
  storageBucket: "presence-39de3.appspot.com",
  messagingSenderId: "554629392594",
  appId: "1:554629392594:web:ac442b20fbf37dbe28e50b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

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
