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
  padding: 0 2rem;
  flex: 0 0 82.5%;
  height: 100px;
  justify-content: space-between;
  color: #cdbe91;
  box-sizing: border-box;
`;

const Navbar: FC = () => (
  <StyledNavbar>
    <StyledFlex>
      <StylishButton>Juega</StylishButton>
      <NavbarMenu>
        <NavItem>Inicio</NavItem>
        <NavItem>TFT</NavItem>
        <NavItem>Clash</NavItem>
      </NavbarMenu>
    </StyledFlex>
    <StyledFlex>
      <NavbarMenu>
        <NavItem>
          <FontAwesomeIcon icon={faUserCircle} />
        </NavItem>
        <NavItem>
          <FontAwesomeIcon icon={faSuitcase} />
        </NavItem>
        <NavItem>
          <FontAwesomeIcon icon={faHammer} />
        </NavItem>
        <NavItem>
          <FontAwesomeIcon icon={faUserCircle} />
        </NavItem>
        <NavItem>
          <FontAwesomeIcon icon={faCoins} />
        </NavItem>
      </NavbarMenu>
    </StyledFlex>
  </StyledNavbar>
);

export default Navbar;
