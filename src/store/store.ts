import {combineReducers, createStore} from 'redux';
import {testReducer} from "./testReducer";

const reducers = combineReducers({
    testReducer: testReducer,

});

const store = createStore(reducers);

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;
