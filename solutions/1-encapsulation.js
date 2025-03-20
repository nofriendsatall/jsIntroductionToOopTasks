// BEGIN
export const getMutualFriends = (user1, user2) => {
  const friendsOfFirst = user1.getFriends();
  const friendIds = new Set(friendsOfFirst.map((friend) => friend.id));
  const friendsOfSecond = user2.getFriends();
  return friendsOfSecond.filter((friend) => friendIds.has(friend.id));
};

export const makeUser = (user) => user;

// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});