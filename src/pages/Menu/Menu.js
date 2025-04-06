import { useState, useEffect } from 'react';
import { Segmented } from 'antd';

import { menuItems } from '@/utils/mockData';
import Card from '@/components/common/Card';

import styles from './Menu.module.css';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(menuItems);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  useEffect(() => {
    console.log('selectedCategory ==> ', selectedCategory);
    console.log('menuItems ==> ', menuItems);

    if (selectedCategory === 'All') {
      setFilteredItems(menuItems);
    } else {
      // Filter menu items based on selected category
      setFilteredItems(menuItems.filter((item) => item.category === selectedCategory.toLowerCase()));
    }
  }, [selectedCategory]);
  console.log('filteredItems ==> ', filteredItems);

  return (
    <div className={styles.menu}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2>Let's Order Food Here!</h2>

          <Segmented
            size="large"
            options={['All', 'Main', 'Meal', 'Dessert', 'Drink']}
            value={selectedCategory}
            onChange={handleCategoryChange}
          />

          <div className={styles.listCards}>
            {filteredItems?.map((item) => (
              <Card
                key={item.slug}
                id={item.id}
                thumbnailUrl={item.thumbnailUrl}
                title={item.title}
                description={item.description}
                price={item.price}
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
