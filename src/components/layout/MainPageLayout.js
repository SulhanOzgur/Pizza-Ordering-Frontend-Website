/*MainPage*/

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import banner from '../../../images/iteration-1-images/home-banner.png';

export const MainPageAll = styled.div`
  background-color: #faf7f2;
`;

export const HeroSection = styled.section`
  background: url(${banner}) no-repeat center center/cover;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;

  /* İçeriği dikeyde yukarı it, yatayda ortaya al */
  justify-content: flex-start;
  align-items: center;

  padding-top: 2rem; /* Üstten boşluk */
`;

export const HeroContent = styled.div`
  text-align: center;
`;

export const Logo = styled.img`
  width: 350px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 200px;
    margin-bottom: 1rem;
  }
`;

export const Advice = styled.p`
  color: #fdc913;
  font-size: 1.3rem;
  font-family: 'Satisfy', cursive;
  margin: 0;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 300;
  line-height: 1.3;
  letter-spacing: 2px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const OrderButton = styled(Link)`
  display: inline-block;
  margin-top: 1.5rem;
  background-color: #fdc913;
  color: black;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 1rem 3rem;
  border: none;
  border-radius: 40px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    font-size: 0.9rem;
    padding: 0.8rem 2rem;
  }
`;

export const CardsSection = styled.section`
  /* Arkaplan rengi isterseniz ekleyebilirsiniz, yoksa transparent kalabilir */
  background-color: #fff;
  padding: 4rem 2rem;
  color: #000;
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  display: block;
  border-radius: 10px;
  overflow: hidden;
  width: 300px; /* Sabit genişlik, isteğe göre ayarlayabilirsiniz */
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

/* import styled from 'styled-components';
import { Link } from 'react-router-dom';
import banner from '../../../images/iteration-1-images/home-banner.png';

export const MainContainer = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Logo = styled.img`
  width: 350px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 200px;
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 300;
  text-align: center;
  line-height: 1.3;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const OrderButton = styled(Link)`
  margin-top: 3rem;
  background-color: #fdc913;
  color: black;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 1rem 3rem;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    font-size: 0.9rem;
    padding: 0.8rem 2rem;
  }
`; */
