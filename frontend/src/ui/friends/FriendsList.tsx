import { FC } from 'react';
import styled from 'styled-components';
import FriendGroup from './FriendGroup';
import { FriendsProps } from './types';

const StyledFriendsList = styled.div``;

const FriendsList: FC<FriendsProps> = ({ friends, groups }) => {
  return (
    <StyledFriendsList>
      {groups.map(({ name, id }) => {
        const groupFriends = friends.filter((f) => f.groupId === id);
        const connected = groupFriends.filter((f) => f.status);
        return <FriendGroup title={name} friends={groupFriends} connected={connected.length} />;
      })}
    </StyledFriendsList>
  );
};

export default FriendsList;
