import UserFriends from "./UserFriends";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getUserName} from "../../../../redux/selectors/userAccountSelector";
import {getFriendsListByUserId} from "../../../../redux/reducers/userAccountReducer";

let mapStateToProps = (state) => {
    return {
        currentUserId :state.userAccount.user.id,
        username : getUserName(state),
        friendList : state.userAccount.friendList
    }
}

export default compose(
    connect (mapStateToProps, {getFriendsListByUserId}),
    withRouter
)(UserFriends);;