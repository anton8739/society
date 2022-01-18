import UserFoto from "./UserFoto";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getFotos} from "../../../../redux/selectors/userAccountSelector";
import {getFotoListByUserId} from "../../../../redux/reducers/userAccountReducer";

let mapStateToProps = (state) => {
    return {
        currentUserId : state.userAccount.user.id,
        fotos : getFotos(state)
    }
}

export default compose(
    connect (mapStateToProps, {getFotoListByUserId}),
    withRouter
)(UserFoto);;