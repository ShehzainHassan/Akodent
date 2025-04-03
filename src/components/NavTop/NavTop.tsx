import styled from "styled-components";
import { Colors } from "../../Colors";
import { LargeText } from "../../Typography";
const Container = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: ${Colors.brown100};
`;
const Timings = styled("div")`
  display: flex;
  gap: 10px;
`;
const Address = styled("div")`
  display: flex;
  flex-direction: column;
`;
export default function NavTop() {
  return (
    <Container>
      <img src="/images/logo.png" alt="logo" width={420} height={105} />
      <LargeText color={Colors.white100}>066 184 00 00</LargeText>
      <Timings>
        <LargeText color={Colors.white100}>Mon - Sat</LargeText>
        <LargeText color={Colors.white100}>10:00 - 18:00</LargeText>
      </Timings>

      <Address>
        <LargeText color={Colors.white100}>
          village of Stari Petrivtsi,
        </LargeText>
        <LargeText color={Colors.white100}>
          57 Kniazya Sviatoslava St.
        </LargeText>
      </Address>
    </Container>
  );
}
