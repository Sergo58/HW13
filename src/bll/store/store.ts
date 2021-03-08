import {applyMiddleware, combineReducers, createStore} from 'redux';
import {loginReducer} from "../reducers/loginReducer";
import {passwordReducer} from "../reducers/passwordReducer";
import {profileReducer} from "../reducers/profileReducer";
import {registerReducer} from "../reducers/registerReducer";
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    login: loginReducer,
    password: passwordReducer,
    profile: profileReducer,
    register: registerReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;
