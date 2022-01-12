import { Outlet } from 'react-router-dom';
import NavMenu from '../../components/menu/NavMenu';
import RouteWrapper from '../../components/RouteWrapper';

const TFTLayout = () => {
  const navItems = [
    { title: 'Inicio', link: './' },
    { title: 'Pase de batalla', link: 'seasonpass' },
    { title: 'Historial de partidas', link: 'history' },
  ];

  return (
    <RouteWrapper background="url(/assets/img/champion/centered/Jinx_0.jpg) transparent no-repeat center center /cover">
      <NavMenu items={navItems} />
      <Outlet />
    </RouteWrapper>
  );
};

export default TFTLayout;
