// 액션 타입 정의
const LOGIN_ACTION = 'LOGIN_ACTION';


// 액션 생성 함수 정의
function LoginAction(data) {
    return {
        type: LOGIN_ACTION, // 액션 타입
        payload: data
        // 데이터를 payload에 저장
    };
}

// 리듀서에서 액션 처리
function LoginReducer(state, action) {
    if (action.type === LOGIN_ACTION) {
        const receivedData = action.payload;
        return {
            ...state,
            data: receivedData,
        };
    } else {
        return state;
    }
}
