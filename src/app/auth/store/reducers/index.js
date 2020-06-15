import {combineReducers} from 'redux';
import user from './userReducer';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

const authReducers = combineReducers({
    user,
    loginReducer,
    registerReducer
});

export default authReducers;