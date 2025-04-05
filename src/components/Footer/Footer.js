import classNames from 'classnames';
import logo from '/assets/images/littlelemon_logo.png';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={classNames(styles.container, 'container')}>
        <div className={classNames(styles.column)}>
          <div className={styles.logo}>
            <img src={logo} alt="Little Lemon Logo" />
          </div>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Branches map</li>
          </ul>
        </div>

        <div className={classNames(styles.column)}>
          <h3>Supports</h3>
          <ul>
            <li>Support</li>
            <li>Hotlines</li>
            <li>Privacy policy</li>
            <li>Term of use</li>
          </ul>
        </div>

        <div className={classNames(styles.column)}>
          <h3>Order Online</h3>
          <ul>
            <li>Support</li>
            <li>Hotlines</li>
            <li>Privacy policy</li>
            <li>Term of use</li>
          </ul>
        </div>

        <div className={classNames(styles.column)}>
          <h3>Payments</h3>
          <ul>
            <li>Support</li>
            <li>Hotlines</li>
            <li>Privacy policy</li>
            <li>Term of use</li>
          </ul>
        </div>

        <div className={classNames(styles.column)}>
          <h3>Details</h3>
          <ul>
            <li>Support</li>
            <li>Hotlines</li>
            <li>Privacy policy</li>
            <li>Term of use</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
