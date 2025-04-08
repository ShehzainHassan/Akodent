import styled from "styled-components";
import { Colors } from "../../Colors";
import { SectionTitle, SmallHeading } from "../../Typography";

const Container = styled("div")`
  display: flex;
`;
const TextContainer = styled("div")`
  display: flex;
  position: relative;
  max-width: 1750px;
  width: 100%;
  background-color: ${Colors.white};
  border: 10px solid ${Colors.brown200};
  border-left: none;
  box-shadow: 0 0 14px rgba(22, 5, 1, 0.72);
  background-color: ${Colors.white};
  left: 0;
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
const VideoContainer = styled("div")`
  border: 1px solid ${Colors.brown200};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: -70px;
  background-color: ${Colors.brown200};
  @media (max-width: 768px) {
    width: 18rem;
    height: 18rem;
  }
  @media (min-width: 769px) {
    width: 20rem;
    height: 20rem;
  }
  @media (min-width: 1024px) {
    width: 27.17rem;
    height: 27.17rem;
  }
  @media (min-width: 1280px) {
    width: 29.17rem;
    height: 29.17rem;
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
    </Container>
  );
}
