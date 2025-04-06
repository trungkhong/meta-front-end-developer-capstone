import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Badge } from 'antd';
import Icon, { ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';

import { useCartContext } from '@/context/CartContext';

import logo from '/assets/images/littlelemon_logo.png';

const Nav = () => {
  const { getCartCount } = useCartContext();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      <div className="container nav">
        <Link to="/">
          <img src={logo} className="home-logo logo" alt="logo" />
        </Link>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <MenuOutlined />
        </button>

        <div className={`menu ${showMenu ? 'show' : ''}`}>
          <Link to="/" className="nav-item" onClick={() => setShowMenu(false)}>
            Home
          </Link>
          <a href="#" className="nav-item" onClick={() => setShowMenu(false)}>
            About
          </a>
          <Link to="/menu" className="nav-item" onClick={() => setShowMenu(false)}>
            Menu
          </Link>
          <Link to="/booking" className="nav-item" onClick={() => setShowMenu(false)}>
            Reservations
          </Link>
          <a href="#" className="nav-item" onClick={() => setShowMenu(false)}>
            Login
          </a>
          <Link to="/cart" className="nav-item" onClick={() => setShowMenu(false)}>
            <Badge size="small" count={getCartCount() || null}>
              <Icon style={{ fontSize: '20px' }} component={ShoppingCartOutlined} />
            </Badge>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
