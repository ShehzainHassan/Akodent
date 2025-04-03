import styled from "styled-components";
import { LargeText, SectionTitle } from "../../Typography";
import { Colors } from "../../Colors";

const Container = styled("div")`
  display: grid;
  grid-template-columns: 8fr 4fr;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 5.56rem 0;
`;
const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  line-height: 1.3;
`;
const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 0;
`;
const Title = styled("div")`
  margin: 17px auto;
`;
export default function Smile() {
  return (
    <Container>
      <BackgroundVideo autoPlay loop muted playsInline>
        <source src="/videos/smile.mp4" type="video/mp4" />
      </BackgroundVideo>
      <VideoOverlay />
      <Title>
        <SectionTitle color={Colors.white100}>
          Your message is your priority
        </SectionTitle>
      </Title>
      <TextContainer>
        <LargeText color={Colors.white100}>
          We value your time, so we provide a full range of dental services for
          the health of your teeth and gums in one place.
        </LargeText>
        <LargeText color={Colors.white100}>
          We use modern equipment, high quality materials, and effective
          painkillers.
        </LargeText>
      </TextContainer>
    </Container>
  );
}
