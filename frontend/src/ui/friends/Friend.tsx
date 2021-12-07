import { FC } from 'react';
import styled from 'styled-components';
import { FriendProps } from './types';

const StyledFriend = styled.div``;

const Friend: FC<FriendProps> = ({ name }) => <StyledFriend>{name}</StyledFriend>;

export default Friend;
