import {combineReducers, createStore} from 'redux';
import {loginReducer} from "../reducers/loginReducer";
import {passwordReducer} from "../reducers/passwordReducer";
import {profileReducer} from "../reducers/profileReducer";
import {registerReducer} from "../reducers/registerReducer";

const reducers = combineReducers({
    login: loginReducer,
    password: passwordReducer,
    profile: profileReducer,
    register: registerReducer
});

const store = createStore(reducers);

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;
