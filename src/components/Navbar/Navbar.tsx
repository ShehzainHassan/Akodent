import styled from "styled-components";
import { Colors } from "../../Colors";
import { BodyText, TinyHeading } from "../../Typography";
import { useNavbar } from "../../NavbarContext";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${Colors.white100};
  position: sticky;
  box-shadow: 0 0 12px rgba(73, 73, 73, 0.47);
  top: 0;
  z-index: 10;
`;

const NavList = styled.ul`
  display: flex;
  gap: 60px;
  list-style-type: none;

  li:nth-child(2) {
    position: relative;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
const MobileNav = styled.div<{ open: boolean }>`
  position: fixed;
  top: 10;
  right: ${(props) => (props.open ? "0" : "-100%")};
  width: 100%;
  list-style-type: none;
  height: 100%;
  background-color: ${Colors.white100};
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: right 0.3s ease-in-out;
  z-index: 10;
  @media (min-width: 1025px) {
    display: none;
  }
`;
const NavItem = styled.li`
  padding: 15px;
  position: relative;
  &:hover > div {
    opacity: 1;
    visibility: visible;
  }
`;
const SubMenu = styled("div")`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 100%;
  z-index: 10;
  width: 290px;
  border-radius: 15px;
  box-shadow: 0 0 6.5px rgba(73, 73, 73, 0.4);
  background-color: ${Colors.white100};
  padding: 20px;
  transition: max-height 0.3s linear, opacity 0.3s linear, visibility 0s linear;
`;
const SubMenuContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Line = styled("div")`
  width: 10px;
  height: 1px;
  background-color: ${Colors.brown150};
`;
const ItemContainer = styled("div")`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export default function Navbar() {
  const { isOpen } = useNavbar();
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <TinyHeading $cursor="pointer">Home</TinyHeading>
        </NavItem>
        <NavItem>
          <TinyHeading $cursor="pointer">Services</TinyHeading>
          <SubMenu>
            <SubMenuContainer>
              <ItemContainer>
                <Line />
                <BodyText>Therapeutic dentistry</BodyText>
              </ItemContainer>
              <ItemContainer>
                <Line />
                <BodyText>Orthopedic dentistry</BodyText>
              </ItemContainer>
              <ItemContainer>
                <Line />
                <BodyText>Pediatric dentistry</BodyText>
              </ItemContainer>
              <ItemContainer>
                <Line />
                <BodyText>Surgical dentistry</BodyText>
              </ItemContainer>
            </SubMenuContainer>
          </SubMenu>
        </NavItem>
        <NavItem>
          <TinyHeading $cursor="pointer">Our team</TinyHeading>
        </NavItem>
        <NavItem>
          <TinyHeading $cursor="pointer">Price</TinyHeading>
        </NavItem>
        <NavItem>
          <TinyHeading $cursor="pointer">Contacts</TinyHeading>
        </NavItem>
      </NavList>
      <MobileNav open={isOpen}>
        <NavItem>
          <TinyHeading $cursor="pointer">Home</TinyHeading>
        </NavItem>
        <NavItem>
          <TinyHeading $cursor="pointer">Services</TinyHeading>
        </NavItem>
        <NavItem>
          <TinyHeading $cursor="pointer">Our team</TinyHeading>
        </NavItem>
        <NavItem>
          <TinyHeading $cursor="pointer">Price</TinyHeading>
        </NavItem>
        <NavItem>
          <TinyHeading $cursor="pointer">Contacts</TinyHeading>
        </NavItem>
      </MobileNav>
    </NavContainer>
  );
}
