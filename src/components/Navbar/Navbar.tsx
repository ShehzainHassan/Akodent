import styled from "styled-components";
import { Colors } from "../../Colors";
import { TinyHeading } from "../../Typography";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${Colors.white100};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavList = styled.ul`
  display: flex;
  gap: 60px;
  list-style-type: none;
`;

const NavItem = styled.li`
  padding: 15px;
`;

export default function Navbar() {
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
    </NavContainer>
  );
}
