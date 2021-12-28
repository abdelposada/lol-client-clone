import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FriendStatus } from './types';
import { IFriend, IFriendGroup } from './types';

interface FriendsState {
  friends: Array<IFriend>;
  groups: Array<IFriendGroup>;
}

const initialState: FriendsState = {
  friends: [
    {
      id: 1,
      name: 'LeoDecko',
      groupId: 4,
      online: true,
      status: FriendStatus.Online,
      message: 'Me gusta la japi',
    },
    {
      id: 2,
      name: 'Shinobu',
      groupId: 3,
      status: FriendStatus.InGame,
      online: true,
    },
    {
      id: 3,
      name: 'TavoOzl',
      status: FriendStatus.Online,
      groupId: 2,
    },
    {
      id: 4,
      name: 'Test',
      status: FriendStatus.Online,
      groupId: 1,
    },
    {
      id: 5,
      name: '2B',
      groupId: 5,
      status: FriendStatus.Offline,
      online: false,
    },
    {
      id: 6,
      name: 'Nickke',
      groupId: 4,
      status: FriendStatus.Away,
      online: true,
    },
    {
      id: 7,
      name: 'Crocus Pocus',
      groupId: 4,
      status: FriendStatus.LolMobile,
      online: false,
    },
  ],
  groups: [
    {
      id: 1,
      name: 'General',
    },
    {
      id: 2,
      name: 'Desconectado',
    },
    {
      id: 3,
      name: 'Nombres (y)',
    },
    {
      id: 4,
      name: 'Amigos',
    },
    {
      id: 5,
      name: 'Yorha',
    },
  ],
};

const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    addFriend: (state) => {
      state.friends.push({
        id: 7,
        name: 'Crocus Pocus2',
        groupId: 4,
        status: FriendStatus.LolMobile,
        online: false,
      });
    },
  },
});

export const { addFriend } = socialSlice.actions;

export default socialSlice.reducer;
