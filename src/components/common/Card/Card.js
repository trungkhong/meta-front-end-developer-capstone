import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
import PlusCircle from '@/icons/PlusCircle.svg?react';

import styles from './Card.module.css';

const Card = ({ thumbnailUrl, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={thumbnailUrl} alt="food thumbnail" />

      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="footer">
        <button className="yellow-btn">
          Order Online
          <PlusCircle />
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Card.defaultProps = {
  thumbnailUrl: undefined,
};

export default Card;
