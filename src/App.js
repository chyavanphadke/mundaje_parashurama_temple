import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Deities from './pages/Deities';
import Festivals from './pages/Festivals';
import Gallery from './pages/Gallery';
import SevaDonations from './pages/SevaDonations';

export default function App(){
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 3, mb: 6 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/deities" element={<Deities />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/seva" element={<SevaDonations />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}
