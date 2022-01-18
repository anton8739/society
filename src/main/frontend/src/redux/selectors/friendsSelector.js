export  let getFriendsList = (state) => {
    return state.friends.friendsList;
}

export  let getPossibleFriends = (state) => {
    return state.friends.possibleFriends;
}

export let getNumberOfFriends = (state) => {
    return state.friends.numberOfFriends;
}

export let getFriendsOnline = (state) => {
    return state.friends.friendsOnline;
}