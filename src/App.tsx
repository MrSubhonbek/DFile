import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home'
import { Footer } from './shared/Footer/Footer';
import { Header } from './shared/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
