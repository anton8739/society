import PhotoBar from "./PhotosBar";
import {connect} from "react-redux";
import {getMyPhotos} from "../../../../../redux/selectors/photosSelector";
import {getFotoListbyUserId} from "../../../../../redux/reducers/photosReducer";

let mapStateToProps = (state) => {
    return {
        currentUserId : state.userAccount.user.id,
        MyPhotos : getMyPhotos(state)
    }
}

export default connect (mapStateToProps, {getFotoListbyUserId}) (PhotoBar);