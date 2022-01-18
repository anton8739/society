import {getNumberOfAlbums} from "../../../../../redux/selectors/photosSelector";
import {connect} from "react-redux";
import Menu from "./Menu";


let mapStateToProps = (state) => {
    return {
        numberOfAlbums : getNumberOfAlbums(state)
    }
}

export default connect (mapStateToProps, {}) (Menu);