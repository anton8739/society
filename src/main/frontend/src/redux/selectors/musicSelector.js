export let getFriends = (state) => {
    return state.music.friends;
}

export let getMusic = (state) => {
    return state.music.currentPlayList;
}
export let getCurrnetComposetion = (state) => {
    return state.music.currentComposetion;
}