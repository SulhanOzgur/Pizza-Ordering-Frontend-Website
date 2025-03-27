import React from 'react';
import styled from 'styled-components';
// Data import
import FoodsDataList from '../datas/FoodsDataList';

// Dış sarmalayıcı alan
const MenuGridWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
`;

// Kartları bir grid halinde dizmek
const MenuGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
`;

// Her bir kart
const MenuCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

// Kart içindeki resim
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

export default function MenuItemsGrid() {
  return (
    <MenuGridWrapper>
      <MenuGridContainer>
        {FoodsDataList.map((item) => (
          <MenuCard key={item.id}>
            {/* Yemek resmi */}
            <MenuImage src={item.image} alt={item.title} />

            {/* Başlık */}
            <MenuTitle>{item.name}</MenuTitle>

            <MenuRow>
              <MenuInfo>{item.score}</MenuInfo>
              {/* Eğer comment de yan yana olsun istiyorsanız */}
              <MenuInfo>{item.comment}</MenuInfo>
              <MenuPrice>{item.price}</MenuPrice>
            </MenuRow>
          </MenuCard>
        ))}
      </MenuGridContainer>
    </MenuGridWrapper>
  );
}
