import { Outlet, Link } from 'react-router-dom';

import logo from '/assets/images/littlelemon_logo.png';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container nav">
        <img src={logo} className="home-logo logo" alt="logo" />

        <div className="menu">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <a href="#" className="nav-item">
            About
          </a>
          <Link to="/menu" className="nav-item">
            Menu
          </Link>
          <Link to="/booking" className="nav-item">
            Reservations
          </Link>
          <Link to="/cart" className="nav-item">
            Cart
          </Link>
          <a href="#" className="nav-item">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
