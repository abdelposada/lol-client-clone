import { FC } from 'react';
import styled from 'styled-components';
import { FriendsIconProps } from './types';

const StyledFriendsIcon = styled.button`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: wheat;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out; ;
`;

const FriendsIcon: FC<FriendsIconProps> = ({ name, icon }) => <StyledFriendsIcon>{icon}</StyledFriendsIcon>;

export default FriendsIcon;
