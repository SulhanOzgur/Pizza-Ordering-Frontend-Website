import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* -- GÖRSELLER -- */
import pizzaImg from '../../images/iteration-2-images/cta/kart-1.png';
import burgerImg from '../../images/iteration-2-images/cta/kart-2.png';
import kuryeImg from '../../images/iteration-2-images/cta/kart-3.png';

/* 
  Tüm bölümü saran bir wrapper (isteğe bağlı).
  Tam sayfa genişliğinde bir arka plan rengi veya 
  ekstra padding eklemek için kullanabilirsiniz.
*/
const CardWrapper = styled.section`
  width: 100%;
  padding: 2rem 0;
`;

/* 
  Asıl grid kapsayıcı.
  - 2 sütun (1fr, 1fr)
  - 2 satır (1fr, 1fr)
  - Soldaki büyük kart 2 satırı kaplar (span 2).
  - Sağda üst ve alt olmak üzere 2 kart.
  - "min-height" ile dikeyde biraz daha büyük görünmelerini sağlıyoruz.
*/
const CardContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Solu biraz küçülttük */
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  padding: 0 1rem;
  min-height: 450px;
  align-items: stretch;
`;

/*max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  padding: 0 1rem;
  min-height: 600px; /* Dikeyde biraz büyütmek için 
  align-items: stretch; /* Satırların yüksekliğini doldurur */

/* -- SOLDAKİ BÜYÜK KART -- */
const CardLarge = styled.div`
  grid-column: 1; /* 1. sütun */
  grid-row: 1 / span 2; /* 1. satırdan başlayıp 2 satır kapla */
  border-radius: 10px;
  overflow: hidden;
  position: relative; /* Overlay konumlandırma için */
  background: url(${pizzaImg}) center center/cover no-repeat;
  height: 100%;
`;

/* -- SAĞ ÜST KART -- */
const CardSmallTop = styled.div`
  grid-column: 2; /* 2. sütun */
  grid-row: 1; /* 1. satır */
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background: url(${burgerImg}) center center/cover no-repeat;
  height: 100%;
`;

/* -- SAĞ ALT KART -- */
const CardSmallBottom = styled.div`
  grid-column: 2; /* 2. sütun */
  grid-row: 2; /* 2. satır */
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background: url(${kuryeImg}) center center/cover no-repeat;
  height: 100%;
`;

/* 
  Ortak overlay stili. Kartın üzerinde metin, buton vb. göstermek için. 
  Kartın "position: relative" olması sayesinde,
  "position: absolute" overlay tam kart içinde konumlanır.
*/
const CardOverlayPizza = styled.div`
  position: absolute;
  top: 40%;
  left: 10%;
  transform: translateY(-50%);
  color: #fff; /* Metin rengi beyaz (isteğe göre değiştirebilirsiniz) */
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: #fff; /* Metin rengi beyaz (isteğe göre değiştirebilirsiniz) */
`;

/* Başlık */

const CardTitlePizza = styled.h2`
  font-size: 3.5rem;
  margin: 0 0 0.5rem 0;
`;

const CardTitleHackathlon = styled.h2`
  font-size: 1.4rem;
  margin: 0 0 0.5rem 0;
  aspect-ratio: 2/1;
`;

const CardTitleKurye = styled.h2`
  font-size: 1.4rem;
  margin: 0 0 0.5rem 0;
  color: black;
`;

/* Açıklama */
const CardDescription = styled.p`
  font-size: 1rem;
  margin: 0 0 1rem 0;
`;

/* “Sipariş Ver” Butonu */
const CardButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: #ce2829;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  transition: background-color 0.2s;
  margin-top: 1rem;

  &:hover {
    background-color: #e0a700;
    color: #000;
  }
`;

export default function CardSection() {
  return (
    <CardWrapper>
      <CardContainer>
        {/* Soldaki Büyük Kart (Pizza) */}
        <CardLarge>
          <CardOverlayPizza>
            <CardTitlePizza>
              Özel <br /> Lezzetus
            </CardTitlePizza>
            <CardDescription>Position: Absolute Acı Burger</CardDescription>
            <CardButton to="/order">SİPARİŞ VER</CardButton>
          </CardOverlayPizza>
        </CardLarge>

        {/* Sağ Üst Kart (Burger) */}
        <CardSmallTop>
          <CardOverlay>
            <CardTitleHackathlon>
              Hackathlon <br /> Burger Menü
            </CardTitleHackathlon>
            <CardButton to="/">SİPARİŞ VER</CardButton>
          </CardOverlay>
        </CardSmallTop>

        {/* Sağ Alt Kart (Kurye) */}
        <CardSmallBottom>
          <CardOverlay>
            <CardTitleKurye>
              <span style={{ color: 'red' }}>Çoooook</span> hızlı <br /> npm
              gibi kurye
            </CardTitleKurye>
            <CardButton to="/">SİPARİŞ VER</CardButton>
          </CardOverlay>
        </CardSmallBottom>
      </CardContainer>
    </CardWrapper>
  );
}
