import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../images/iteration-1-images/logo.svg';

const HeaderWrapper = styled.header`
  background-color: #ce2829;
  color: #faf7f2;
  padding: 20px 0;
  text-align: center;
  width: 100%;
  margin: 0;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const Logo = styled.img`
  height: 40px;

  @media (max-width: 768px) {
    height: 30px;
  }
`;

const HeaderContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h1`
  display: block;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Breadcrumb = styled.nav`
  display: flex;
  font-size: 14px;
  margin-top: 40px;
  color: white;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 20px;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 4px;

  &:hover {
    color: white;
    text-decoration: none;
  }
`;

const Current = styled.span`
  font-weight: bold;
  color: white;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Title>
          {' '}
          <Logo src={logo} alt="Teknolojik Yemekler" />
        </Title>
        <Breadcrumb>
          <StyledLink to="/">Anasayfa</StyledLink>
          {' - '}
          <Current>Sipariş Oluştur</Current>
        </Breadcrumb>
      </HeaderContent>
    </HeaderWrapper>
  );
}
