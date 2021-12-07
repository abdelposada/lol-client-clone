import { FC } from 'react';
import styled from 'styled-components';
import { FriendsLabelProps } from './types';

const StyledFriendsLabel = styled.div`
  display: inline-block;
  text-transform: uppercase;
`;

const FriendsLabel: FC<FriendsLabelProps> = ({ title }) => <StyledFriendsLabel>{title}</StyledFriendsLabel>;

export default FriendsLabel;
