import styled, { keyframes } from "styled-components";
import { TinyHeading } from "../../Typography";
import { Colors } from "../../Colors";

const moveWheel = keyframes`
  0% {
    top: 0.167rem;
    opacity: 0;
  }
  30% {
    top: 0.55rem;
    opacity: 1;
  }
  100% {
    top: 1rem;
    opacity: 0;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 64.6px - 47.99px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1px;
  padding-bottom: 4.44rem;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  object-fit: cover;
  z-index: -1;
`;

const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const Mouse = styled.div`
  position: absolute;
  border: 0.1rem solid white;
  border-radius: 0.94rem;
  height: 2.78rem;
  width: 1.67rem;
  display: block;
  z-index: 1;
  margin: auto;
  left: 50%;
  bottom: 1px;
  transform: translate(-50%, 0);
`;

const MouseWheel = styled.div`
  position: relative;
  border-radius: 0.22rem;
  background-color: ${Colors.white};
  width: 0.11rem;
  height: 0.38rem;
  margin: auto;
  animation: ${moveWheel} 1s linear 0s infinite;
`;

export default function Hero() {
  return (
    <Container>
      <BackgroundVideo autoPlay loop muted playsInline>
        <source src="/videos/akodent.mp4" type="video/mp4" />
      </BackgroundVideo>
      <Image src="/images/logo-vertical.png" alt="logo" />
      <TinyHeading $color={Colors.white100}>
        Your family and friends
      </TinyHeading>
      <Mouse>
        <MouseWheel />
      </Mouse>
    </Container>
  );
}
