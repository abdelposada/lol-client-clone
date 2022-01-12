import { Outlet } from 'react-router-dom';
import NavMenu from '../../components/menu/NavMenu';
import RouteWrapper from '../../components/RouteWrapper';

const HomeLayout = () => {
  const navItems = [
    { title: 'Temporada 2022', link: '/newseason' },
    { title: 'Galante', link: '/debonair' },
    { title: 'Vista general', link: './' },
    { title: 'TFT', link: 'tftnews' },
    { title: 'Notas de versión', link: '/patchnotes' },
  ];
  return (
    <RouteWrapper background="url(/assets/img/champion/centered/MissFortune_8.jpg) transparent no-repeat center center /cover">
      <NavMenu items={navItems} />
      <Outlet />
    </RouteWrapper>
  );
};

export default HomeLayout;
