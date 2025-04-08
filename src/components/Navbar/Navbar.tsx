import styled from "styled-components";
import { Colors } from "../../Colors";
import { BodyText, TinyHeading } from "../../Typography";
import { useNavbar } from "../../NavbarContext";
import { useState } from "react";

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
  left: ${(props) => (props.open ? "0" : "100%")};
  width: 100vw;
  height: 100vh;
  list-style-type: none;
  background-color: ${Colors.white100};
  display: ${(props) => (props.open ? "flex" : "none")};
  display: flex;
  flex-direction: column;
  transition: right 0.3s ease-in-out;
  z-index: 10;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  @media (min-width: 1024px) {
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
  @media (max-width: 1025px) {
    padding: 0 1.67rem;
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
const StyledHeading = styled(TinyHeading)`
  padding: 10px 0px;
  border-bottom: 1px solid ${Colors.black100};
`;
const Expandable = styled("div")`
  position: relative;
  display: flex;
  border-bottom: 1px solid ${Colors.black100};
  padding: 10px 0px;
`;
const Button = styled("img")`
  position: absolute;
  right: 2px;
  top: 20%;
  width: 15px;
  height: 25px;
`;
const MobileSubMenu = styled.div<{ open: boolean }>`
  position: fixed;
  left: ${(props) => (props.open ? "0" : "-100%")};
  width: 100vw;
  height: 100vh;
  list-style-type: none;
  background-color: ${Colors.white100};
  display: ${(props) => (props.open ? "flex" : "none")};
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  transition: right 0.3s ease-in-out;
  z-index: 10;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  @media (min-width: 1025px) {
    display: none;
  }
`;
const BackBtn = styled("img")`
  width: 40px;
  height: 30px;
  position: absolute;
  top: 10px;
  left: 20px;
  content: "";
  padding: 10px;
`;
export default function Navbar() {
  const { isOpen } = useNavbar();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
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
          <StyledHeading $fontSize="18px" $cursor="pointer">
            HOME
          </StyledHeading>
        </NavItem>
        <NavItem>
          <Expandable>
            <TinyHeading $fontSize="18px" $cursor="pointer">
              SERVICES
            </TinyHeading>
            <Button
              src="/images/button.png"
              alt="expandable"
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
            />
          </Expandable>
        </NavItem>
        <NavItem>
          <StyledHeading $fontSize="18px" $cursor="pointer">
            OUR TEAM
          </StyledHeading>
        </NavItem>
        <NavItem>
          <StyledHeading $fontSize="18px" $cursor="pointer">
            PRICE
          </StyledHeading>
        </NavItem>
        <NavItem>
          <StyledHeading $fontSize="18px" $cursor="pointer">
            CONTACTS
          </StyledHeading>
        </NavItem>
      </MobileNav>
      {isSubMenuOpen && (
        <MobileSubMenu open={isSubMenuOpen}>
          <BackBtn
            src="/images/back.png"
            alt="back-arrow"
            onClick={() => setIsSubMenuOpen(false)}
          />
          <NavItem>
            <StyledHeading $fontSize="18px">
              THERAPEUTIC DENTISTRY
            </StyledHeading>
          </NavItem>
          <NavItem>
            <StyledHeading $fontSize="18px">ORTHOPEDIC DENTISTRY</StyledHeading>
          </NavItem>
          <NavItem>
            <StyledHeading $fontSize="18px">PEDIATRIC DENTISTRY</StyledHeading>
          </NavItem>
          <NavItem>
            <StyledHeading $fontSize="18px">SURGICAL DENTISTRY</StyledHeading>
          </NavItem>
        </MobileSubMenu>
      )}
    </NavContainer>
  );
}
