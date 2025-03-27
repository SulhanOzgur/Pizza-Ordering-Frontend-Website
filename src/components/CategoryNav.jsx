import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import iconKore from '../../images/iteration-2-images/icons/1.svg';
import iconPizza from '../../images/iteration-2-images/icons/2.svg';
import iconBurger from '../../images/iteration-2-images/icons/3.svg';
import iconKizartmalar from '../../images/iteration-2-images/icons/4.svg';
import iconFastFood from '../../images/iteration-2-images/icons/5.svg';
import iconGazliIcecek from '../../images/iteration-2-images/icons/6.svg';

const CategoryNavWrapper = styled.nav`
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5.5rem;
  padding: 1rem 0;
  background-color: white;
`;

const CategoryItem = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-weight: 500;

  &:hover {
    color: #ce2829;
  }
`;

const IconImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 0.5rem;
`;

export default function CategoryNav() {
  const categories = [
    { to: '/kore', label: 'YENİ! Kore', icon: iconKore },
    { to: '/pizza', label: 'Pizza', icon: iconPizza },
    { to: '/burger', label: 'Burger', icon: iconBurger },
    { to: '/kizartmalar', label: 'Kızartmalar', icon: iconKizartmalar },
    { to: '/fast-food', label: 'Fast Food', icon: iconFastFood },
    { to: '/gazli-icecek', label: 'Gazlı İçecek', icon: iconGazliIcecek },
  ];

  return (
    <CategoryNavWrapper>
      {categories.map((item) => (
        <CategoryItem to={item.to} key={item.to}>
          <IconImage src={item.icon} alt={item.label} />
          {item.label}
        </CategoryItem>
      ))}
    </CategoryNavWrapper>
  );
}
