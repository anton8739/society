import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


export let AuthHoc = (Compoment) => {

    let AuthComponent = (props) => {
        async function f() {
            return 1;
        }
        if (!props.login) {
            return <Redirect to="/login"></Redirect>
        } else {
            return <Compoment {...props}/>
        }
    }
    let mapStateToProps = (state) => {
        return {
            login : state.auth.login
        }
    }
    return connect (mapStateToProps, {}) (AuthComponent);
}

