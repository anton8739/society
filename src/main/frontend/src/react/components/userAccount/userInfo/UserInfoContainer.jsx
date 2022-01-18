import UserInfo from "./UserInfo";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getUserName} from "../../../../redux/selectors/userAccountSelector";
import {getUserById} from "../../../../redux/reducers/userAccountReducer";

let mapStateToProps = (state) => {
    return {
        username : state.userAccount.user.username,
        userSurname : state.userAccount.user.userSurname,
        birthday : state.userAccount.user.birthday,
        family :state.userAccount.user.family,
        education : state.userAccount.user.education
    }
}

export default compose(
    connect (mapStateToProps, {getUserById}),
    withRouter
)(UserInfo);