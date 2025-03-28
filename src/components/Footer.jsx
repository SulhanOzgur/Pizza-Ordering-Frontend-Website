import React from 'react';
import styled from 'styled-components';
import logo from '../../images/iteration-2-images/footer/logo-footer.svg';

import LocationIcon from '../../images/iteration-2-images/footer/icons/icon-1.png';
import EmailIcon from '../../images/iteration-2-images/footer/icons/icon-2.png';
import TelephoneIcon from '../../images/iteration-2-images/footer/icons/icon-3.png';

// Instagram benzeri fotoğraflar (örnek adlar)
import F1 from '../../images/iteration-2-images/footer/insta/li-0.png';
import F2 from '../../images/iteration-2-images/footer/insta/li-2.png';
import F3 from '../../images/iteration-2-images/footer/insta/li-4.png';
import F4 from '../../images/iteration-2-images/footer/insta/li-1.png';
import F5 from '../../images/iteration-2-images/footer/insta/li-3.png';
import F6 from '../../images/iteration-2-images/footer/insta/li-5.png';

/* -- STYLED COMPONENTS -- */

/* Arka plan koyu gri, beyaz yazı */
const FooterWrapper = styled.footer`
  background-color: #292929;
  color: #fff;
  padding: 2rem 1rem;
`;

/* İçeriği ortalamak ve sütunlara ayırmak */
const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`;

const Column = styled.div`
  flex: 1;
`;

const LogoImage = styled.img`
  width: 150px;
  margin-bottom: 1rem;
`;

const ColumnTitle = styled.h3`
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`;

const IconRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* İkon ile metin arasında boşluk */
  margin-bottom: 0.5rem;
`;

const IconImage = styled.img`
  width: 20px;
  height: 20px;
`;

const AddressText = styled.p`
  margin: 0.4rem 0;
  line-height: 1.4;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left; /* Soldan hizalamak için */
`;

const MenuItem = styled.li`
  margin: 0.4rem 0;
`;

const InstaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  max-width: 250px;
`;

const InstaImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
`;

const FooterBottom = styled.div`
  border-top: 1px solid #444;
  padding-top: 1rem;
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #ccc;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Column>
          <LogoImage src={logo} alt="Teknolojik Yemekler" />
          <IconRow>
            <IconImage src={LocationIcon} alt="Location Icon" />
            <AddressText>341 Londonderry Road, İstanbul / Türkiye</AddressText>
          </IconRow>

          <IconRow>
            <IconImage src={EmailIcon} alt="Email Icon" />
            <AddressText>aciktim@teknolojikyemekler.com</AddressText>
          </IconRow>

          <IconRow>
            <IconImage src={TelephoneIcon} alt="Telephone Icon" />
            <AddressText>+90 216 123 45 67</AddressText>
          </IconRow>
        </Column>

        <Column>
          <ColumnTitle>Sıccacık Menüler</ColumnTitle>
          <MenuList>
            <MenuItem>Terminal Pizza</MenuItem>
            <MenuItem>5 Kişilik Hackathlon Pizza</MenuItem>
            <MenuItem>useEffect Tavuklu Pizza</MenuItem>
            <MenuItem>Beyaz Console Frosty</MenuItem>
            <MenuItem>Tester Geçti Mutlu Burger</MenuItem>
            <MenuItem>Position Absolute Acı Burger</MenuItem>
          </MenuList>
        </Column>

        <Column>
          <ColumnTitle>Instagram</ColumnTitle>
          <InstaGrid>
            <InstaImage src={F1} alt="Food 1" />
            <InstaImage src={F2} alt="Food 2" />
            <InstaImage src={F3} alt="Food 3" />
            <InstaImage src={F4} alt="Food 4" />
            <InstaImage src={F5} alt="Food 5" />
            <InstaImage src={F6} alt="Food 6" />
          </InstaGrid>
        </Column>
      </FooterContainer>

      <FooterBottom>
        © 2025 Teknolojik Yemekler. Tüm hakları saklıdır.
      </FooterBottom>
    </FooterWrapper>
  );
}
