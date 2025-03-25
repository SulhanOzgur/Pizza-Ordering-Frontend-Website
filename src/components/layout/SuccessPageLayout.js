/*SuccessPage */

import styled from 'styled-components';

export const SuccessPageWrapper = styled.div`
  background-color: #ce2829;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const LogoWrapper = styled.div`
  padding: 5rem 0;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 350px;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 300;
  text-align: center;
  line-height: 1.3;
  letter-spacing: 2px;
  color: white;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

/* import styled from 'styled-components';

  export const SuccessPageWrapper = styled.div`
  background-color: #ce2829;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const LogoWrapper = styled.div`
  padding: 5rem 0;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 350px;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 300;
  text-align: center;
  line-height: 1.3;
  letter-spacing: 2px;
  color: white;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`; */
