import VideoList from "./VideoList";
import {connect} from "react-redux";
import {getVideoList} from "../../../../redux/selectors/videoSelector";
import {getVideoListByUserId} from "../../../../redux/reducers/videoReducer";

let mapStateToProps = (state) => {
    return {
        currentUserId: state.userAccount.user.id,
        videoList: getVideoList(state)
    }
}

export default connect(mapStateToProps, {getVideoListByUserId})(VideoList)