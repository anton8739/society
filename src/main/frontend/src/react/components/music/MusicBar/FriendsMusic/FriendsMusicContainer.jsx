import {getFriends} from "../../../../../redux/selectors/musicSelector";
import FriendsMusic from "./FriendsMusic";
import {connect} from "react-redux";
import {getFriendsListForMusicPage} from "../../../../../redux/reducers/musicReducer";

let mapStateToProps = (state) => {
    return {
        currentUserId : state.userAccount.user.id,
        friends : getFriends(state)
    }
}

export default connect (mapStateToProps, {getFriendsListForMusicPage}) (FriendsMusic);