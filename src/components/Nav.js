import { Outlet, Link } from 'react-router-dom';
import { Badge } from 'antd';
import Icon, { ShoppingCartOutlined } from '@ant-design/icons';

import { useCartContext } from '@/context/CartContext';

import logo from '/assets/images/littlelemon_logo.png';

const Nav = () => {
  const { getCartCount } = useCartContext();
  console.log('getCartCount ==. ', getCartCount());
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
          <a href="#" className="nav-item">
            Login
          </a>
          <Link to="/cart" className="nav-item">
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
