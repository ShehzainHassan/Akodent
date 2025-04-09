import styled from "styled-components";
import { Colors } from "./Colors";

export const BigTitle = styled.h1<{
  $fontSize?: string;
  $color?: string;
  $fontfamily?: string;
}>`
  font-family: ${(props) => props.$fontfamily || "Montserrat"}, sans-serif;

  font-size: ${(props) => props.$fontSize || "72px"};
  color: ${(props) => props.color || Colors.gray200};
  @media (max-width: 1023px) {
    font-size: 48px;
  }
`;

export const SectionTitle = styled.h2<{
  $fontSize?: string;
  $color?: string;
  $fontfamily?: string;
}>`
  font-family: ${(props) => props.$fontfamily || "Montserrat"}, sans-serif;
  font-size: ${(props) => props.$fontSize || "60px"};
  color: ${(props) => props.color || Colors.gray200};
  @media (max-width: 479px) {
    font-size: 24px;
  }
  @media (min-width: 480px) {
    font-size: 26px;
  }
  @media (min-width: 768px) {
    font-size: 28.44px;
  }
  @media (min-width: 900px) {
    font-size: 36px;
  }
  @media (min-width: 1280px) {
    font-size: 48px;
  }
  @media (min-width: 1610px) {
    font-size: 60px;
  }
`;

export const SubHeading = styled.h3<{
  $fontSize?: string;
  $color?: string;
  $fontfamily?: string;
}>`
  font-family: ${(props) => props.$fontfamily || "Montserrat"}, sans-serif;
  font-size: ${(props) => props.$fontSize || "48px"};
  color: ${(props) => props.color || Colors.black200};
  @media (max-width: 1023px) {
    font-size: 33.78px;
  }
`;

export const ContentHeading = styled.h4<{
  $fontfamily?: string;
  $fontSize?: string;
  $color?: string;
}>`
  font-family: ${(props) => props.$fontfamily || "Montserrat"}, sans-serif;
  font-size: ${(props) => props.$fontSize || "36px"};
  color: ${(props) => props.color || Colors.black200};
`;

export const SmallHeading = styled.h5<{
  $fontSize?: string;
  $color?: string;
  $fontfamily?: string;
  $fontWeight?: string;
}>`
  font-family: ${(props) => props.$fontfamily || "Montserrat"}, sans-serif;
  font-weight: ${(props) => props.$fontWeight || 500};
  font-size: ${(props) => props.$fontSize || "30px"};
  color: ${(props) => props.color || Colors.black200};
  @media (max-width: 479px) {
    font-size: 15.56px;
  }
  @media (min-width: 480px) {
    font-size: 16.67px;
  }
  @media (min-width: 768px) {
    font-size: 17.78px;
  }
  @media (min-width: 900px) {
    font-size: 22.22px;
  }

  @media (min-width: 1280px) {
    font-size: 28.33px;
  }
  @media (min-width: 1610px) {
    font-size: 30px;
  }
`;

export const TinyHeading = styled.h5<{
  $fontWeight?: number;
  $fontfamily?: string;
  $fontSize?: string;
  $color?: string;
  $hoverUnderline?: boolean;
  $cursor?: string;
}>`
  font-weight: ${(props) => props.$fontWeight || 500};
  font-family: ${(props) => props.$fontfamily || "Montserrat"}, sans-serif;
  font-size: ${(props) => props.$fontSize || "26px"};
  color: ${(props) => props.$color || Colors.black200};
  cursor: ${(props) => props.$cursor || "default"};
`;

export const BigText = styled.p<{
  $fontSize?: string;
  $color?: string;
}>`
  font-size: ${(props) => props.$fontSize || "24px"};
  color: ${(props) => props.color || Colors.black200};
`;

export const LargeText = styled.p<{
  $fontfamily?: string;
  $fontSize?: string;
  $color?: string;
}>`
  font-family: ${(props) => props.$fontfamily || "Montserrat"}, sans-serif;
  font-size: ${(props) => props.$fontSize || "22px"};
  color: ${(props) => props.color || Colors.black200};
  @media (max-width: 1609px) and (min-width: 1440px) {
    font-size: 20.5px;
  }

  @media (max-width: 1439px) {
    font-size: 17px;
  }
  @media (max-width: 1280px) {
    font-size: 16px;
  }
`;
export const MediumText = styled.p<{
  $fontfamily?: string;

  $fontSize?: string;
  $color?: string;
}>`
  font-family: ${(props) => props.$fontfamily || "Montserrat"}, sans-serif;

  font-size: ${(props) => props.$fontSize || "18px"};
  color: ${(props) => props.color || Colors.black200};
`;
export const BodyText = styled.p<{
  $fontfamily?: string;
  $fontSize?: string;
  $color?: string;
  $fontWeight?: string;
}>`
  font-family: ${(props) => props.$fontfamily || "Montserrat"}, sans-serif;
  font-size: ${(props) => props.$fontSize || "16px"};
  color: ${(props) => props.color || Colors.black200};
  font-weight: ${(props) => props.$fontWeight || 500};
`;
export const SmallText = styled.p<{
  $fontSize?: string;
  $color?: string;
  $fontfamily?: string;
}>`
  font-family: ${(props) => props.$fontfamily || "Montserrat"}, sans-serif;

  font-size: ${(props) => props.$fontSize || "14px"};
  color: ${(props) => props.color || Colors.black200};
`;
