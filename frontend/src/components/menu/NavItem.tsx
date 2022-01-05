import { FC } from 'react';

export interface NavItemProps {
  title: string;
  link: string;
}

const NavItem: FC<NavItemProps> = ({ title, link }) => {
  return <div>{title}</div>;
};

export default NavItem;
