import { FC } from 'react';
import NavItem, { NavItemProps } from './NavItem';

interface NavMenuProps {
  items: NavItemProps[];
}

const NavMenu: FC<NavMenuProps> = ({ items }) => {
  return (
    <div>
      {items.map(({ title, link }) => (
        <NavItem key={link} title={title} link={link} />
      ))}
    </div>
  );
};

export default NavMenu;
