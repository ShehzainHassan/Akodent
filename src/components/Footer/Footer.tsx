import styled from "styled-components";
import { BodyText } from "../../Typography";
import { Colors } from "../../Colors";

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 80px;
  margin: 0 auto;
  background-color: ${Colors.white100};
  @media (max-width: 1023px) {
    padding: 20px 0px;
  }
`;
const Contact = styled("div")`
  display: flex;
  flex-direction: column;
`;
const SocialIcons = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
`;
const Icon = styled("img")`
  width: 48px;
  height: 48px;
  z-index: 3;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
`;
const IconContainer = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 50px;
`;
const Image = styled("img")`
  width: 60px;
  height: auto;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 30px;
  opacity: 0.3;
`;
export default function Footer() {
  return (
    <Container>
      <IconContainer>
        <Image src="/images/phone.png" alt="phone" />
        <Contact>
          <BodyText color={Colors.brown150}>066 184 00 000</BodyText>
          <BodyText color={Colors.brown150}>Mon - Sat 10:00 - 18:00</BodyText>
        </Contact>
      </IconContainer>

      <img
        src="/images/logo-vertical.png"
        alt="logo"
        width={165}
        height={179}
      />
      <IconContainer>
        <Image src="/images/location.png" alt="location" />
        <Contact>
          <BodyText color={Colors.brown150}>
            village of Stari Petrivtsi,
          </BodyText>
          <BodyText color={Colors.brown150}>
            57 Kniazya Sviatoslava St.
          </BodyText>
        </Contact>
      </IconContainer>
      <SocialIcons>
        <Icon src="/images/phone.png" alt="phone" />
        <Icon src="/images/viber.png" alt="viber" />
        <Icon src="/images/telegram.png" alt="telegram" />
      </SocialIcons>
    </Container>
  );
}
