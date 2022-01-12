import { FC } from 'react';
import styled from 'styled-components';
import NavItem, { NavItemProps } from './NavItem';

interface NavMenuProps {
  items: NavItemProps[];
}

const StyledNavMenu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding: 0 3.25rem;
  margin-bottom: 0;
  list-style: none;
`;

const NavMenu: FC<NavMenuProps> = ({ items }) => {
  return (
    <StyledNavMenu>
      {items.map(({ title, link }) => (
        <NavItem key={link} title={title} link={link} />
      ))}
    </StyledNavMenu>
  );
};

export default NavMenu;
