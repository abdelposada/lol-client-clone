import { FC } from 'react';
import { faCoins, faHammer, faSuitcase, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import NavbarMenu from './NavbarMenu';
import NavItem from './NavItem';
import StylishButton from './StylishButton';

const StyledFlex = styled.div`
  display: flex;
`;

const StyledNavbar = styled.div`
  display: flex;
  padding: 0 2.5rem;
  height: calc(100vw / 16);
  justify-content: space-between;
  color: #cdbe91;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #465150;
`;

const Navbar: FC = () => (
  <StyledNavbar>
    <StyledFlex>
      <StylishButton>Juega</StylishButton>
      <NavbarMenu>
        <NavItem to="/">Inicio</NavItem>
        <NavItem to="tft">TFT</NavItem>
        <NavItem to="clash">Clash</NavItem>
      </NavbarMenu>
    </StyledFlex>
    <StyledFlex>
      <NavbarMenu>
        <NavItem to="profile">
          <FontAwesomeIcon icon={faUserCircle} />
        </NavItem>
        <NavItem to="collection">
          <FontAwesomeIcon icon={faSuitcase} />
        </NavItem>
        <NavItem to="loot">
          <FontAwesomeIcon icon={faHammer} />
        </NavItem>
        <NavItem to="mystore">
          <FontAwesomeIcon icon={faUserCircle} />
        </NavItem>
        <NavItem to="store">
          <FontAwesomeIcon icon={faCoins} />
        </NavItem>
      </NavbarMenu>
    </StyledFlex>
  </StyledNavbar>
);

export default Navbar;
