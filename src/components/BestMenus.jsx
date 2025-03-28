import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import iconRamen from '../../images/iteration-2-images/icons/1.svg';
import iconPizza from '../../images/iteration-2-images/icons/2.svg';
import iconBurger from '../../images/iteration-2-images/icons/3.svg';
import iconFrenchFries from '../../images/iteration-2-images/icons/4.svg';
import iconFastFood from '../../images/iteration-2-images/icons/5.svg';
import iconSoftDrinks from '../../images/iteration-2-images/icons/6.svg';

const BestMenusWrapper = styled.section`
  max-width: 1800px;
  text-align: center;
  padding: 2rem 1rem;
`;

const SubTitle = styled.p`
  font-family: 'Satisfy', cursive;
  font-size: 2rem;
  color: #ce2829;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin: 0 0 2rem;
  font-weight: 600;
`;

const MenusContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: white;
  border-radius: 40px;
  padding: 1rem 2rem;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    border-color: #ce2829;
    color: white;
    background-color: #292929;
  }
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
`;

export default function BestMenus() {
  const menuItems = [
    { to: '/ramen', label: 'Ramen', icon: iconRamen },
    { to: '/pizza', label: 'Pizza', icon: iconPizza },
    { to: '/burger', label: 'Burger', icon: iconBurger },
    { to: '/french-fries', label: 'French Fries', icon: iconFrenchFries },
    { to: '/fast-food', label: 'Fast Food', icon: iconFastFood },
    { to: '/soft-drinks', label: 'Soft Drinks', icon: iconSoftDrinks },
  ];

  return (
    <BestMenusWrapper>
      <SubTitle>en çok paketlenen menüler</SubTitle>
      <SectionTitle>Acıktıran Kodlara Doyuran Lezzetler</SectionTitle>

      <MenusContainer>
        {menuItems.map((item) => (
          <MenuItem to={item.to} key={item.to}>
            <IconImage src={item.icon} alt={item.label} />
            {item.label}
          </MenuItem>
        ))}
      </MenusContainer>
    </BestMenusWrapper>
  );
}
