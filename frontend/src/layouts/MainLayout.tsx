import styled from 'styled-components';
import { useAppSelector } from '../app/hooks'; // useAppDispatch
// import { addFriend } from '../features/social/socialSlice';

import Navbar from '../components/navbar/Navbar';
import ProfileCard from '../features/profile/ProfileCard';
import Social from '../features/social';

const StyledAppLayout = styled.div`
  display: flex;
  width: 100%;
  flex: 0 0 100%;
  border-top: 3px solid #785a28;
  .wrapper {
    display: flex;
    flex-direction: row;
    flex: 0 0 100%;
    flex-wrap: wrap;
    /* margin-top: 1.5rem; */
  }
  .social {
    display: flex;
    flex: 0 0 17.5%;
    flex-direction: column;
  }
`;

const MainLayout = () => {
  const friends = useAppSelector(({ social }) => social.friends);
  const groups = useAppSelector(({ social }) => social.groups);
  return (
    <StyledAppLayout>
      <div className="wrapper">
        <Navbar />
        <div className="social">
          <ProfileCard name="Tatsumaki" icon="5200" message="kappataz" level={420.5} />
          <Social friends={friends} groups={groups} />
        </div>
      </div>
    </StyledAppLayout>
  );
};

export default MainLayout;
