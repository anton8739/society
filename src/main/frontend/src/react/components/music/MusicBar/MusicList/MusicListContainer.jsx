import {getCurrnetComposetion, getMusic} from "../../../../../redux/selectors/musicSelector";
import MusicList from "./MusicList";
import {connect} from "react-redux";
import {getCurrentPlayListByUserId, setCurrentSong} from "../../../../../redux/reducers/musicReducer";

let mapStateToProps = (state) => {
    return {
        currentPlayList : getMusic(state),
        currentComposetion : getCurrnetComposetion(state)
    }
}

export default connect (mapStateToProps, {setCurrentSong,getCurrentPlayListByUserId}) (MusicList);