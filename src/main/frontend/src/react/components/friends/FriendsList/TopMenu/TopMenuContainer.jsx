import TopMenu from "./TopMenu";
import {connect} from "react-redux";
import {getFriendsOnline, getNumberOfFriends} from "../../../../../redux/selectors/friendsSelector";

let mapStateToProps = (state) => {
    return {
        numberOfFriends: getNumberOfFriends(state),
        friendsOnline: getFriendsOnline(state)
    }
}

export default connect (mapStateToProps, {}) (TopMenu);