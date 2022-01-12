import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export interface NavItemProps {
  title: string;
  link: string;
}

const StyledNavItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 0.5rem 1rem;
  color: #9f9a8c;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  position: relative;
  &:hover,
  &.active {
    color: #f0e6d2;
  }
  &.active {
    &::before {
      position: absolute;
      width: 100%;
      height: 2px;
      right: 0;
      bottom: 2px;
      left: 0;
      background: linear-gradient(to right, #091519, #cabc8f, #091519);
      content: '';
    }
  }
`;

const NavItem: FC<NavItemProps> = ({ title, link }) => {
  return (
    <StyledNavItem>
      <StyledNavLink to={link}>{title}</StyledNavLink>
    </StyledNavItem>
  );
};

export default NavItem;
