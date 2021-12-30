import { FC } from 'react';
import styled from 'styled-components';

const StyledNavItem = styled.a`
  display: flex;
  align-items: center;
  /* height: 100%; */
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  height: 100%;
  outline: none;
  text-transform: uppercase;
  padding: 0rem 1.25rem;
  cursor: pointer;
  svg {
    font-size: 1.75rem;
  }

  &:hover {
    background: #55514280;
    background: linear-gradient(180deg, transparent 0%, transparent 40%, #55514280 100%);
  }
`;

const NavItem: FC = ({ children }) => <StyledNavItem>{children}</StyledNavItem>;

export default NavItem;
