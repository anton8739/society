import UserMusic from "./UserMusic";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getUserName} from "../../../../redux/selectors/userAccountSelector";
import {getAudioListByUserId} from "../../../../redux/reducers/userAccountReducer";

let mapStateToProps = (state) => {
    return {
        currentUserId : state.userAccount.user.id,
        username : getUserName(state),
        audioList : state.userAccount.audioList
    }
}

export default compose(
    connect (mapStateToProps, {getAudioListByUserId}),
    withRouter
)(UserMusic);;