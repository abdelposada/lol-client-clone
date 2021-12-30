import { FC } from 'react';
import styled from 'styled-components';

interface ProfileCardProps {
  name: string;
  icon: string;
  message: string;
  level: number;
}

const StyledProfileCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.mainBG};
`;

const StyledProfileCardIcon = styled.img`
  margin-left: 5px;
  margin-right: 10px;
  display: flex;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px solid #997530;
`;

const ProfileCard: FC<ProfileCardProps> = ({ name, icon, message, level }) => {
  return (
    <StyledProfileCard>
      <StyledProfileCardIcon src={`/assets/img/profileicon/${icon}.png`} />
      <div>
        <div>{name}</div>
        <div>{message}</div>
      </div>
    </StyledProfileCard>
  );
};

export default ProfileCard;
