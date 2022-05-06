import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home'
import { Footer } from './shared/Footer/Footer';
import { Header } from './shared/Header/Header';
import s from './App.module.scss';

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
