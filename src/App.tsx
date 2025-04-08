import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Home />
        <div className="skills">
          <Skills />
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
    </>
  );
}

export default App;
