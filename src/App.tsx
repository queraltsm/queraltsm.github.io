import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import HowToStartCoding from "./components/Blog/How-to-Start-Coding";
import ScrumMethodology from "./components/Blog/Scrum-Methodology";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog/how-to-start-coding"
          element={<HowToStartCoding />}
        />
        <Route
          path="/blog/scrum-methodology-the-agile-mindset"
          element={<ScrumMethodology />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
