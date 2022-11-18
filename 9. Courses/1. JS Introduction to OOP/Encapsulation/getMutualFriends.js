// @ts-check
/* eslint-disable import/prefer-default-export */

// BEGIN (write your solution here)
export function getMutualFriends(user1, user2) {
  const friendsFrom = {
    user1: {
      flat: user1.getFriends(),
      groupedBy: {
        id: null,
      },
    },
    user2: {
      flat: user2.getFriends(),
      groupedBy: {
        id: null,
      },
    },
  };

  friendsFrom.user1.groupedBy.id = friendsFrom.user1.flat.reduce((group, user) => ({
    ...group,
    [user.id]: user,
  }), {});

  return friendsFrom.user2.flat.filter((friend) => {
    return Boolean(friendsFrom.user1.groupedBy.id[friend.id]);
  });
}
// END
