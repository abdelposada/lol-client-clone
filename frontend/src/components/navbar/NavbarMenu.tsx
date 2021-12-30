import { FC } from 'react';
import styled from 'styled-components';

const StyledNavbarMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
`;

const NavbarMenu: FC = ({ children }) => <StyledNavbarMenu>{children}</StyledNavbarMenu>;

export default NavbarMenu;
