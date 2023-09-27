// 액션 타입 정의
const LOGIN_ACTION = 'LOGIN_ACTION';
export const EXAMPLE_ACTION = 'EXAMPLE_ACTION';
export const EXAMPLE_SUCCESS = 'EXAMPLE_SUCCESS';
export const EXAMPLE_FAILURE = 'EXAMPLE_FAILURE';

export const exampleAction = (payload) => ({
    type: EXAMPLE_ACTION,
    payload,
});

export const exampleSuccess = (data) => ({
    type: EXAMPLE_SUCCESS,
    data,
});

export const exampleFailure = (error) => ({
    type: EXAMPLE_FAILURE,
    error,
});


// 액션 생성 함수 정의
function LoginAction(data) {
    return {
        type: LOGIN_ACTION, // 액션 타입
        payload: data, // 데이터를 payload에 저장
    };
}

// 리듀서에서 액션 처리
function LoginReducer(state, action) {
    switch (action.type) {
        case LOGIN_ACTION:
            const receivedData = action.payload; // payload에서 데이터 읽어오기
            // 상태 업데이트 또는 다른 작업 수행
            return {
                ...state,
                data: receivedData,
            };
        default:
            return state;
    }
}
