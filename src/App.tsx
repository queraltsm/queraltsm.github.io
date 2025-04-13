import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Usar Routes en lugar de Switch
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
