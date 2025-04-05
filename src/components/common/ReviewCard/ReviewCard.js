/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

import Star from '@/icons/Star.svg?react';
import StarStroke from '@/icons/StarStroke.svg?react';

import styles from './ReviewCard.module.css';

const ReviewCard = ({ avatarUrl, name, message, reviewScore }) => {
  return (
    <div className={styles.Reviewcard}>
      <img src={avatarUrl} alt="food thumbnail" />

      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{message}</p>

        {/* Review Star Show */}
        <div className={styles.reviewScore}>
          {[...Array(5)].map((_, index) => {
            if (index + 1 <= reviewScore) return <Star key={`star-${index}-${reviewScore}`} />;
            return <StarStroke key={`star-${index}-${reviewScore}`} />;
          })}
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  avatar: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ReviewCard.defaultProps = {
  avatar: undefined,
};

export default ReviewCard;
