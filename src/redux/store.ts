
import { createStore, combineReducers } from 'redux';
import {userReducer} from './username/username.reducer';

const rootReducer = combineReducers({
  username: userReducer,
})

let store = createStore(rootReducer);

export default store;