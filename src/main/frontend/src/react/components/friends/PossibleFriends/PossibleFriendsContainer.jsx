import PossibleFriends from "./PossibleFriends";
import {connect} from "react-redux";
import {getPossibleFriends} from "../../../../redux/selectors/friendsSelector";
import {getPossibleFriendsListByUserId} from "../../../../redux/reducers/friendsReducer";

let mapStateToProps = (state) => {
    return {
        currentUserId : state.userAccount.user.id,
        possibleFriends: getPossibleFriends(state)
    }
}

export default connect (mapStateToProps, {getPossibleFriendsListByUserId}) (PossibleFriends);