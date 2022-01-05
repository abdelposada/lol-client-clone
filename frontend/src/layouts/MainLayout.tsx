import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks'; // useAppDispatch
// import { addFriend } from '../features/social/socialSlice';

import Navbar from '../components/navbar/Navbar';
import ProfileCard from '../features/profile/ProfileCard';
import Social from '../features/social';

const StyledAppLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 0 0 100%;
  box-sizing: border-box;
  border-top: 3px solid #785a28;
  flex-direction: row;
`;

const StyledSidebar = styled.div`
  display: flex;
  flex: 0 0 17.5%;
  flex-direction: column;
  background-color: ${(props) => props.theme.mainBG};
`;

const StyledContentWrapper = styled.div`
  flex: 0 0 82.5%;
  position: relative;
`;

// const StyledPageWrapper = styled.div`
//   height: 100%;
//   padding-top: calc(100vw / 16);
//   box-sizing: border-box;
//   background: white;
// `;

const MainLayout = () => {
  const friends = useAppSelector(({ social }) => social.friends);
  const groups = useAppSelector(({ social }) => social.groups);

  return (
    <StyledAppLayout>
      <StyledContentWrapper>
        <Navbar />
        {/* <StyledPageWrapper> */}
        <Outlet />
        {/* </StyledPageWrapper> */}
      </StyledContentWrapper>
      <StyledSidebar>
        <ProfileCard name="Tatsumaki" icon="5200" message="kappataz" level={420.5} />
        <Social friends={friends} groups={groups} />
      </StyledSidebar>
    </StyledAppLayout>
  );
};

export default MainLayout;
