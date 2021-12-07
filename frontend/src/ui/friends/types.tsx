export interface IFriend {
  id: number;
  name: string;
  groupId?: number;
  status?: boolean;
}

export interface IFriendGroup {
  id: number;
  name: string;
}

export interface FriendsProps {
  friends: Array<IFriend>;
  groups: Array<IFriendGroup>;
}

export interface FriendsListProps {
  friends: Array<IFriend>;
  groups: Array<IFriendGroup>;
}

export interface FriendsIconProps {
  name: string;
  icon: JSX.Element;
}

export interface FriendsLabelProps {
  title: string;
}

export interface FriendGroupProps {
  title: string;
  friends: Array<IFriend>;
  connected: number;
}

export interface FriendProps {
  name: string;
}
