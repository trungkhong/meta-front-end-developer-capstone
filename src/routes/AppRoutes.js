import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import Cart from '@/pages/Cart';
import BookingPage from '@/pages/Booking';
import ConfirmedBooking from '@/pages/Booking/ConfirmedBooking';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
