import TopMenu from "./TopMenu";
import {connect} from "react-redux";
import {getFriendsOnline, getNumberOfFriends} from "../../../../../redux/selectors/friendsSelector";
import {getNumberOfGroups} from "../../../../../redux/selectors/groupsSelector";

let mapStateToProps = (state) => {
    return {
        numberOfGroups: getNumberOfGroups(state),
    }
}

export default connect (mapStateToProps, {}) (TopMenu);