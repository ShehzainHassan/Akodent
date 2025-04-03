import styled from "styled-components";
import { Colors } from "./Colors";

export const BigTitle = styled.h1<{ $fontSize?: string; $color?: string }>`
  font-size: ${(props) => props.$fontSize || "72px"};
  color: ${(props) => props.color || Colors.gray200};
`;

export const SectionTitle = styled.h2<{ $fontSize?: string; $color?: string }>`
  font-size: ${(props) => props.$fontSize || "60px"};
  color: ${(props) => props.color || Colors.gray200};
`;

export const SubHeading = styled.h3<{ $fontSize?: string; $color?: string }>`
  font-size: ${(props) => props.$fontSize || "48px"};
  color: ${(props) => props.color || Colors.black200};
`;

export const ContentHeading = styled.h4<{
  $fontSize?: string;
  $color?: string;
}>`
  font-size: ${(props) => props.$fontSize || "36px"};
  color: ${(props) => props.color || Colors.black200};
`;

export const SmallHeading = styled.h5<{
  $fontSize?: string;
  $color?: string;
}>`
  font-size: ${(props) => props.$fontSize || "30px"};
  color: ${(props) => props.color || Colors.black200};
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
`;
export const MediumText = styled.p<{
  $fontSize?: string;
  $color?: string;
}>`
  font-size: ${(props) => props.$fontSize || "18px"};
  color: ${(props) => props.color || Colors.black200};
`;
export const BodyText = styled.p<{
  $fontSize?: string;
  $color?: string;
}>`
  font-size: ${(props) => props.$fontSize || "16px"};
  color: ${(props) => props.color || Colors.black200};
`;
export const SmallText = styled.p<{
  $fontSize?: string;
  $color?: string;
}>`
  font-size: ${(props) => props.$fontSize || "14px"};
  color: ${(props) => props.color || Colors.black200};
`;
