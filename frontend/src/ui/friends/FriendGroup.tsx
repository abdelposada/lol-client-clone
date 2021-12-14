import { FC, useState } from 'react';
import styled from 'styled-components';
import Friend from './Friend';
import { FriendGroupProps } from './types';

const StyledFriendGroup = styled.div`
  text-transform: uppercase;
  .friends-group-wrapper {
    cursor: pointer;
    display: inline-block;
    user-select: none;
  }
  .friends-container {
  }
`;

const FriendGroup: FC<FriendGroupProps> = ({ title, friends, connected }) => {
  const [showFriends, setShowFriends] = useState(true);
  const toggleShowFriends = () => {
    setShowFriends((sf) => !sf);
  };

  return (
    <StyledFriendGroup>
      <div className="friends-group-wrapper" onClick={toggleShowFriends}>
        <span></span> {title} ({connected}/{friends.length})
      </div>
      {showFriends && (
        <div className="friends-container">
          {friends.map(({ name, id }) => (
            <Friend name={name} key={id} />
          ))}
        </div>
      )}
    </StyledFriendGroup>
  );
};
export default FriendGroup;
