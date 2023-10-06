// features/rootSlice.js

import {combineReducers} from 'redux';
import authReducer from './auth/AuthSlice';
import userSlice from "../saga/auth/userSlice";
import exampleReducer from "../saga/auth/AuthAction";

const rootSlice = combineReducers({
    auth: authReducer,
    user: userSlice,
    example: exampleReducer
    // 다른 슬라이스도 추가할 수 있습니다.
});

export default rootSlice;
