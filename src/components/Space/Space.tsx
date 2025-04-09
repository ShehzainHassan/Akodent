import styled, { keyframes } from "styled-components";
import { Colors } from "../../Colors";
import { SectionTitle, SmallHeading } from "../../Typography";
export const flyIn = keyframes`
  0% {
    transform: translateX(0) translateY(0) scale(1);
  }
  50% {
    transform: translateX(15%) translateY(-15%) scale(0.8);
  }
  100% {
    transform: translateX(0) translateY(0) scale(1);
  }
`;
const AnimatingDots = styled("div")`
  position: absolute;
  content: "";
  width: 12rem;
  height: 26rem;
  background: url("https://akodent.com.ua/wp-content/themes/main-theme/images/decoration-white-dots.webp")
    50% / contain no-repeat;
  right: -9rem;
  bottom: -16.6666666667rem;
  z-index: 0;
  animation: ${flyIn} 18s linear infinite;
  @media (max-width: 639px) {
    right: -4rem;
    bottom: -25rem;
    height: 20rem;
  }
  @media (min-width: 640px) {
    right: -6rem;
  }
  @media (min-width: 1024px) {
    right: -8rem;
  }
`;
const Container = styled("div")`
  display: flex;
  @media (max-width: 639px) {
    flex-direction: column;
  }
`;
const TextContainer = styled("div")`
  display: flex;
  position: relative;
  width: 85%;
  background-color: ${Colors.white};
  border: 10px solid ${Colors.brown200};
  border-left: none;
  box-shadow: 0 0 14px rgba(22, 5, 1, 0.72);
  background-color: ${Colors.white};
  left: 0;
  @media (max-width: 639px) {
    left: -100px;
    width: 100%;
    border-radius: 100px;
  }
  @media (max-width: 1408px) {
    padding: 1rem 0;
  }
  @media (min-width: 1409px) {
    padding: 2rem 0;
  }
  @media (min-width: 1755px) {
    padding: 3rem 0;
  }
`;
const MobileVideoContainer = styled("div")`
  display: none;
  @media (max-width: 639px) {
    position: relative;
    display: flex;
    margin: 0 auto;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: ${Colors.brown200};
  }
`;
const VideoContainer = styled("div")`
  border: 1px solid ${Colors.brown200};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: -70px;
  background-color: ${Colors.brown200};
  @media (max-width: 639px) {
    display: none;
  }
  @media (max-width: 768px) {
    width: 16rem;
    height: 16rem;
  }
  @media (min-width: 769px) {
    width: 17rem;
    height: 17rem;
  }
  @media (min-width: 1024px) {
    width: 22.17rem;
    height: 22.17rem;
  }
  @media (min-width: 1280px) {
    width: 25.17rem;
    height: 25.17rem;
  }
  @media (min-width: 1610px) {
    width: 31.17rem;
    height: 31.17rem;
  }
`;
const SpaceCircle = styled("div")`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
  width: 95%;
  height: 95%;
  border-radius: 50%;
  background-color: ${Colors.black200};
  overflow: hidden;
`;
const PosterVideo = styled("div")`
  height: 100%;
  background-color: ${Colors.black200};
`;
const ContentContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  @media (max-width: 639px) {
    padding: 0;
    padding-left: 120px;
  }
`;
const SubTextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Space() {
  return (
    <Container>
      <TextContainer>
        <ContentContainer>
          <SectionTitle
            $fontfamily="Cambria Math, Times New Roman, serif"
            color={Colors.black200}>
            Modern stomatological and simple
          </SectionTitle>
          <SubTextContainer>
            <SmallHeading $fontfamily="Comfortaa, Tahoma, sans-serif">
              Proven methods and creative approach
            </SmallHeading>
            <SmallHeading $fontfamily="Comfortaa, Tahoma, sans-serif">
              Affordable prices for all types of services
            </SmallHeading>
          </SubTextContainer>
        </ContentContainer>
        <AnimatingDots />

        <VideoContainer>
          <SpaceCircle>
            <PosterVideo>
              <BackgroundVideo autoPlay loop muted playsInline>
                <source src="/videos/space.mp4" type="video/mp4" />
              </BackgroundVideo>
            </PosterVideo>
          </SpaceCircle>
        </VideoContainer>
      </TextContainer>
      <MobileVideoContainer>
        <SpaceCircle>
          <PosterVideo>
            <BackgroundVideo autoPlay loop muted playsInline>
              <source src="/videos/space.mp4" type="video/mp4" />
            </BackgroundVideo>
          </PosterVideo>
        </SpaceCircle>
      </MobileVideoContainer>
    </Container>
  );
}
