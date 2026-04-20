import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar';
import PriceMarquee from './components/pricemarquee';
import Hero from './components/hero';
import TrustBar from './components/TrustBar';
import GuideSection from './components/anleitung';
import FaqSection from './components/FaqSection';
import Footer from './components/footer';
import MobileCtaBar from './components/MobileCtaBar';
import Blog from './pages/blog';
import BlogPostPage from './pages/BlogPostPage';
import Impressum from './pages/impressum';

const HomePage = () => (
  <main>
    <Hero />
    <TrustBar />
    <GuideSection />
    <FaqSection />
    <Footer />
  </main>
);

const App = () => (
  <Router>
    <PriceMarquee />
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/impressum" element={<Impressum />} />
    </Routes>
    {/* Sticky mobile CTA – rendered outside Routes so it persists across pages */}
    <MobileCtaBar />
  </Router>
);

export default App;
