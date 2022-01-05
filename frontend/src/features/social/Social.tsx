import { FC } from 'react';
import styled from 'styled-components';
import FriendsHeader from './FriendsHeader';
import FriendsList from './FriendsList';
import { FriendsProps } from './types';

const StyledSocial = styled.div`
  height: 100%;
  color: ${(props) => props.theme.mainColor};
`;

const Social: FC<FriendsProps> = ({ friends, groups }) => (
  <StyledSocial>
    <FriendsHeader />
    <FriendsList friends={friends} groups={groups} />
  </StyledSocial>
);

export default Social;
