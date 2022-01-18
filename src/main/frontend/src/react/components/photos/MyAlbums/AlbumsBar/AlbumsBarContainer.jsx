import {getAlbums} from "../../../../../redux/selectors/photosSelector";
import AlbumBar from "./AlbumsBar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        albums : getAlbums(state)
    }
}

export default connect (mapStateToProps, {}) (AlbumBar);