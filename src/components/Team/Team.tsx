import styled from "styled-components";
import { Colors } from "../../Colors";
import { ContentHeading, LargeText, SubHeading } from "../../Typography";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white100};
  padding: 30px 15px;
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
  top: 0px;
  left: 115px;
`;
const TeamTitle = styled("div")`
  position: absolute;
  top: -40px;
  left: 0px;
  z-index: 0;
  letter-spacing: -0.01em;
`;
const TeamContainer = styled("div")`
  display: grid;
  grid-template-columns: 6fr 6fr;
  gap: 50px;
  margin: 0 150px;
  padding: 0px 15px;
`;
const MainImg = styled("img")`
  width: 100%;
  height: 800px;
  background-size: cover;
  background-image: url("https://akodent.com.ua/wp-content/uploads/korol-lesya-anatoliyivna.jpg");
`;
const SlideImg = styled("img")`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-image: url("https://akodent.com.ua/wp-content/uploads/korol-volodymyr-viktorovych.jpg");
`;
const SlidesContainer = styled("div")`
  display: flex;
  gap: 30px;
`;
const Details = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  max-width: 600px;
`;
const PersonDetails = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export default function Team() {
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
        <MainImg />
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
            <SlideImg />
            <SlideImg />
          </SlidesContainer>
        </Details>
      </TeamContainer>
    </Container>
  );
}
