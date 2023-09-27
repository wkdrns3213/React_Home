// userSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: {
        email: '',
        password: '',
    },

};

const userSlice = createSlice({
    name: 'user', // 슬라이스 이름
    initialState,
    reducers: {
        setUser: (state, action) => {
            // 액션 페이로드로 전달된 JSON을 사용하여 user 객체를 업데이트합니다.
            state.user = action.payload;
        },
    },
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
