import { FC } from 'react';
import styled from 'styled-components';
import FriendsHeader from './FriendsHeader';
import FriendsList from './FriendsList';
import { FriendsProps } from './types';

const StyledFriends = styled.div`
  max-width: 280px;
  height: 100%;
  background-color: ${(props) => props.theme.mainBG};
  color: ${(props) => props.theme.mainColor};
`;

const Friends: FC<FriendsProps> = ({ friends, groups }) => (
  <StyledFriends>
    <FriendsHeader />
    <FriendsList friends={friends} groups={groups}></FriendsList>
  </StyledFriends>
);

export default Friends;
