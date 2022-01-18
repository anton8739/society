import DialogsList from "./DialogsList";
import {connect} from "react-redux";
import {getDialogs} from "../../../../../redux/selectors/messagesSelector";

let mapStateToProps = (state) => {
    return {
        dialogs : getDialogs(state)
    }
}

export default connect (mapStateToProps,{}) (DialogsList);