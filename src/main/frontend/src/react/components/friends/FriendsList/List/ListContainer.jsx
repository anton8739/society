import List from "./List";
import {connect} from "react-redux";
import {getFriendsList} from "../../../../../redux/selectors/friendsSelector";
import {getFriendsListByUserId} from "../../../../../redux/reducers/friendsReducer";



let mapStateToProps = (state) => {
    return {
        currentUserId : state.userAccount.user.id,
        friendList : state.friends.friendsList
    }
}

export default connect (mapStateToProps, {getFriendsListByUserId}) (List);