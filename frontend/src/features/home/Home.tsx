import NavMenu from '../../components/menu/NavMenu';
import RouteWrapper from '../../components/RouteWrapper';

const Home = () => {
  const navItems = [{ title: 'Galante', link: '/debonair' }];
  return (
    <RouteWrapper background="url(/assets/img/champion/centered/Gangplank_0.jpg) transparent no-repeat center center /cover">
      <NavMenu items={navItems} />
    </RouteWrapper>
  );
};

export default Home;
