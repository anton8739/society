import UserIcon from "./UserIcon";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getUserName} from "../../../../redux/selectors/userAccountSelector";

let mapStateToProps = (state) => {
    return {
        username : getUserName(state),
        img : state.userAccount.user.img
    }
}

export default compose(
    connect (mapStateToProps, {}),
    withRouter
)(UserIcon);;