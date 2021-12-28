import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';
import styled from 'styled-components';
import FriendRow from './FriendRow';
import { FriendGroupProps } from './types';

const StyledFriendGroup = styled.div`
  .friends-group-wrapper {
    cursor: pointer;
    display: inline-block;
    user-select: none;
    text-transform: uppercase;
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
        <span>
          <FontAwesomeIcon icon={showFriends ? faCaretDown : faCaretRight} />
        </span>{' '}
        {title} ({connected}/{friends.length})
      </div>
      {showFriends && (
        <div className="friends-container">
          {friends.map(({ name, id, message, status }) => (
            <FriendRow name={name} key={id} message={message} status={status} />
          ))}
        </div>
      )}
    </StyledFriendGroup>
  );
};
export default FriendGroup;
