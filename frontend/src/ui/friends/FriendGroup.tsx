import { FC } from 'react';
import styled from 'styled-components';
import Friend from './Friend';
import { FriendGroupProps } from './types';

const StyledFriendGroup = styled.div`
  text-transform: uppercase;
`;

const FriendGroup: FC<FriendGroupProps> = ({ title, friends, connected }) => (
  <StyledFriendGroup>
    {title} ({connected}/{friends.length})
    {friends.map(({ name }) => (
      <Friend name={name} />
    ))}
  </StyledFriendGroup>
);
export default FriendGroup;
