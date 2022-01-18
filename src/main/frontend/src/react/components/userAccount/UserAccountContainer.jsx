import UserAccount from "./UserAccount";
import {AuthHoc} from "../../../hoc/authHoc";
import {connect} from "react-redux";
import {getUserById} from "../../../redux/reducers/userAccountReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        fetching : state.userAccount.fetching
    }
}

export default compose(
    AuthHoc,
    withRouter,
    connect (mapStateToProps, {getUserById})
)(UserAccount);