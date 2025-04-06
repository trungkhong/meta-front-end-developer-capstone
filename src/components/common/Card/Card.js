import PropTypes from 'prop-types';

import { useCartContext } from '@/context/CartContext';

// eslint-disable-next-line no-unused-vars
import PlusCircle from '@/icons/PlusCircle.svg?react';

import styles from './Card.module.css';

const Card = ({ id, thumbnailUrl, title, description, price }) => {
  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart({
      id,
      thumbnailUrl,
      title,
      description,
      price,
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img src={thumbnailUrl} alt="food thumbnail" />

        <div className="content">
          <h2>{title}</h2>
          <p>{description}</p>
          {price && <p className={styles.price}>${price.toFixed(2)}</p>}
        </div>

        <div className={styles.footer}>
          <button className="yellow-btn" onClick={handleAddToCart}>
            Order Online
            <PlusCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number,
};

Card.defaultProps = {
  thumbnailUrl: undefined,
  price: undefined,
};

export default Card;
