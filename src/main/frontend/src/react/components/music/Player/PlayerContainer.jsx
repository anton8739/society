import Player from "./Player";
import {connect} from "react-redux";
import {getCurrnetComposetion} from "../../../../redux/selectors/musicSelector";
import {setClickedTime, setCurTime, setDuration, setPlaying, setVolume} from "../../../../redux/reducers/musicReducer";

let mapStateToProps = (state) =>  {
    return {
        currentComposetion: getCurrnetComposetion(state)
    }
}

export default connect (mapStateToProps, {setDuration,setCurTime,setPlaying,setVolume,setClickedTime}) (Player);