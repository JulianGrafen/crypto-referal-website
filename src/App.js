import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Article from './components/article';
import Hero from "./components/hero";
import PriceMarquee from './components/pricemarquee';
import Navbar from "./components/navbar";
import Blog from "./pages/blog";

function App() {
  return (
    <Router>
      <PriceMarquee />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        {/* Fügen Sie hier weitere Routen hinzu, falls nötig */}
      </Routes>
    </Router>
  );
}

// Home-Komponente als Wrapper für Article und Hero
const Home = () => {
  return (
    <div>
      <Article />
      <Hero />
    </div>
  );
}

export default App;
