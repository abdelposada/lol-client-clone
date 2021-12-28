import { FC } from 'react';
import styled from 'styled-components';
import { FriendsProps } from './types';
import FriendGroup from './FriendGroup';

const StyledFriendsList = styled.div``;

const FriendsList: FC<FriendsProps> = ({ friends, groups }) => {
  return (
    <StyledFriendsList>
      {groups.map(({ name, id }) => {
        const groupFriends = friends.filter((f) => f.groupId === id);
        const connected = groupFriends.filter((f) => f.online);
        return <FriendGroup title={name} friends={groupFriends} connected={connected.length} key={id} />;
      })}
    </StyledFriendsList>
  );
};

export default FriendsList;
