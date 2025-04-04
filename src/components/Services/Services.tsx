import styled from "styled-components";
import { MediumText, SmallHeading, SubHeading } from "../../Typography";
import { Colors } from "../../Colors";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  background-color: ${Colors.white100};
`;
const ContentContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LeftHeadingContainer = styled("div")`
  display: flex;
  justify-content: flex-start;
  padding: 3rem;
`;
const RightHeadingContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  padding: 3rem;
`;
const CenterHeadingContainer = styled("div")`
  display: flex;
  justify-content: center;
  padding: 3rem;
`;
const ServiceItem = styled("div")`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 320px;
  border-radius: 10px;
  padding: 25px 40px;
  transition: filter 0.4s linear, background 0.2s linear, box-shadow 0.4s linear,
    border 0.2s linear;
  margin: 0.56rem;
  background-color: ${Colors.white100};
  border: 2px solid transparent;
  &:hover {
    background-color: ${Colors.white100};
    border: 2px solid ${Colors.gray200};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const Image = styled("img")`
  width: 100%;
  height: auto;
`;
const ImagesContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function Services() {
  return (
    <Container>
      <SubHeading
        color={Colors.gray100}
        $fontSize="53.33px"
        $fontfamily="Cambria Math">
        Our services :
      </SubHeading>
      <ContentContainer>
        <LeftHeadingContainer>
          <SmallHeading $fontSize="32px">Therapy</SmallHeading>
        </LeftHeadingContainer>
        <ImagesContainer>
          <ServiceItem>
            <Image src="/images/caries.png" alt="caries" />
            <MediumText>Caries treatment</MediumText>
          </ServiceItem>
          <ServiceItem>
            <Image src="/images/caries.png" alt="caries" />
            <MediumText>Caries treatment</MediumText>
          </ServiceItem>
          <ServiceItem>
            <Image src="/images/caries.png" alt="caries" />
            <MediumText>Caries treatment</MediumText>
          </ServiceItem>
          <ServiceItem>
            <Image src="/images/caries.png" alt="caries" />
            <MediumText>Caries treatment</MediumText>
          </ServiceItem>
        </ImagesContainer>
      </ContentContainer>
      <RightHeadingContainer>
        <SmallHeading $fontSize="32px">
          Orthopedics and stomatology
        </SmallHeading>
      </RightHeadingContainer>
      <ImagesContainer>
        <ServiceItem>
          <Image src="/images/caries.png" alt="caries" />
          <MediumText>Caries treatment</MediumText>
        </ServiceItem>
        <ServiceItem>
          <Image src="/images/caries.png" alt="caries" />
          <MediumText>Caries treatment</MediumText>
        </ServiceItem>
        <ServiceItem>
          <Image src="/images/caries.png" alt="caries" />
          <MediumText>Caries treatment</MediumText>
        </ServiceItem>
        <ServiceItem>
          <Image src="/images/caries.png" alt="caries" />
          <MediumText>Caries treatment</MediumText>
        </ServiceItem>
      </ImagesContainer>
      <CenterHeadingContainer>
        <SmallHeading $fontSize="32px">Child Psychology</SmallHeading>
      </CenterHeadingContainer>
      <ImagesContainer>
        <ServiceItem>
          <Image src="/images/caries.png" alt="caries" />
          <MediumText>Caries treatment</MediumText>
        </ServiceItem>
        <ServiceItem>
          <Image src="/images/caries.png" alt="caries" />
          <MediumText>Caries treatment</MediumText>
        </ServiceItem>
        <ServiceItem>
          <Image src="/images/caries.png" alt="caries" />
          <MediumText>Caries treatment</MediumText>
        </ServiceItem>
        <ServiceItem>
          <Image src="/images/caries.png" alt="caries" />
          <MediumText>Caries treatment</MediumText>
        </ServiceItem>
        <ServiceItem>
          <Image src="/images/caries.png" alt="caries" />
          <MediumText>Caries treatment</MediumText>
        </ServiceItem>
        <ServiceItem>
          <Image src="/images/caries.png" alt="caries" />
          <MediumText>Caries treatment</MediumText>
        </ServiceItem>
      </ImagesContainer>
      <LeftHeadingContainer>
        <SmallHeading $fontSize="32px">Surgery</SmallHeading>
      </LeftHeadingContainer>
      <ImagesContainer>
        <ServiceItem>
          <Image src="/images/caries.png" alt="caries" />
          <MediumText>Caries treatment</MediumText>
        </ServiceItem>
        <ServiceItem>
          <Image src="/images/caries.png" alt="caries" />
          <MediumText>Caries treatment</MediumText>
        </ServiceItem>
        <ServiceItem>
          <Image src="/images/caries.png" alt="caries" />
          <MediumText>Caries treatment</MediumText>
        </ServiceItem>
      </ImagesContainer>
    </Container>
  );
}
