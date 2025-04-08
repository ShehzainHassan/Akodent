import styled from "styled-components";
import { Colors } from "../../Colors";
import { useNavbar } from "../../NavbarContext";
import { LargeText } from "../../Typography";
const Container = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  background-color: ${Colors.brown100};
  @media (max-width: 1439px) {
    padding: 0px 15px;
  }
`;
const InfoContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const Timings = styled("div")`
  display: flex;
  gap: 10px;
`;
const Address = styled("div")`
  display: flex;
  flex-direction: column;
`;
const IconContainer = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 50px;
`;
const Text = styled(LargeText)`
  z-index: 1;
  position: relative;
`;
const Image = styled("img")`
  width: 80px;
  height: auto;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0px;
  @media (min-width: 1440px) {
    width: 4.16rem;
    height: 4.16rem;
  }
  @media (min-width: 1610px) {
    width: 4.83rem;
    height: 4.83rem;
  }
`;
const Logo = styled("img")`
  height: 3.33rem;
  width: 12.22rem;
  @media (min-width: 1440px) {
    height: 4.4444444444rem;
    width: 17.7611111111rem;
  }
  @media (min-width: 1610px) {
    height: 5.83rem;
    width: 23.305rem;
  }
`;
const Hamburger = styled("div")`
  @media (max-width: 1024px) {
    display: block;
    position: relative;
    width: 1.16rem;
    height: 1.61rem;
    margin: 10px;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;

const HamburgerTop = styled("span")`
  position: absolute;
  background-color: ${Colors.gray100};
  width: 1.16rem;
  height: 0.11rem;
  top: 50%;
  right: 0%;
`;
const HamburgerMid = styled("span")`
  position: absolute;
  background-color: ${Colors.gray100};
  width: 1.61rem;
  height: 0.11rem;
  top: calc(50% - 0.44rem);
  right: 0%;
`;
const HamburgerBottom = styled("span")`
  position: absolute;
  background-color: ${Colors.gray100};
  width: 0.67rem;
  height: 0.11rem;
  top: calc(50% + 0.44rem);
  right: 0%;
`;

export default function NavTop() {
  const { toggleNavbar } = useNavbar();
  return (
    <Container>
      <Logo src="/images/logo.png" alt="logo" />
      <Hamburger onClick={toggleNavbar}>
        <HamburgerTop />
        <HamburgerMid />
        <HamburgerBottom />
      </Hamburger>
      <InfoContainer>
        <IconContainer>
          <Image src="/images/phone.png" alt="phone" />
          <Text color={Colors.white100}>066 184 00 00</Text>
        </IconContainer>
        <IconContainer>
          <Image src="/images/clock.png" alt="clock" />
          <Timings>
            <Text color={Colors.white100}>Mon - Sat</Text>
            <LargeText color={Colors.white100}>10:00 - 18:00</LargeText>
          </Timings>
        </IconContainer>

        <IconContainer>
          <Image src="/images/location.png" alt="location" />
          <Address>
            <Text color={Colors.white100}>village of Stari Petrivtsi,</Text>
            <Text color={Colors.white100}>57 Kniazya Sviatoslava St.</Text>
          </Address>
        </IconContainer>
      </InfoContainer>
    </Container>
  );
}
