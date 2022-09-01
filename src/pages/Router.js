import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Detail from './Detail/Detail';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/itemDetail" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
