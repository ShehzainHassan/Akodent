import styled from "styled-components";
import { Colors } from "../../Colors";
import { ContentHeading, LargeText, SubHeading } from "../../Typography";
import { useState } from "react";

const imageUrls = [
  "https://akodent.com.ua/wp-content/uploads/korol-lesya-anatoliyivna.jpg",
  "https://akodent.com.ua/wp-content/uploads/korol-volodymyr-viktorovych.jpg",
  "https://akodent.com.ua/wp-content/uploads/borodaj-yuliya-oleksandrivna.jpg",
  "https://akodent.com.ua/wp-content/uploads/logvinchuk-iryna-oleksandrivna.jpg",
];

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white100};
  padding: 50px 15px;
  @media (max-width: 767px) {
    padding: 50px 0;
  }
`;
const TeamContent = styled("div")`
  max-width: 1620px;
  width: 100%;
`;
const TeamWrapper = styled("div")`
  position: relative;
`;
const TeamHeading = styled(SubHeading)`
  position: relative;
  padding-left: 40px;
`;
const TeamTitle = styled("div")`
  position: absolute;
  top: -40px;
  left: 0px;
  z-index: 0;
  letter-spacing: -0.01em;
  @media (max-width: 767px) {
    padding: 0 15px;
  }
`;
const TeamContainer = styled("div")`
  display: grid;
  grid-template-columns: 6fr 6fr;
  gap: 50px;
  padding: 0px 15px;
  @media (max-width: 767px) {
    position: relative;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const MainImg = styled("div")<{ bgUrl: string }>`
  width: 100%;
  height: 800px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.bgUrl});
`;

const SlideImg = styled("div")<{ bgUrl: string }>`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.bgUrl});
`;

const SlidesContainer = styled("div")`
  display: flex;
  gap: 30px;
  @media (max-width: 1023px) {
    display: none;
  }
`;
const Details = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
  max-width: 600px;
`;
const PersonDetails = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 767px) {
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
`;
const ButtonsContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  @media (max-width: 767px) {
    padding: 30px 40px;
    position: absolute;
    bottom: 225px;
    right: 0;
    background-color: ${Colors.black300};
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 20px 0px;
    margin-right: -30px;
    margin-left: -50px;
    background-color: ${Colors.black200};
  }
`;
const Button = styled("img")`
  width: 22px;
  height: 22px;
  cursor: pointer;
  @media (max-width: 1023px) {
    width: 30px;
    height: 30px;
  }
`;
export default function Team() {
  const [images, setImages] = useState(imageUrls);

  const handleNext = () => {
    const updatedImages = [...images.slice(1), images[0]];
    setImages(updatedImages);
  };

  const handlePrevious = () => {
    const updatedImages = [
      images[images.length - 1],
      ...images.slice(0, images.length - 1),
    ];
    setImages(updatedImages);
  };
  return (
    <Container>
      <TeamContent>
        <TeamWrapper>
          <TeamHeading
            $fontfamily="Cambria Math"
            color={Colors.gray200}
            $fontSize="53.33px">
            Our team :
          </TeamHeading>
          <TeamTitle>
            <SubHeading
              $fontfamily="Cambria Math"
              color={Colors.white50}
              $fontSize="64px">
              Our team :
            </SubHeading>
          </TeamTitle>
        </TeamWrapper>
      </TeamContent>
      <TeamContainer>
        <MainImg bgUrl={images[0]} />
        <Details>
          <PersonDetails>
            <ContentHeading $fontfamily="Comfortaa, Tahoma, sans-serif">
              Korol Lesya Anatoliivna
            </ContentHeading>
            <>
              <LargeText>Director.Dentist,</LargeText>
              <LargeText>pediatric dentist</LargeText>
              <LargeText>Doctor of the highest category</LargeText>
              <LargeText>Work experience 20 years</LargeText>
            </>
          </PersonDetails>
          <SlidesContainer>
            <SlideImg bgUrl={images[1]} />
            <SlideImg bgUrl={images[2]} />
          </SlidesContainer>
          <ButtonsContainer>
            <Button
              src="/images/previous.png"
              alt="chevron right"
              onClick={handlePrevious}
            />
            <Button
              src="/images/next.png"
              alt="chevron right"
              onClick={handleNext}
            />
          </ButtonsContainer>
        </Details>
      </TeamContainer>
    </Container>
  );
}
