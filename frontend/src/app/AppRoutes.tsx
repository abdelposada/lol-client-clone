import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import General from '../features/home/General';
import HomeLayout from '../features/home/HomeLayout';
import TFT from '../features/home/TFT';
import TFTPage from '../features/tft/TFT';
import NotFound from '../features/notfound';
import TFTLayout from '../features/tft/TFTLayout';
import SeasonPass from '../features/tft/SeasonPass';
import History from '../features/tft/History';
import Login from '../features/login/Login';

// const DynamicHomeLayout = () => {
//   const useAuth = () => ({ user: 'fake' });
//   const auth = useAuth();
//   if (auth.user) {
//     return <MainLayout />;
//   }
//   return <LoginLayout />;
// };

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomeLayout />}>
          <Route path="tftnews" element={<TFT />} />
          <Route index element={<General />} />
        </Route>
        <Route path="/tft" element={<TFTLayout />}>
          <Route path="seasonpass" element={<SeasonPass />} />
          <Route path="history" element={<History />} />
          <Route index element={<TFTPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="clash" element={<Clash />} />
        <Route path="profile" element={<Profile />} />
        <Route path="collection" element={<Collection />} />
        <Route path="loot" element={<Loot />} />
        <Route path="mystore" element={<MyStore />} />
        <Route path="store" element={<Store />} /> */}
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
