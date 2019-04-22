import { createStore, applyMiddleware, combineReducers } from 'redux'
import getList from '../reducer/index'


let reducer = combineReducers({ getList });
let store = createStore(reducer);
export default store;