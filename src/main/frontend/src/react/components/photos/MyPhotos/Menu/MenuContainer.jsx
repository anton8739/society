import { getNumberOfPhotos} from "../../../../../redux/selectors/photosSelector";
import {connect} from "react-redux";
import Menu from "./Menu";


let mapStateToProps = (state) => {
    return {
        numberOfPhotos : getNumberOfPhotos(state)
    }
}

export default connect (mapStateToProps, {}) (Menu);