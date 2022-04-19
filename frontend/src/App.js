import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './Screens/LandingPage/LandingPage';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes} from 'react-router-dom';
import MyNotes from './Screens/Mynotes/MyNotes';
function App() {
  return (
    <>
    <Router>
    <Header></Header>
    <main style={{minHeight:"93vh"}}>
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='mynotes' element={<MyNotes/>}/>
    </Routes>
    </main>
    <Footer/>

    </Router>
    </>
  );
}

export default App;
