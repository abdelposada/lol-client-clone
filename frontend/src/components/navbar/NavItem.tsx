import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavItem = styled(Link)`
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

interface NavItemProps {
  to: string;
}

const NavItem: FC<NavItemProps> = ({ children, to }) => <StyledNavItem to={to}>{children}</StyledNavItem>;

export default NavItem;
