import styled, { keyframes } from "styled-components";
import { LargeText, SectionTitle } from "../../Typography";
import { Colors } from "../../Colors";

const moveArrows = keyframes`
  0% {
   -webkit-transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(50%);
  }
  100% {
    -webkit-transform: translateY(100%);  
    }
`;

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
const Lines = styled("div")`
  display: block;
  content: "";
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Line1 = styled("div")`
  position: absolute;
  top: 0;
  left: 10%;
  width: 1px;
  height: 100%;
  background-color: rgba(151, 153, 169, 0.3);
  overflow: hidden;
`;
const Line2 = styled("div")`
  position: absolute;
  top: 0;
  left: 30%;
  width: 1px;
  height: 100%;
  background-color: rgba(151, 153, 169, 0.3);
  overflow: hidden;
`;
const Line3 = styled("div")`
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 100%;
  background-color: rgba(151, 153, 169, 0.3);
  overflow: hidden;
`;
const Line4 = styled("div")`
  position: absolute;
  top: 0;
  left: 70%;
  width: 1px;
  height: 100%;
  background-color: rgba(151, 153, 169, 0.3);
  overflow: hidden;
`;
const Line5 = styled("div")`
  position: absolute;
  top: 0;
  left: 90%;
  width: 1px;
  height: 100%;
  background-color: rgba(151, 153, 169, 0.3);
  overflow: hidden;
`;
const Span = styled("span")`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  animation: ${moveArrows} 4s linear infinite;
`;
export default function Smile() {
  return (
    <Container>
      <Lines>
        <Line1>
          <Span />
        </Line1>
        <Line2>
          <Span />
        </Line2>
        <Line3>
          <Span />
        </Line3>
        <Line4>
          <Span />
        </Line4>
        <Line5>
          <Span />
        </Line5>
      </Lines>
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
