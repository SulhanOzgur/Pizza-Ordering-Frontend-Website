import logo from '../../images/iteration-1-images/logo.svg';
import {
  SuccessPageWrapper,
  LogoWrapper,
  Logo,
  Content,
  Title,
} from '../components/layout/SuccessPageLayout.js';

export default function SuccessPage() {
  return (
    <SuccessPageWrapper>
      <LogoWrapper>
        <Logo src={logo} alt="Teknolojik Yemekler" />
      </LogoWrapper>
      <Content>
        <Title>
          TEBRİKLER!
          <br />
          SİPARİŞİNİZ ALINDI!
        </Title>
      </Content>
    </SuccessPageWrapper>
  );
}
