import PossibleGroups from "./PossibleGroups";
import {connect} from "react-redux";
import {getPossibleGroups} from "../../../../redux/selectors/groupsSelector";

let mapStateToProps = (state) => {
    return {
        possibleGroups: getPossibleGroups(state)
    }
}

export default connect (mapStateToProps, {}) (PossibleGroups);