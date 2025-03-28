import React from 'react';
import styled from 'styled-components';
import FoodsDataList from '../datas/FoodsDataList';
import { Link } from 'react-router-dom';

const MenuGridWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
`;

const MenuGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
`;

const MenuCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const MenuImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const MenuRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const MenuTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const MenuInfo = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const MenuPrice = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: black;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function MenuItemsGrid() {
  return (
    <MenuGridWrapper>
      <MenuGridContainer>
        {FoodsDataList.map((item) => (
          <MenuCard key={item.id}>
            <StyledLink to="/order">
              <MenuImage src={item.image} alt={item.title} />
              <MenuTitle>{item.name}</MenuTitle>
            </StyledLink>
            <MenuRow>
              <MenuInfo>{item.score}</MenuInfo>

              <MenuInfo>{item.comment}</MenuInfo>
              <MenuPrice>{item.price}</MenuPrice>
            </MenuRow>
          </MenuCard>
        ))}
      </MenuGridContainer>
    </MenuGridWrapper>
  );
}
