import { faFilter, faFolderPlus, faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import styled from 'styled-components';
import FriendsIcon from './FriendsIcon';
import FriendsLabel from './FriendsLabel';

const StyledFriendsHeader = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: grid;
  grid-template-columns: auto repeat(4, 36px);
  align-items: center;
`;

const FriendsHeader: FC = () => (
  <StyledFriendsHeader>
    <FriendsLabel title="Social" />
    <FriendsIcon name="Add friend" icon={<FontAwesomeIcon icon={faUserPlus} />} />
    <FriendsIcon name="Add category" icon={<FontAwesomeIcon icon={faFolderPlus} />} />
    <FriendsIcon name="Options" icon={<FontAwesomeIcon icon={faFilter} />} />
    <FriendsIcon name="Filter" icon={<FontAwesomeIcon icon={faSearch} />} />
  </StyledFriendsHeader>
);

export default FriendsHeader;
