import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
    },
    reducers: {
        login: (state, action) => {
            const {email, password} = action.payload;

            // 로그인 로직을 여기에 구현하고 상태를 업데이트합니다.
            if (email === '사용자 이메일' && password === '사용자 비밀번호') {
                state.isAuthenticated = true;
                state.user = {email};
            }
        },
        logout: (state) => {
            // 로그아웃 로직을 여기에 구현하고 상태를 업데이트합니다.
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
