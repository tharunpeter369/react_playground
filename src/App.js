
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Nav from './pages/Nav/Nav';
import MouseTrackerPage from './pages/MouseTrackerPage/MouseTrackerPage'


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mouseTracker" element={<MouseTrackerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
