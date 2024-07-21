import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from "./components/hero";
import PriceMarquee from './components/pricemarquee';
import Navbar from "./components/navbar";
import Blog from "./pages/blog";
import Footer from "./components/footer";
import Article from "./components/anleitung";
import Impressum from "./pages/impressum";

function App() {
  return (
    <Router>
      <PriceMarquee />
      <Navbar />
      <Hero />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/impressum" element={<Impressum />} />

        {/* Fügen Sie hier weitere Routen hinzu, falls nötig */}
      </Routes>
    </Router>
  );
}

// Home-Komponente als Wrapper für Article und Hero
const Home = () => {
  return (
    <div className="relative z-20">
      <Article />
      <Footer />
    </div>
  );
}

export default App;
