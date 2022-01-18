import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMW from 'redux-thunk';
import userAccountReducer from "./reducers/userAccountReducer";
import friendsReducer from "./reducers/friendsReducer";
import newsReducer from "./reducers/newsReducer";
import messagesReducer from "./reducers/messagesReducer";
import groupsReducer from "./reducers/groupsReducer";
import photosReducer from "./reducers/photosReducer";
import musicReducer from "./reducers/musicReducer";
import videoReducer from "./reducers/videoReducer";
import authReducer from "./reducers/authReducer";
import {reducer as formReducer} from 'redux-form';

let reducers =combineReducers({
    userAccount : userAccountReducer,
    friends : friendsReducer,
    news : newsReducer,
    messages : messagesReducer,
    groups : groupsReducer,
    photos :photosReducer,
    music : musicReducer,
    video : videoReducer,
    auth : authReducer,
    form : formReducer
})

export let store =createStore(reducers,applyMiddleware(thunkMW));

