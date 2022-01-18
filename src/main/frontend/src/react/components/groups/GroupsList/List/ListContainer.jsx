import List from "./List";
import {connect} from "react-redux";
import {getGroupsList} from "../../../../../redux/selectors/groupsSelector";


let mapStateToProps = (state) => {
    return {
        groupsList : getGroupsList(state)
    }
}

export default connect (mapStateToProps, {}) (List);