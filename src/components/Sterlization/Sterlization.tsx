import styled from "styled-components";
import { Colors } from "../../Colors";
import { BigTitle, BodyText, SmallText, SubHeading } from "../../Typography";
import { flyIn } from "../Space/Space";

const Container = styled("div")`
  display: grid;
  grid-template-columns: 5fr 7fr;
  padding: 30px;
  align-items: center;
  background-color: ${Colors.white100};
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
  }
`;
const AnimatingDots = styled("div")`
  position: absolute;
  background-image: url("https://akodent.com.ua/wp-content/themes/main-theme/resources/svg/decoration-st-dots.svg");
  width: 3.33rem;
  height: 7.5rem;
  top: 40%;
  left: -10%;
  background-size: contain;
  background-repeat: no-repeat;
  animation: ${flyIn} 8s linear infinite;
  @media (max-width: 1023px) {
    display: none;
  }
  @media (min-width: 1440px) {
    left: -10%;
  }
  @media (min-width: 1610px) {
    left: -20%;
  }
`;
const VideoContainer = styled("div")`
  position: relative;
  margin: 0 auto;
  @media (min-width: 479px) {
    width: 19.4rem;
    height: 13.125rem;
  }

  @media (min-width: 1023px) {
    width: 30rem;
    height: 22rem;
  }
`;
const Bold = styled("span")`
  font-weight: bold;
`;
const Underline = styled("span")`
  text-decoration: underline;
`;
const StagesContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const SterlizationSection = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Scrollable = styled("div")`
  display: flex;
  flex-direction: column;
  max-height: 80px;
  overflow-y: auto;
`;
const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 11.11rem;
`;
const SterilizationContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export default function Sterlization() {
  return (
    <Container>
      <VideoContainer>
        <BackgroundVideo autoPlay loop muted playsInline>
          <source src="/videos/sterilization.mp4" type="video/mp4" />
        </BackgroundVideo>
        <AnimatingDots />
      </VideoContainer>
      <SterlizationSection>
        <SterilizationContainer>
          <BigTitle $fontfamily="Cambria Math, Times New Roman">
            Sterilization is new !
          </BigTitle>
          <BodyText>
            <Bold>
              Sterilization is the process of completely destroying all
              microorgranisms, including bacteria, viruses, fungi, and spores.{" "}
            </Bold>
            It is an important part of dental practice as it helps prevents the
            spread of infections
          </BodyText>
          <SubHeading
            $fontfamily="Cambria Math, Times New Roman"
            color={Colors.gray200}>
            Stages of Sterilization:{" "}
          </SubHeading>
          <StagesContainer>
            <BodyText>
              <Bold>Instrument selection. </Bold> The first step in
              sterilization is the selection of instruments to be processed.
              This includes all instruments that come into contact with the
              patient's oral mucosa, blood, or tissues.
            </BodyText>
            <BodyText>
              <Bold>Instrument selection. </Bold> The first step in
              sterilization is the selection of instruments to be processed.
              This includes all instruments that come into contact with the
              patient's oral mucosa, blood, or tissues.
            </BodyText>
            <BodyText>
              <Bold>Instrument selection. </Bold> The first step in
              sterilization is the selection of instruments to be processed.
              This includes all instruments that come into contact with the
              patient's oral mucosa, blood, or tissues.
            </BodyText>
            <BodyText>
              <Bold>Sterilization. </Bold> The next step is to sterilize the
              instruments. Various methods are used for this including:
            </BodyText>
            <BodyText>
              <Underline>- Steam sterilization:</Underline> The most common
              sterilization method in dentistry. Instruments are treated with
              pressurized steam at 120-132 C for 15-20 minutes
            </BodyText>
            <BodyText>
              <Underline>- Steam sterilization:</Underline> The most common
              sterilization method in dentistry. Instruments are treated with
              pressurized steam at 120-132 C for 15-20 minutes
            </BodyText>
            <BodyText>
              <Underline>- Steam sterilization:</Underline> The most common
              sterilization method in dentistry. Instruments are treated with
              pressurized steam at 120-132 C for 15-20 minutes
            </BodyText>
            <BodyText>
              <Bold>Instrument selection. </Bold> The first step in
              sterilization is the selection of instruments to be processed.
              This includes all instruments that come into contact with the
              patient's oral mucosa, blood, or tissues.
            </BodyText>
          </StagesContainer>
        </SterilizationContainer>
        <Scrollable>
          <BodyText color={Colors.gray200}>
            Dentistry Stari Petrivtsi, dentistry Nova Petrivtsi, dentistry
            Lyutizh, dentistry Demydiv, dentistry, Vyshhorod
          </BodyText>
          <SmallText>
            Dentistry Novi Petrivtsi. Dentistry is an extremely important branch
            of medicine that ensures the health and beauty of our teeth.
            Pediatric dentistry Novi Petrivtsi. Pediatric dentistry is an
            important component of children's health. It is aimed at maintaining
            healthy teeth and developing proper oral hygiene habits in children.
            Veneers Novi Petrivtsi. Veneers are thin plates that are applied to
            the front surface of the teeth, changing their shape, size and
            color. This is a popular method of correcting smile defects and
            improving its appearance. The procedure for installing veneers
            includes a thorough examination of the teeth and the manufacture of
            individual veneers. This is a quick and effective way to get a
            perfect smile. Dental implants Novi Petrivtsi. Dental implants are a
            modern method of restoring lost teeth. They are stable and
            functional, giving you full control over your smile. The procedure
            for installing dental implants involves placing titanium roots in
            the jawbone and making crowns around them. This is a reliable and
            long-lasting way to restore lost teeth. Dentures Novi Petrivtsi.
            Dentures are an important solution for those who have lost part or
            all of their teeth. They allow you to restore chewing and improve
            your quality of life. There are two types of dentures: fixed and
            removable. The doctor will help you choose the best option according
            to your needs and budget
          </SmallText>
        </Scrollable>
      </SterlizationSection>
    </Container>
  );
}
