import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Booking from '@/pages/Booking';
import Menu from '@/pages/Menu';
import Cart from '@/pages/Cart';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
