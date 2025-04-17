import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Myprofile from './pages/Myprofile';
import ProductInput from './pages/ProductInput'; // to be created

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Myprofile />} />
        <Route path="/product" element={<ProductInput />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
