import styled from "styled-components";
import { BodyText } from "../../Typography";
import { Colors } from "../../Colors";

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 20px 20px 45px;
  margin: 0 auto;
  background-color: ${Colors.white100};
`;
const Contact = styled("div")`
  display: flex;
  flex-direction: column;
`;

export default function Footer() {
  return (
    <Container>
      <Contact>
        <BodyText color={Colors.brown150}>066 184 00 000</BodyText>
        <BodyText color={Colors.brown150}>Mon - Sat 10:00 - 18:00</BodyText>
      </Contact>
      <img
        src="/images/logo-vertical.png"
        alt="logo"
        width={165}
        height={179}
      />
      <Contact>
        <BodyText color={Colors.brown150}>village of Stari Petrivtsi,</BodyText>
        <BodyText color={Colors.brown150}>57 Kniazya Sviatoslava St.</BodyText>
      </Contact>
    </Container>
  );
}
