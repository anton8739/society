import Cookies from 'universal-cookie';
import {AuthAPI} from "../../api/authApi";

const cookies = new Cookies();

let login, token, role, id, username, userSurname, img = null;
if (cookies.get('loginedUser')) {
    login = cookies.get('loginedUser').login;
    token = cookies.get('loginedUser').token;
    role = cookies.get('loginedUser').role;
    username = cookies.get('loginedUser').username;
    userSurname = cookies.get('loginedUser').userSurname;
    id = cookies.get('loginedUser').id;
    img = cookies.get('loginedUser').img;
}
let inicializationState = {

    login: login,
    token: token,
    username: username,
    userSurname: userSurname,
    role: role,
    id: id,
    img: img,
    fetching: false,
    errorMessage: null,
}

let authReducer = (state = inicializationState, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_USER':

            return {
                ...state,
                login: action.login,
                token: action.token,
                role: action.role,
                userSurname: action.userSurname,
                username: action.username,
                img: action.img,
                errorMessage: null
            };
        case 'SET_FETCHING' :
            return {
                ...state,
                fetching: action.value
            }
        case 'SET_ERROR_MESSAGE' :
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        case  'LOG_OUT':
            cookies.remove('loginedUser');
            console.log("+++");
            return {
                ...state,
                login: null,
                token: null,
                role: null,
                errorMessage: null
            };
        default :
            return state;
    }
}

/* ACTIONS */

export let setActiveUser = (login, token, role, id, username, userSurname, img) => {
    return {
        type: 'SET_ACTIVE_USER',
        login: login,
        token: token,
        userSurname: userSurname,
        username: username,
        img: img,
        role: role,
        id: id
    }
}
export let setFetching = (value) => {
    return {
        type: 'SET_FETCHING',
        value: value
    }
}
export let setErrorMessage = (errorMessage) => {
    return {

        type: 'SET_ERROR_MESSAGE',
        errorMessage: errorMessage
    }
}
export let logOut = () => {
    console.log("sd")
    return {
        type: 'LOG_OUT',
    }
}


/* THUNKS */
export let logInUser = (login, password) => (dispatch) => {
    dispatch(setFetching(true));
    AuthAPI.login(login, password).then(respounse => {
            console.log(respounse);
            cookies.set('loginedUser', {
                id: respounse.data.id,
                token: 'Bearer_' + respounse.data.token,
                login: respounse.data.login,
                role: respounse.data.role,
                username: respounse.data.username,
                userSurname: respounse.data.userSurname,
                img: respounse.data.img

            }, {path: '/'});
            dispatch(setActiveUser(respounse.data.login,
                respounse.data.token,
                respounse.data.role,
                respounse.data.id,
                respounse.data.username,
                respounse.data.userSurname,
                respounse.data.img));
            dispatch(setFetching(false));

        }
    ).catch((error) => {
        dispatch(setErrorMessage("Неверный логин или пароль"));
        dispatch(setFetching(false));
    })


}
export default authReducer;