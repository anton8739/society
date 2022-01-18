import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


export let IfLogInedHoc = (Compoment) => {

    let CheckLoginComponent = (props) => {

        if (!props.login) {
            return <Compoment {...props}/>
        } else {
            return <Redirect to="/account"></Redirect>
        }
    }
    let mapStateToProps = (state) => {
        return {
            login : state.auth.login
        }
    }
    return connect (mapStateToProps, {}) (CheckLoginComponent);
}


