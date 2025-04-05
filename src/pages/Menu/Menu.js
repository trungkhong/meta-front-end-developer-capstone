import React from 'react';
import PropTypes from 'prop-types';
import { Segmented } from 'antd';

import { menuItems } from '@/utils/mockData';
import Card from '@/components/common/Card';

import styles from './Menu.module.css';

const Menu = (props) => {
  return (
    <div className={styles.menu}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2>Let's Order Food Here!</h2>

          <Segmented size="large" options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />

          <div className={styles.listCards}>
            {menuItems.map((item) => (
              <Card
                key={item.slug}
                thumbnailUrl={item.thumbnailUrl}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {};

export default Menu;
