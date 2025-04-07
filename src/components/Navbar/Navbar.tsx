import styled from "styled-components";
import { Colors } from "../../Colors";
import { TinyHeading } from "../../Typography";
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
