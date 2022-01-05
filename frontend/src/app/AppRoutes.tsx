import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../features/home/Home';
import LoginLayout from '../layouts/LoginLayout';
import MainLayout from '../layouts/MainLayout';

const DynamicHome = () => {
  const useAuth = () => ({ user: 'fake' });
  const auth = useAuth();
  if (auth.user) {
    return <MainLayout />;
  }
  return <LoginLayout />;
};

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DynamicHome />}>
        <Route index element={<Home />} />
        {/* <Route path="tft" element={<TFT />} />
        <Route path="clash" element={<Clash />} />
        <Route path="profile" element={<Profile />} />
        <Route path="collection" element={<Collection />} />
        <Route path="loot" element={<Loot />} />
        <Route path="mystore" element={<MyStore />} />
        <Route path="store" element={<Store />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
