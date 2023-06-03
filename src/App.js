
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { lazy, Lazy, Suspense } from 'react';
// import Home from './pages/Home/Home';
// const Home = lazy(() => import('./pages/Home/Home'))
import Nav from './pages/Nav/Nav';
// import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';
// import MouseTrackerPage from './pages/MouseTrackerPage/MouseTrackerPage'
import Hooks from './pages/Hooks/Hooks';
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'));
const MouseTrackerPage = lazy(() => import('./pages/MouseTrackerPage/MouseTrackerPage'))




function App() {
  return (
    <Router>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mouseTracker" element={<MouseTrackerPage />} />
          
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
