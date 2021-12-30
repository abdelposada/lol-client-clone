import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
//import { useGetSummonerByNameQuery } from '../../services/riotApi';
import { FriendProps, FriendStatus } from './types';

interface FriendMessageProps {
  status: FriendStatus;
}

const StyledFriend = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 5px;
`;

const StyledFriendMessage = styled.div<FriendMessageProps>`
  color: ${({ status }) =>
    status === FriendStatus.Online ? '#09a646' : status === FriendStatus.InGame ? '#0acbe6' : '#5b5a56'};
`;

const StyledFriendIcon = styled.img`
  margin-left: 5px;
  margin-right: 10px;
  display: flex;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 3px solid #997530;
`;

const FriendRow: FC<FriendProps> = ({ name, message, status }) => {
  const [icon, setIcon] = useState(0);
  // const { data } = useGetSummonerByNameQuery('Tatsumaki');

  useEffect(() => {
    setIcon(Math.floor(Math.random() * 5212));
  }, []);

  return (
    <StyledFriend>
      <StyledFriendIcon src={`/assets/img/profileicon/${icon}.png`} />
      <div className="friend-details">
        <div className="friend-name">{name}</div>
        <StyledFriendMessage status={status}>{message ? message : status}</StyledFriendMessage>
      </div>
    </StyledFriend>
  );
};

export default FriendRow;
