
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './Screens/LandingPage/LandingPage';
function App() {
  return (
    <>
    <Header></Header>
    <main style={{minHeight:"93vh"}}>
      <LandingPage/>
    </main>
    <Footer></Footer>

    </>
  );
}

export default App;
