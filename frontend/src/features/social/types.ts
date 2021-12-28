export enum FriendStatus {
  Online = 'online',
  Offline = 'offline',
  InGame = 'inGame',
  Away = 'away',
  LolMobile = 'LoL+',
}

export type IFriend = {
  id: number;
  name: string;
  groupId?: number;
  online?: boolean;
  status: FriendStatus;
  message?: string;
};

export type IFriendGroup = {
  id: number;
  name: string;
};

export type FriendsProps = {
  friends: Array<IFriend>;
  groups: Array<IFriendGroup>;
};

export type FriendsListProps = {
  friends: Array<IFriend>;
  groups: Array<IFriendGroup>;
};

export type FriendsIconProps = {
  name: string;
  icon: JSX.Element;
};

export type FriendsLabelProps = {
  title: string;
};

export type FriendGroupProps = {
  title: string;
  friends: Array<IFriend>;
  connected: number;
};

export type FriendProps = {
  name: string;
  status: FriendStatus;
  message?: string;
};
