import UserVideo from "./UserVideo";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getUserName} from "../../../../redux/selectors/userAccountSelector";
import {getVideoListByUserId} from "../../../../redux/reducers/userAccountReducer";

let mapStateToProps = (state) => {
    return {
        currentUserId : state.userAccount.user.id,
        username : getUserName(state),
        videoList :state.userAccount.videoList,
    }
}

export default compose(
    connect (mapStateToProps, {getVideoListByUserId}),
    withRouter
)(UserVideo);;