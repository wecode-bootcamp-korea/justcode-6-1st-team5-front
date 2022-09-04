import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Detail from './Detail/Detail';
import Shop from './Shop/Main';
import Location from './Location/Location';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/detail/:id" element={<Detail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
